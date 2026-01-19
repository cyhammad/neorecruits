"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { FormSelect } from "./FormSelect";
import { FileUpload } from "./FileUpload";
import { serviceOptions } from "./contactData";

export function ContactForm({ onSubmit }) {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    service: "",
    message: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formState);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="name"
          label="Name"
          name="name"
          placeholder="John Doe"
          required
          value={formState.name}
          onChange={handleChange}
        />
        <FormField
          id="email"
          label="Email"
          name="email"
          type="email"
          placeholder="john@company.com"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <FormSelect
        id="service"
        label="Service Required"
        name="service"
        options={serviceOptions}
        required
        value={formState.service}
        onChange={handleChange}
      />

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full min-h-[120px] bg-white border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#539ce0] focus:ring-4 focus:ring-[#539ce0]/10 transition-shadow resize-y"
          placeholder="How can we help you?"
          required
          value={formState.message}
          onChange={handleChange}
        />
      </div>

      <FileUpload
        label="Attachment (Optional)"
        value={formState.file}
        onChange={handleFileChange}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-[#0b2677] hover:bg-[#0b2677]/90 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
      </Button>
    </form>
  );
}
