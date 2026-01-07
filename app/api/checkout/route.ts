import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-08-16" });

export async function POST(req: Request) {
  const { amount, description } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: description || "Mint Barú Booking" },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}

