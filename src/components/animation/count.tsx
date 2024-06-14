import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type CountProps = {
  className?: string;
  max: number;
  duration?: number;
};

const Count: React.FC<CountProps> = ({ className, max, duration = 1 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, max, { duration });

    return animation.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <motion.p className={className}>{rounded}</motion.p>;
};

export default Count;
