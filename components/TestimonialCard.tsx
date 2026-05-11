"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({ quote, name, role, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="surface flex flex-col gap-5 p-7"
    >
      <Quote size={28} className="text-[#C9A84C] opacity-70" strokeWidth={1.5} />
      <p className="flex-1 text-[0.95rem] leading-relaxed text-[rgba(234,228,214,0.8)] italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-[rgba(201,168,76,0.15)] pt-4">
        <p className="text-sm font-semibold text-[#EAE4D6]">{name}</p>
        <p className="mt-0.5 text-xs text-[rgba(234,228,214,0.5)]">{role}</p>
      </div>
    </motion.div>
  );
}
