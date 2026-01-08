"use client";

import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const phone = "573504612734"; // 
    const message = encodeURIComponent(
      `New stay request:\n\n` +
        `Name: ${name}\n` +
        `Date: ${date}\n` +
        `Guests: ${guests}\n` +
        `Notes: ${notes}`
    );

    window.location.href = `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
        Book Your Stay
      </h1>

      <div style={{ maxWidth: "400px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />


        <input
          placeholder="Number of nights"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Special requests"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ ...inputStyle, height: "80px" }}
        />

<button
  onClick={async () => {
    console.log("PAY CLICKED");

    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    if (!res.ok) {
      console.error("Checkout failed");
      return;
    }

    const data = await res.json();
    console.log("Stripe URL:", data.url);

    window.location.href = data.url;
  }}
  className="mt-6 w-full bg-white text-black py-3 rounded-lg"
>
  Pay Deposit
</button>






      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  background: "black",
  color: "white",
  border: "1px solid white",
};


