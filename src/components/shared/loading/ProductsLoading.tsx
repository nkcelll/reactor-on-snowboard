import './loading.css';
import { AnimatePresence, motion } from 'framer-motion';
import IconLoading from '@/assets/icons/IconLoading';

interface ProductsLoadingProps {
  isLoading: boolean;
}

export default function ProductsLoading({ isLoading }: ProductsLoadingProps) {
  return (
    <AnimatePresence>
      {isLoading && ( 
        <motion.div
          className="products-loading"
          // initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} 
        >
          {/* <span>Content is loading...</span> */}
          <IconLoading width={48} height={48} color="#fff" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}