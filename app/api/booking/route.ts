"use client";

import { useState } from "react";

export default function BookingPage() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function send() {
    setLoading(true);
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: msg })
    });
    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto py-24 px-6">
      <h1 className="text-4xl mb-6 text-center">Booking Assistant</h1>

      <div className="mb-4">
        <input value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="e.g. 2 nights, 3 guests" className="w-full p-3 border rounded" />
      </div>

      <button disabled={loading} onClick={send} className="bg-[#1C1C1C] text-white px-4 py-2 rounded">
        {loading ? "Thinking..." : "Send"}
      </button>

      {reply && <div className="mt-6 p-4 bg-white rounded shadow">{reply}</div>}
    </div>
  );
}

