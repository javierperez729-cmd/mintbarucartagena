// app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover", // ✅ matches TypeScript literal type
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Mint Barú Cartagena Deposit",
            },
            unit_amount: 5000, // $50 deposit
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Checkout API failed:", err);
    return NextResponse.json(
      { error: "Stripe Checkout API failed" },
      { status: 500 }
    );
  }
}
