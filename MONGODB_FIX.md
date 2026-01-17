# MongoDB Connection Fix Guide

## Current Error
```
ERR_SSL_TLSV1_ALERT_INTERNAL_ERROR
ReplicaSetNoPrimary
```

## Solution Steps

### 1. Whitelist Your IP in MongoDB Atlas (MOST IMPORTANT)

1. Go to https://cloud.mongodb.com
2. Log in to your MongoDB Atlas account
3. Select your cluster
4. Click **"Network Access"** in the left sidebar
5. Click **"Add IP Address"** button
6. Choose one of these options:
   - **"Add Current IP Address"** (Recommended) - Click this to auto-detect your IP
   - **"Allow Access from Anywhere"** - Enter `0.0.0.0/0` (ONLY for development/testing)
7. Click **"Confirm"**
8. **Wait 2-3 minutes** for changes to propagate

### 2. Verify Your Connection String

Your `.env` file should have:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prisboserviceswebsite?retryWrites=true&w=majority
```

**Important checks:**
- ✅ Uses `mongodb+srv://` (not `mongodb://`)
- ✅ Has correct username and password
- ✅ Database name is `prisboserviceswebsite`
- ✅ No extra spaces or quotes

### 3. Test Connection

After whitelisting your IP, restart your dev server:
```bash
npm run dev
```

Then try submitting a form again.

### 4. Alternative: Check MongoDB Atlas Status

- Go to MongoDB Atlas Dashboard
- Check if your cluster is running (should show "Running" status)
- If paused, click "Resume" to start it

### 5. If Still Not Working

Try these additional steps:

1. **Get a fresh connection string:**
   - In MongoDB Atlas, go to your cluster
   - Click "Connect" → "Connect your application"
   - Copy the new connection string
   - Update your `.env` file

2. **Check database user permissions:**
   - Go to "Database Access" in MongoDB Atlas
   - Ensure your user has "Read and write to any database" permissions

3. **Verify network connectivity:**
   - Make sure you're not behind a corporate firewall blocking MongoDB
   - Try from a different network (mobile hotspot) to test

## Common Issues

- **"ReplicaSetNoPrimary"** = Can't connect to any replica set member (usually IP whitelist issue)
- **SSL errors** = Network/IP access problem
- **Timeout errors** = Connection string or network issue

## Still Having Issues?

Check the MongoDB Atlas status page: https://status.mongodb.com/
