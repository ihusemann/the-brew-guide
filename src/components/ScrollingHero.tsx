import { motion } from "framer-motion";
import "src/components/ScrollingHero.css";

const ScrollingHero = () => {
  return (
    <div className="py-12">
      <motion.h1
        aria-hidden="true"
        animate={{ x: "-100%" }}
        transition={{ duration: 55, ease: "linear" }}
        initial={{ x: "-100px" }}
        className="text-outline whitespace-nowrap stroke-black text-[12rem] font-bold uppercase tracking-wider text-transparent"
      >
        BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES
        BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES BREW GUIDES
        BREW GUIDES BREW GUIDES
      </motion.h1>
      <h1 className="sr-only text-center text-7xl font-bold">Brew Guides</h1>
    </div>
  );
};

export default ScrollingHero;
