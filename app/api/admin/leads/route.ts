import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getAdminSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!getAdminSession(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = await getDatabase();
    const leadsCollection = db.collection('leads');

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search') || '';
    const filter = searchParams.get('filter') || ''; // 'service' or 'product'

    // Build query
    const query: any = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (filter) {
      query.interestType = filter;
    }

    // Get total count
    const total = await leadsCollection.countDocuments(query);

    // Get leads with pagination
    const leads = await leadsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      leads: leads.map(lead => ({
        _id: lead._id.toString(),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        interestType: lead.interestType,
        interestName: lead.interestName,
        message: lead.message,
        sourcePage: lead.sourcePage,
        createdAt: lead.createdAt,
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
