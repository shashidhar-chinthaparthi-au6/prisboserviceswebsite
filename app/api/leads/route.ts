import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { leadFormSchema } from '@/lib/validation';
import { LeadFormInput } from '@/lib/validation';

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 }); // 15 minutes
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 submissions per 15 minutes
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate input
    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data: LeadFormInput = validationResult.data;

    // Save to MongoDB
    const db = await getDatabase();
    const leadsCollection = db.collection('leads');

    const lead = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      interestType: data.interestType,
      interestName: data.interestName,
      message: data.message,
      sourcePage: data.sourcePage,
      createdAt: new Date(),
    };

    await leadsCollection.insertOne(lead);

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you soon.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    // Return more detailed error in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to submit form: ${error instanceof Error ? error.message : 'Unknown error'}`
      : 'Failed to submit form. Please try again.';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
