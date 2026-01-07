import { NextResponse } from "next/server";
import OpenAI from "openai";
import Twilio from "twilio";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const twClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: Request) {
  // Twilio sends application/x-www-form-urlencoded
  const bodyText = await req.text();
  const params = new URLSearchParams(bodyText);
  const incoming = params.get("Body") || "";
  const from = params.get("From") || "";
  
  // Ask AI for response (short)
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a booking assistant for Mint Barú. Ask for dates, guests and room type." },
      { role: "user", content: incoming }
    ],
    max_tokens: 300
  });

  const reply = completion.choices?.[0]?.message?.content ?? "Sorry, I couldn't process that.";

  // send message back via Twilio
  await twClient.messages.create({
    body: reply,
    from: process.env.TWILIO_WHATSAPP_NUMBER, // e.g. "whatsapp:+14155238886"
    to: from
  });

  // Twilio expects a 200 ok with empty body
  return new NextResponse("OK", { status: 200 });
}

