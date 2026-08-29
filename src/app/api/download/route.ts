import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import path from 'path';
import fs from 'fs/promises';

// Force dynamic rendering since we use request.url
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session');

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    // Verify the session with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 403 });
    }

    // Path to the product file
    const productPath = path.join(process.cwd(), 'products', 'ai-career-acceleration-pack.zip');

    try {
      await fs.access(productPath);
    } catch {
      return NextResponse.json({ error: 'Product file not found' }, { status: 404 });
    }

    // Read the file
    const fileBuffer = await fs.readFile(productPath);

    // Return the file as a download
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="ai-career-acceleration-pack.zip"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}
