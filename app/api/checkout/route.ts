import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Mint Barú Deposit" },
          unit_amount: 5000,
        },
        quantity: 1,
      },
    ],
    success_url: "https://mintbarucartagena.vercel.app/booking?success=true",
    cancel_url: "https://mintbarucartagena.vercel.app/booking?cancel=true",
  })

  return NextResponse.json({ url: session.url })
}

