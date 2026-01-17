import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri: string = process.env.MONGODB_URI;
const options = {
  // MongoDB Atlas requires TLS/SSL for mongodb+srv:// connections
  retryWrites: true,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
  // For mongodb+srv://, TLS is automatically enabled by MongoDB driver
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDatabase(): Promise<Db> {
  try {
    const client = await clientPromise;
    // Extract database name from MONGODB_URI or use default
    // MongoDB URI format: mongodb+srv://user:pass@cluster.mongodb.net/database_name?params
    const uri = process.env.MONGODB_URI || '';
    
    // Extract database name more carefully
    // Look for the database name after the last / and before ? or end of string
    let dbName = 'prisboserviceswebsite'; // default
    
    try {
      // Parse the URI to extract database name
      const urlParts = uri.split('?')[0]; // Remove query parameters
      const pathParts = urlParts.split('/');
      
      // Database name is the last part after the host
      if (pathParts.length > 1) {
        const potentialDbName = pathParts[pathParts.length - 1].trim();
        // Only use it if it's not empty and doesn't contain invalid characters
        if (potentialDbName && !potentialDbName.includes('.') && potentialDbName.length > 0) {
          dbName = potentialDbName;
        }
      }
    } catch (parseError) {
      // If parsing fails, use default
      console.warn('Could not parse database name from URI, using default:', parseError);
    }
    
    // Test connection
    await client.db('admin').command({ ping: 1 });
    
    return client.db(dbName);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    // Provide helpful error messages
    if (errorMessage.includes('SSL') || errorMessage.includes('tlsv1')) {
      throw new Error(
        'MongoDB SSL connection failed. Please check:\n' +
        '1. Your IP address is whitelisted in MongoDB Atlas (Network Access)\n' +
        '2. Your connection string is correct\n' +
        '3. Your cluster is running\n' +
        `Original error: ${errorMessage}`
      );
    }
    
    throw new Error(`Failed to connect to database: ${errorMessage}`);
  }
}

export default clientPromise;
