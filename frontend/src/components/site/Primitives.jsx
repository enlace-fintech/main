import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, className = "" }) => (
  <span
    className={`inline-block uppercase tracking-[0.28em] text-xs font-bold text-[#D4AF37] ${className}`}
  >
    {children}
  </span>
);
