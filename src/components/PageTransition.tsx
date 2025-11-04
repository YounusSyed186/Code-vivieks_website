import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Vibrant sliding overlay - slides right to left across screen */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-r from-primary via-purple-500 to-pink-500"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
