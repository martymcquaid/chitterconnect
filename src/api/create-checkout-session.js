import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { priceId, quantity, totalPrice, currency } = req.body;

      // Create a new price based on the calculated total and selected currency
      const newPrice = await stripe.prices.create({
        unit_amount: Math.round(totalPrice * 100), // Stripe expects amount in cents
        currency: currency.toLowerCase(),
        recurring: { interval: 'month' },
        product: 'your_product_id_here', // Replace with your actual product ID
      });

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: newPrice.id,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/canceled`,
        currency: currency.toLowerCase(),
      });

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}