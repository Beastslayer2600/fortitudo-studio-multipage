"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Clock, Building2, type LucideProps } from "lucide-react";

const ICONS: Record<string, React.FC<LucideProps>> = {
  Shield,
  TrendingUp,
  Clock,
  Building2,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ iconName, title, description, delay = 0 }: ServiceCardProps) {
  const Icon = ICONS[iconName] ?? Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[rgba(201,168,76,0.18)] bg-[rgba(11,15,30,0.6)] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,76,0.5)] hover:shadow-[0_0_32px_rgba(201,168,76,0.12)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(201,168,76,0.1)] text-[#C9A84C] transition-colors duration-300 group-hover:bg-[rgba(201,168,76,0.18)]">
        <Icon size={22} strokeWidth={1.6} />
      </div>

      <h3 className="font-heading text-xl font-semibold text-[#EAE4D6]">{title}</h3>

      <p className="text-sm leading-relaxed text-[rgba(234,228,214,0.65)]">{description}</p>

      <span
        aria-hidden="true"
        className="absolute right-5 top-5 h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, transparent 50%, rgba(201,168,76,0.5) 50%)",
          borderRadius: "0 0.5rem 0 0",
        }}
      />
    </motion.div>
  );
}
