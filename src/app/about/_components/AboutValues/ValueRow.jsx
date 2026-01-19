"use client";

export function ValueRow({ value }) {
  return (
    <div className="flex gap-6 group">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-[#00b8b0]/10 flex items-center justify-center text-[#00b8b0] group-hover:bg-[#00b8b0] group-hover:text-white transition-colors duration-300">
        <value.icon className="w-6 h-6" />
      </div>
      <div className="font-medium">
        <h3 className="text-lg font-bold text-[#0f1d2d] group-hover:text-[#00b8b0] transition-colors">
          {value.title}
        </h3>
        <p className="text-[#0f1d2d]/60 text-sm font-medium">
          {value.description}
        </p>
      </div>
    </div>
  );
}
