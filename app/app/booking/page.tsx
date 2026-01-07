"use client";

import { useState } from "react";

export default function Booking() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: message }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="max-w-xl mx-auto py-24 px-6">
      <h1 className="text-4xl mb-6 font-serif text-center">Booking Assistant</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your request (e.g. 2 nights for 3 guests)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-3 rounded"
        />
        <button type="submit" className="bg-[#1C1C1C] text-white p-3 rounded">
          Send
        </button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}
