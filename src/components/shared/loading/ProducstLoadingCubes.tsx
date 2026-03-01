import LogoForIntro from "@/assets/LogoForIntro";
import IconLoadingIntro from "@/assets/icons/IconLoadingIntro";
import { AnimatePresence, motion } from "framer-motion"; // Correct import for framer-motion

interface LoadingCubeProps {
  isLoading: boolean;
}

export default function ProductsLoadingCubes({ isLoading }: LoadingCubeProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="intro-to-freestyler"
          key="loading" 
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <LogoForIntro width={200} height={200} />
          <IconLoadingIntro />
        </motion.div>
      )}
    </AnimatePresence>
  );
}