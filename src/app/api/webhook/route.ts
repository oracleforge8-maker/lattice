import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendPurchaseConfirmation, sendAdminNotification } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature') || '';

    let event: Stripe.Event;

    // Verify webhook signature
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle successful payment
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      const customerEmail = session.customer_email || session.customer_details?.email || '';
      const customerName = session.customer_details?.name || '';
      const sessionId = session.id;
      const amount = session.amount_total || 0;

      console.log(`Payment successful: ${customerEmail} - $${amount / 100}`);

      // Send purchase confirmation email with download link
      if (customerEmail) {
        await sendPurchaseConfirmation({
          to: customerEmail,
          customerName,
          sessionId,
        });

        // Send admin notification
        await sendAdminNotification({
          customerEmail,
          sessionId,
          amount,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
