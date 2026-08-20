"use client";

import { useState, FormEvent } from "react";
import AeoFields from "./AeoFields";
import { SITE } from "@/lib/site";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const GAP_OPTIONS = [
  "Missing calls during installs",
  "No coverage after hours/weekends",
  "Losing jobs to faster-responding competitors",
  "Not sure what solution fits",
  "Other",
];

export default function AssessmentForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("bot-field")) return;

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white border border-moss/20 p-8 text-center">
        <p className="font-head text-xl font-bold text-ink mb-2">Request received.</p>
        <p className="text-inkSoft text-sm">
          We&apos;ll reach out shortly to talk through your situation. For anything urgent, call{" "}
          <a href={SITE.phoneHref} className="text-amber font-semibold">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="get-assessment"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-ink/10 p-6 sm:p-8 space-y-4 shadow-sm"
    >
      <input type="hidden" name="form-name" value="get-assessment" />
      <AeoFields />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block text-sm font-medium text-ink mb-1">Full Name</label>
        <input
          required
          name="name"
          type="text"
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
          placeholder="Jane Smith"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Phone</label>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
            placeholder="(555) 555-0100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1">Company Name</label>
          <input
            required
            name="company-name"
            type="text"
            className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
            placeholder="ABC Spray Foam"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink mb-1">Biggest call-handling gap</label>
        <select
          required
          name="call-handling-gap"
          defaultValue=""
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink focus:outline-none focus:border-amber"
        >
          <option value="" disabled>Select one</option>
          {GAP_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta">
          Something went wrong. Please call{" "}
          <a href={SITE.phoneHref} className="underline">{SITE.phone}</a> instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-moss px-6 py-3 text-sm font-bold text-white hover:bg-mossDark transition-colors disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Submitting…" : "Get Your Free Assessment"}
      </button>
    </form>
  );
}
