import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Mint Barú Cartagena – Stay Deposit",
          },
          unit_amount: 5000, // $50.00 USD deposit
        },
        quantity: 1,
      },
    ],
    success_url: "https://mintbarucartagena.com/booking?paid=true",
    cancel_url: "https://mintbarucartagena.com/booking",
  });

  return NextResponse.json({ url: session.url });
}

