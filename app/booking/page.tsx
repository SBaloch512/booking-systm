"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const SERVICES = [
  { name: "Haircut", price: "$35", duration: "45 min" },
  { name: "Beard trim", price: "$25", duration: "30 min" },
  { name: "Haircut + Beard", price: "$55", duration: "60 min" },
  { name: "Hair styling", price: "$20", duration: "20 min" },
] as const;

export default function BookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(SERVICES[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!name.trim()) {
      setMessage({ type: "error", text: "Please enter your name." });
      return;
    }
    if (!date || !time) {
      setMessage({ type: "error", text: "Please select date and time." });
      return;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      setMessage({
        type: "error",
        text: "Booking is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("BOOKINGS").insert([
      {
        name: name.trim(),
        phone: phone.trim() || null,
        service,
        date,
        time,
      },
    ]);

    setLoading(false);
    if (error) {
      const isNetworkError = error.message.includes("Failed to fetch") || error.message.includes("fetch");
      const errorText = isNetworkError
        ? "Can't reach the server (Failed to fetch). Check: 1) .env.local has NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, 2) URL has no trailing slash, 3) your network allows access to Supabase. Restart the dev server after changing .env.local."
        : `Booking failed: ${error.message}`;
      setMessage({ type: "error", text: errorText });
      console.error("Supabase error:", error);
    } else {
      setMessage({ type: "success", text: "Booking successful! We'll see you soon." });
      setName("");
      setPhone("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="card-dark w-full max-w-lg">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Book Appointment
        </h2>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === "error"
                ? "bg-red-500/20 border border-red-500/50 text-red-200"
                : "bg-green-500/20 border border-green-500/50 text-green-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              className="w-full bg-black border border-yellow-500 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Your Phone</label>
            <input
              type="tel"
              className="w-full bg-black border border-yellow-500 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Select Service</label>
            <select
              className="w-full bg-black border border-yellow-500 rounded-lg p-3 text-white"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICES.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name} — {s.price} ({s.duration})
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-400">
              {SERVICES.find((s) => s.name === service)?.price} · {SERVICES.find((s) => s.name === service)?.duration}
            </p>
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Select Date</label>
            <input
              type="date"
              className="w-full bg-black border border-yellow-500 rounded-lg p-3 text-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Select Time</label>
            <input
              type="time"
              className="w-full bg-black border border-yellow-500 rounded-lg p-3 text-white"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-gold w-full disabled:opacity-50"
          >
            {loading ? "Booking…" : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}