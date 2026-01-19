"use client";

export function RequestFormStatus({ status }) {
  if (status === "idle") return null;
  const isErr = status === "error";
  return (
    <div
      className={`p-4 rounded-lg text-sm font-medium ${isErr ? "bg-red-50 border border-red-200 text-red-800" : "bg-green-50 border border-green-200 text-green-800"}`}
    >
      {isErr
        ? "There was an error submitting your request. Please try again or contact us directly."
        : "Thank you! Your request has been submitted successfully. Our team will contact you within 24 hours."}
    </div>
  );
}
