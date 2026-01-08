import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Mint Barú Cartagena — Booking Deposit",
          },
          unit_amount: 5000,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}

