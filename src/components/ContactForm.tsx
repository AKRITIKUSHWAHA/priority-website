"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { Button, Card } from "@/components/ui";

const contactFormSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid contact phone number"),
  subject: z.string().min(3, "Please select or type a message subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Freight Quote Inquiry",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        reset();
      } else {
        setServerError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setServerError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="default" className="p-8 sm:p-10 border-slate-200/80 shadow-soft-lg bg-white relative">
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-bold font-heading text-navy-900">
          Send Us a Direct Message
        </h3>
        <p className="text-sm text-slate-600 font-sans">
          Fill out the form below for freight quotes, SADC transit schedules, or general inquiries. Our Harare dispatch team responds within 1 hour.
        </p>
      </div>

      {/* Success Banner */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2"
          >
            <div className="flex items-center gap-2 font-bold font-heading text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Message Sent Successfully!</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed font-sans">
              Thank you! Your inquiry has been received by Priority Hauliers Harare Control Desk. A dispatch specialist will contact you shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Server Error Banner */}
      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Hidden Honeypot Field */}
        <input
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Full Name <span className="text-accent-600">*</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="e.g. Tendai Moyo"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200 focus:ring-accent-500 focus:border-transparent"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-rose-600 font-medium">{errors.name.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Email Address <span className="text-accent-600">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="e.g. tendai@company.co.zw"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200 focus:ring-accent-500 focus:border-transparent"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-600 font-medium">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Contact Phone / WhatsApp <span className="text-accent-600">*</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="e.g. +263 77 123 4567"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? "border-rose-400 focus:ring-rose-400"
                  : "border-slate-200 focus:ring-accent-500 focus:border-transparent"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-rose-600 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Inquiry Subject */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Subject <span className="text-accent-600">*</span>
            </label>
            <select
              {...register("subject")}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all"
            >
              <option value="Freight Quote Inquiry">Freight Quote Inquiry</option>
              <option value="Warehousing & Storage Space">Warehousing & Storage Space</option>
              <option value="Customs Clearance Assistance">Customs Clearance Assistance</option>
              <option value="Tracking Query">Tracking Query</option>
              <option value="Driver Application / Careers">Driver Application / Careers</option>
              <option value="Other Business Inquiry">Other Business Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Your Message / Cargo Details <span className="text-accent-600">*</span>
          </label>
          <textarea
            rows={5}
            {...register("message")}
            placeholder="Specify cargo weight, origin, destination, and any special handling requirements..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-rose-400 focus:ring-rose-400"
                : "border-slate-200 focus:ring-accent-500 focus:border-transparent"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-rose-600 font-medium">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="accent"
          size="lg"
          slanted
          isLoading={isSubmitting}
          className="w-full justify-center text-slate-950 font-bold"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Message...</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>
    </Card>
  );
}
