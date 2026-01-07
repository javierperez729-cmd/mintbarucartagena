import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { userMessage } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful booking assistant for Mint Barú. Ask for arrival/departure, guest count, and room type. Confirm booking details and provide a short booking summary." },
      { role: "user", content: userMessage }
    ],
    max_tokens: 500
  });

  const reply = completion.choices?.[0]?.message?.content ?? "Sorry, no response.";

  return NextResponse.json({ reply });
}


