import { motion } from "framer-motion";

type TypingProps = {
  className?: string;
  label: string;
};

const Typing: React.FC<TypingProps> = ({ className, label }) => {
  const text = label.split("");

  return (
    <div>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 30,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "reverse",
          }}
          key={i}
          className={className}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
};

export default Typing;
