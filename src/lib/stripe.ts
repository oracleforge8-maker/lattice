import Stripe from 'stripe';

// Initialize Stripe with secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
  typescript: true,
});

// Product configuration
export const PRODUCT_CONFIG = {
  name: 'AI Career Acceleration Pack',
  price: 2700, // $27.00 in cents
  currency: 'usd',
  description: '50+ AI prompts + 10 resume templates + cover letter kit + interview system',
};

// Create a Stripe checkout session
export async function createCheckoutSession(customerEmail?: string): Promise<string> {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: PRODUCT_CONFIG.currency,
          product_data: {
            name: PRODUCT_CONFIG.name,
            description: PRODUCT_CONFIG.description,
          },
          unit_amount: PRODUCT_CONFIG.price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`,
    customer_email: customerEmail || undefined,
    metadata: {
      product: 'ai-career-pack',
    },
  });

  return session.url || '';
}
