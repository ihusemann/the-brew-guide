import { useScroll, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const DisappearingNavbar = ({ children }: Props) => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY.get() < scrollY.getPrevious()) {
      // scrolling up
      setHidden(false);
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious() && window.innerWidth > 768) {
      // scrolling down; is disabled for < md breakpoint
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.on("change", update);
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "linear", duration: 0.18 }}
      className="w-full h-full bg-white"
    >
      {children}
    </motion.div>
  );
};

export default DisappearingNavbar;
