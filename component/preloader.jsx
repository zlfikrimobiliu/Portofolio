import React from "react";
import Image from "next/image";
import styles from "../styles/preloader.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { loaderVariant } from '../variants/index.js'

export default function Preloader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.preloader}
      style={{ pointerEvents: 'none' }}
    >
        <motion.svg
         width="175" height="322" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.text
             initial={'hidden'}
             animate={'visible'}
             variants={loaderVariant()}
             stroke="#e6f1ff"
             fill="#CCC6C6"
             x="50"
             y="60"
             textAnchor="middle"
             fontSize="32"
             fontFamily="Inter, sans-serif"
             fontWeight="bold"
            >
              Fikri
            </motion.text>
        </motion.svg>
    
    </motion.div>
  );
}
