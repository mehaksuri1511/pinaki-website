import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  distance = 50,
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;