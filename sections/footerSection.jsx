import {  } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GitHub from "../images/icons/github.svg";
import WhatsApp from "../images/icons/whatsapp.svg";
import Instagram from "../images/icons/instagram.svg";
import styles from "../styles/footer.module.scss";


export default function footerSection() {

    return(
      <footer className={styles.footer}>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_main}>
          <div className={styles.footer_links}>
            <motion.a 
              href="https://github.com/zlfikrimobiliu" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={styles.social_link}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={styles.social_content}
              >
                <span>GH</span>{" "}
                <motion.span
                  animate={{ 
                    rotate: [0, 5, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  <Image width="25" height="25" src={GitHub} alt="GitHub icon"></Image>
                </motion.span>
              </motion.div>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/zlfikrimobiliu/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={styles.social_link}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.social_content}
              >
                <span>IG</span>{" "}
                <motion.span
                  animate={{ 
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 2.5,
                    ease: "easeInOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  <Image width="25" height="25" src={Instagram} alt="Instagram icon"></Image>
                </motion.span>
              </motion.div>
            </motion.a>

            <motion.a 
              href="https://wa.me/6289678186631" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={styles.social_link}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={styles.social_content}
              >
                <span>WA</span>{" "}
                <motion.span
                  animate={{ 
                    rotate: [0, 5, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  <Image width="25" height="25" src={WhatsApp} alt="WhatsApp icon"></Image>
                </motion.span>
              </motion.div>
            </motion.a>
          </div>
          <p className={styles.copy}>
            Copyright ©{" "}
            <Link href="https://fikrimobiliu.site">Fikri Mobiliu</Link>{" "}
            2024, All rights reserved.
          </p>
        </div>
      </footer>
  )
}
