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

      <div>
        <label htmlFor="ga-street_address" className="block text-sm font-medium text-ink mb-1">Business address *</label>
        <input
          id="ga-street_address"
          name="street_address"
          type="text"
          autoComplete="address-line1"
          required
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
        />
      </div>
      <div>
        <label htmlFor="ga-city" className="block text-sm font-medium text-ink mb-1">City *</label>
        <input
          id="ga-city"
          name="city"
          type="text"
          autoComplete="address-level2"
          required
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
        />
      </div>
      <div>
        <label htmlFor="ga-state" className="block text-sm font-medium text-ink mb-1">State *</label>
        <select
          id="ga-state"
          name="state"
          required
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink focus:outline-none focus:border-amber"
          defaultValue=""
        >
          <option value="">Select a state</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div>
        <label htmlFor="ga-zip" className="block text-sm font-medium text-ink mb-1">ZIP code *</label>
        <input
          id="ga-zip"
          name="zip"
          type="text"
          autoComplete="postal-code"
          inputMode="numeric"
          pattern="[0-9]{5}(-[0-9]{4})?"
          maxLength={10}
          required
          className="w-full rounded-lg bg-paper border border-ink/15 px-4 py-2.5 text-ink placeholder-inkSoft/50 focus:outline-none focus:border-amber"
        />
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
