"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { full_name: name.trim() || undefined },
      },
    });

    setLoading(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    if (data?.user) {
      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => router.push("/booking"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md border border-border-gray bg-charcoal/40 p-8">
        <h1 className="font-display text-3xl text-ivory mb-2">
          Create your account
        </h1>
        <p className="font-body text-sm text-light-gray mb-8">
          Sign up to book appointments and manage your visits.
        </p>

        {success && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-sm">
            Account created. Redirecting to booking…
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-body text-xs uppercase tracking-[0.2em] text-light-gray mb-2">
              Your name
            </label>
            <input
              className="w-full rounded-md bg-obsidian border border-border-gray px-3 py-2 text-sm text-ivory focus:outline-none focus:border-gold"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              minLength={6}
              required
            />
            <p className="font-body text-xs text-light-gray mt-1">At least 6 characters.</p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary mt-4 justify-center disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="font-body text-xs text-light-gray mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-gold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
