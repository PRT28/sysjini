"use client";

import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Web & Mobile Development" },
  { value: "ai-solutions", label: "AI Solutions & Automation" },
  { value: "digital-marketing", label: "Digital Marketing & SEO" },
  { value: "design-branding", label: "Design & Branding" },
  { value: "ecommerce", label: "E-commerce Solutions" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "ui-ux", label: "UI/UX Consulting" },
];

export default function ContactFormPanel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "100000",
    message: "",
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        setFormState({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "100000",
          message: "",
        });
        return;
      }

      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: result.errors ? result.errors.join(", ") : result.message || "Failed to send message.",
      });
    } catch {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  const budgetPercent = ((Number(formData.budget) - 20000) / (500000 - 20000)) * 100;

  return (
    <div className="surface-card-strong rounded-[34px] p-7 md:p-10">
      {formState.isSubmitted ? (
        <div className="space-y-5">
          <span className="eyebrow">Message Sent</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em]">
            Your enquiry is in.
          </h2>
          <p className="text-white/68">
            Sysjini will review the details and get back to you shortly with the next steps.
          </p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setFormState({ isSubmitting: false, isSubmitted: false, error: null })}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="eyebrow">Project Enquiry</span>
            <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-semibold tracking-[-0.05em]">
              Start with the essentials.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-white/58">Name</span>
              <input
                className="input-shell"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={formState.isSubmitting}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/58">Email</span>
              <input
                className="input-shell"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                disabled={formState.isSubmitting}
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-white/58">Service</span>
            <select
              className="input-shell"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={formState.isSubmitting}
            >
              {serviceOptions.map((option) => (
                <option key={option.value || "empty"} value={option.value} className="bg-[#111116] text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-white/58">
              <span>Budget range</span>
              <span>₹{Number(formData.budget).toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              name="budget"
              min="20000"
              max="500000"
              step="5000"
              value={formData.budget}
              onChange={handleChange}
              disabled={formState.isSubmitting}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent"
              style={{
                background: `linear-gradient(to right, #8A5CF5 0%, #8A5CF5 ${budgetPercent}%, rgba(255,255,255,0.12) ${budgetPercent}%, rgba(255,255,255,0.12) 100%)`,
              }}
            />
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-white/58">Project details</span>
            <textarea
              className="input-shell min-h-[150px] resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Scope, timeline, current bottlenecks, or anything useful."
              disabled={formState.isSubmitting}
            />
          </label>

          {formState.error ? (
            <div className="rounded-[20px] border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {formState.error}
            </div>
          ) : null}

          <button type="submit" className="btn-primary w-full" disabled={formState.isSubmitting}>
            {formState.isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
