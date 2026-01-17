import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { z } from 'zod';

const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  rating: z.number().min(1).max(5),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  category: z.enum(['general', 'service', 'website', 'suggestion', 'complaint']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validationResult = feedbackSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid feedback data',
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, rating, message, category } = validationResult.data;

    // Save to MongoDB
    const db = await getDatabase();
    const feedbackCollection = db.collection('feedback');

    const feedback = {
      name,
      email,
      rating,
      message,
      category: category || 'general',
      createdAt: new Date(),
    };

    await feedbackCollection.insertOne(feedback);

    return NextResponse.json(
      { success: true, message: 'Thank you for your feedback!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Feedback submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to submit feedback. Please try again.', details: errorMessage },
      { status: 500 }
    );
  }
}
