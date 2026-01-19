"use client";

export function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9a01cd] hover:text-white transition-all duration-300 text-white/60"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
