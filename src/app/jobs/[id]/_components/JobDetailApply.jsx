"use client";

import * as React from "react";
import { Upload, Mail, Phone, User, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export function JobDetailApply({ job }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cvFile: null,
    cvFileName: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("idle");
  const [cvError, setCvError] = React.useState("");
  const [submittedEmail, setSubmittedEmail] = React.useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setCvError("Invalid format. Use PDF or Word.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setCvError("Size limit exceeded (5MB).");
        return;
      }

      setCvError("");
      setFormData((prev) => ({
        ...prev,
        cvFile: file,
        cvFileName: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!formData.cvFile) {
      setCvError("File attachment required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("cvFile", formData.cvFile);
      formDataToSend.append("jobId", job.id.toString());
      formDataToSend.append("jobTitle", job.title);
      formDataToSend.append("company", job.company);

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedEmail(formData.email);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          coverLetter: "",
          cvFile: null,
          cvFileName: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="space-y-8 relative z-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-[#0b2677] tracking-tight uppercase">
            Apply Now
          </h2>
          <p className="text-sm text-[#0b2677]/50 leading-relaxed font-medium">
            Start your journey with {job.company}.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider pl-1">
                Full Name
              </label>
              <Input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-sm font-medium text-[#0b2677] placeholder:text-[#0b2677]/20 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider pl-1">
                Email Address
              </label>
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. hello@example.com"
                className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-sm font-medium text-[#0b2677] placeholder:text-[#0b2677]/20 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider pl-1">
                Phone Number
              </label>
              <Input
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +971 50 123 4567"
                className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-sm font-medium text-[#0b2677] placeholder:text-[#0b2677]/20 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider pl-1">
                CV / Resume
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="cvFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="cvFile"
                  className="flex items-center justify-between h-12 px-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#9a01cd] hover:bg-[#9a01cd]/5 transition-all duration-300 group/file"
                >
                  <span className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider group-hover/file:text-[#0b2677] transition-colors">
                    {formData.cvFileName || "Upload File"}
                  </span>
                  <Upload
                    size={16}
                    className="text-[#0b2677]/30 group-hover/file:text-[#9a01cd] transition-colors"
                  />
                </label>
              </div>
              {cvError && (
                <p className="text-xs font-bold text-red-500 pl-1">{cvError}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-wider pl-1">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us a bit about yourself..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-sm font-medium text-[#0b2677] placeholder:text-[#0b2677]/20 resize-none transition-all duration-300"
              />
            </div>
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl text-green-600 text-xs font-bold flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Application sent successfully! Check your email.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl text-red-600 text-xs font-bold">
              Error submitting. Please try again.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-[#9a01cd] hover:bg-[#8a01b8] text-white rounded-xl font-black uppercase tracking-widest shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-300 flex items-center justify-center gap-2 border-none"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <span>Submit Application</span>
                <Send size={18} />
              </>
            )}
          </Button>

          <p className="text-[10px] text-[#0b2677]/30 text-center font-bold uppercase leading-relaxed tracking-wider">
            By applying, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </div>
    </div>
  );
}
