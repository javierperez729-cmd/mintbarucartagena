import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Mint Barú Cartagena – Booking Deposit",
          },
          unit_amount: 5000, // $50 USD deposit
        },
        quantity: 1,
      },
    ],
    success_url: "https://mintbarucartagena.com/booking?success=true",
    cancel_url: "https://mintbarucartagena.com/booking?canceled=true",
  })

  return NextResponse.json({ url: session.url })
}
