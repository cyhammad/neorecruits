"use client";

import * as React from "react";
import {
  Building2,
  Users,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RequestFormField } from "./RequestFormField";
import { RequestFormSelect } from "./RequestFormSelect";
import { RequestFormStatus } from "./RequestFormStatus";
import { roleTypes } from "./requestData";

export function ServicesRequestForm() {
  const [formData, setFormData] = React.useState({
    companyName: "",
    email: "",
    phone: "",
    roleType: "",
    quantity: "",
    location: "",
    timeline: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/request-talent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (res.ok && (await res.json()).success) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          email: "",
          phone: "",
          roleType: "",
          quantity: "",
          location: "",
          timeline: "",
          additionalInfo: "",
        });
      } else setSubmitStatus("error");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const change = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section
      id="request-talent"
      className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#e5e5e5] space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Request Talent
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Fill out the form below and our team will get back to you within
              24 hours to discuss your talent requirements.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <RequestFormField
              id="companyName"
              name="companyName"
              label="Company Name"
              icon={Building2}
              value={formData.companyName}
              onChange={change}
              placeholder="Enter your company name"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RequestFormField
                id="email"
                name="email"
                label="Email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={change}
                placeholder="your.email@company.com"
              />
              <RequestFormField
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                icon={Phone}
                value={formData.phone}
                onChange={change}
                placeholder="+971 4 123 4567"
              />
            </div>
            <RequestFormSelect
              id="roleType"
              name="roleType"
              label="Role Type / Service"
              icon={Users}
              value={formData.roleType}
              onChange={change}
              options={roleTypes}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RequestFormField
                id="quantity"
                name="quantity"
                label="Quantity"
                icon={Users}
                value={formData.quantity}
                onChange={change}
                placeholder="e.g., 5-10 positions"
              />
              <RequestFormField
                id="location"
                name="location"
                label="Location"
                icon={MapPin}
                value={formData.location}
                onChange={change}
                placeholder="e.g., Dubai, UAE"
              />
            </div>
            <RequestFormField
              id="timeline"
              name="timeline"
              label="Timeline"
              icon={Calendar}
              value={formData.timeline}
              onChange={change}
              placeholder="e.g., Within 30 days, Q1 2025"
            />
            <RequestFormField
              id="additionalInfo"
              name="additionalInfo"
              label="Additional Information"
              value={formData.additionalInfo}
              onChange={change}
              isTextArea
              placeholder="Tell us more about your requirements..."
              required={false}
            />
            <RequestFormStatus status={submitStatus} />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 sm:h-14 bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-widest text-xs sm:text-sm"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Request <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
            <p className="text-xs text-[#0b2677]/50 text-center font-medium">
              By submitting this form, you agree to our privacy policy. We will
              send you an email notification and record this request in our
              system.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
