"use client";

import { Button } from "@/components/ui/button";
import {
  CONFERENCE,
  EMAIL_SIGNUP_ENDPOINT,
  EMAIL_SIGNUP_FORM_TYPE,
} from "@/config/features";
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

interface NotifySignupProps {
  variant?: "hero" | "card";
  className?: string;
}

export default function NotifySignup({
  variant = "hero",
  className = "",
}: NotifySignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const isHero = variant === "hero";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (!EMAIL_SIGNUP_ENDPOINT) {
      window.location.href = `mailto:${CONFERENCE.email}?subject=${encodeURIComponent(
        `Notify me when ${CONFERENCE.name} registration opens`
      )}`;
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch(EMAIL_SIGNUP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          formType: EMAIL_SIGNUP_FORM_TYPE,
          email: trimmed,
          conference: CONFERENCE.name,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Signup failed");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        `Something went wrong. Please email us at ${CONFERENCE.email} and we'll add you to the list.`
      );
    }
  };

  if (status === "success") {
    return (
      <div className={`${className} animate-fade-in`}>
        <p
          className={`text-base md:text-lg font-medium ${
            isHero ? "text-white" : "text-gray-900"
          }`}
        >
          You&apos;re on the list.
        </p>
        <p
          className={`text-sm mt-1 ${
            isHero ? "text-white/80" : "text-gray-600"
          }`}
        >
          We&apos;ll email you as soon as {CONFERENCE.name} registration opens.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md mx-auto"
      >
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={CONFERENCE.email}
          autoComplete="email"
          className={`flex-1 h-12 rounded-md px-4 text-base outline-none transition-all duration-300 ${
            isHero
              ? "backdrop-blur-sm bg-white/10 border border-white/50 text-white placeholder:text-white/60 focus:bg-white/20"
              : "bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#4A90E2]"
          }`}
        />
        <Button
          type="submit"
          disabled={status === "submitting"}
          className={`h-12 px-6 text-base font-medium rounded-md transition-all duration-300 ${
            isHero
              ? "backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/50 text-white"
              : "bg-[#4A90E2] hover:bg-[#3A7BC8] text-white"
          }`}
        >
          {status === "submitting" ? "Signing up..." : "Notify Me"}
        </Button>
      </form>

      {status === "error" && (
        <p
          className={`text-sm mt-3 ${isHero ? "text-white/90" : "text-red-600"}`}
        >
          {error}
        </p>
      )}
    </div>
  );
}
