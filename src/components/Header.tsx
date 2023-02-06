import { useScroll, motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Header component animates background color on scroll position.
 * @param children Pass navlinks as the Header's children.
 */
const Header = ({ children }: Props) => {
  const { scrollYProgress } = useScroll({
    offset: [0, "50px"],
  });
  return (
    <>
      <motion.div className="fixed inset-y-0 top-0 z-50 h-20 w-full">
        <motion.div
          style={{ opacity: scrollYProgress }}
          className="absolute inset-0 bg-white shadow-md"
        />
        <div className="absolute inset-0 mx-auto flex max-w-5xl items-center justify-between px-10 py-4">
          <a
            href="/"
            className="text-4xl font-black tracking-tighter text-neutral-900"
          >
            <span className="hidden sm:block">The Brew Guide</span>
            <span className="sm:hidden">TBG</span>
          </a>
          <div className="flex items-center justify-end gap-x-8">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
