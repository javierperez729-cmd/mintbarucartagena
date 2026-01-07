import { NextResponse } from "next/server";

export async function GET() {
  const phone = "573504612734";
  const message = encodeURIComponent(
    "Hello Mint Barú Cartagena, I’d like to make a reservation."
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  return NextResponse.redirect(url);
}


