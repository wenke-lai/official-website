import { motion } from "framer-motion";

import { cn } from "src/utils/styles";

type BlinkingCursorProps = { className?: string };

const BlinkingCursor: React.FC<BlinkingCursorProps> = ({
  className = "bg-foreground",
}) => {
  return (
    <motion.div
      variants={{
        blinking: {
          opacity: [0, 0, 1, 1],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          },
        },
      }}
      animate="blinking"
      className={cn("inline-block h-6 w-[1px] translate-y-1", className)}
    />
  );
};

export default BlinkingCursor;
