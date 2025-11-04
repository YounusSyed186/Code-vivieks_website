"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      {/* Sliding Overlay Transition */}
      <motion.div
        className="fixed inset-0 z-[999] pointer-events-none"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 1.1,
          ease: [0.83, 0, 0.17, 1],
        }}
      >
        {/* Multi-Layer Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#ff5f6d]" />
        <motion.div
          className="absolute inset-0 bg-white/20 backdrop-blur-[6px] mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        />
      </motion.div>

      {/* Page Content Entrance Animation */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: -20 }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
