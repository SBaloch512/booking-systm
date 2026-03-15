"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md border border-border-gray bg-charcoal/40 p-8">
        <h1 className="font-display text-3xl text-ivory mb-2">Log in</h1>
        <p className="font-body text-sm text-light-gray mb-8">
          Access your account to view or manage bookings.
        </p>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-body text-xs uppercase tracking-[0.2em] text-light-gray mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md bg-obsidian border border-border-gray px-3 py-2 text-sm text-ivory focus:outline-none focus:border-gold"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-body text-xs uppercase tracking-[0.2em] text-light-gray mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md bg-obsidian border border-border-gray px-3 py-2 text-sm text-ivory focus:outline-none focus:border-gold"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary mt-4 justify-center disabled:opacity-50"
          >
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>

        <p className="font-body text-xs text-light-gray mt-6 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-gold hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
