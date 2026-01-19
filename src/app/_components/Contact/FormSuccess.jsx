"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FormSuccess({ onReset }) {
  return (
    <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-[#0b2677]">Message Sent!</h3>
      <p className="text-[#0b2677]/60">
        Thank you for reaching out. One of our consultants will get back to you
        within 24 hours.
      </p>
      <Button variant="outline" onClick={onReset} className="mt-4">
        Send Another Message
      </Button>
    </div>
  );
}
