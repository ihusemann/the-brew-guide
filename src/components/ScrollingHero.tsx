import { motion } from "framer-motion";
import "src/components/ScrollingHero.css";

interface Props {
  label: string;
  numRepeat?: number;
}

const ScrollingHero = ({ label, numRepeat = 30 }: Props) => {
  return (
    <div className="overflow-x-hidden py-12 cursor-default">
      <motion.h1
        aria-hidden="true"
        animate={{ x: -30000 }}
        transition={{ duration: 900, ease: "linear", repeat: Infinity }}
        className="text-outline whitespace-nowrap stroke-black text-7xl font-bold uppercase tracking-wider text-transparent sm:text-9xl lg:text-[12rem]"
      >
        {`${label} `.repeat(numRepeat)}
      </motion.h1>
      <h1 className="sr-only text-center text-7xl font-bold">{label}</h1>
    </div>
  );
};

export default ScrollingHero;
