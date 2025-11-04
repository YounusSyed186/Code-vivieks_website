import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Vibrant sliding overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={{ x: "100%" }}
        animate={{ x: "100%" }}
        exit={{ x: "100%" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      </motion.div>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
