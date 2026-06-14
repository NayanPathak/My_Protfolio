import { forwardRef } from "react";
import { motion } from "framer-motion";

const FadeInSection = forwardRef(function FadeInSection(
  { children, className = "", delay = 0, isHero = false },
  ref
) {
  return (
    <motion.section
      ref={ref}
      initial={isHero ? false : { opacity: 0, y: 80, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      viewport={{ once: false, amount: 0.2, margin: "-60px 0px" }}
      className={`scroll-mt-24 w-full ${className}`}
    >
      {children}
    </motion.section>
  );
});

export default FadeInSection;
