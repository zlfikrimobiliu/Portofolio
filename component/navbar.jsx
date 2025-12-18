import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import GitHub from "../images/icons/github.svg";
import WhatsApp from "../images/icons/whatsapp.svg";
import Instagram from "../images/icons/instagram.svg";
import { motion } from "framer-motion";

import {
  partVariant,
  navLinkVariant,
  navSocialVariant,
  navVariant,
} from "../variants/index.js";

function Navbar({ setNav, show_nav }) {
  return (
    <>
      <motion.div
        initial={`hidden`}
        exit={`exit`}
        animate={show_nav ? `visible` : ``}
        variants={navVariant(0.6)}
        className={styles.nav_bar}
        style={{ pointerEvents: show_nav ? 'auto' : 'none' }}
      >
        <motion.div
          initial={`hidden`}
          exit={`exit`}
          animate={show_nav ? `visible` : ``}
          variants={partVariant(0)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_one}`}
        ></motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.2)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_two}`}
        >
          <motion.p variants={navLinkVariant(1)} onClick={() => setNav(false)}>
            <Link href="#about">About Me</Link>
          </motion.p>
          <motion.p
            variants={navLinkVariant(0.8)}
            onClick={() => setNav(false)}
          >
            <Link href="#projects">Projects</Link>
          </motion.p>
          <motion.p
            variants={navLinkVariant(0.6)}
            onClick={() => setNav(false)}
          >
            <Link href="#contact">Contact</Link>
          </motion.p>
        </motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.4)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_three}`}
        ></motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.6)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_four}`}
        >
          <Link href="https://github.com/zlfikrimobiliu">
            <motion.p variants={navSocialVariant(0.8)}>
              <span>GitHub</span>{" "}
              <Image width="25" height="25" src={GitHub} alt="GitHub icon"></Image>
            </motion.p>
          </Link>

          <Link href="https://www.instagram.com/zlfikrimobiliu/">
            <motion.p variants={navSocialVariant(1)}>
              <span>Instagram</span>{" "}
              <Image width="25" height="25" src={Instagram} alt="Instagram icon"></Image>
            </motion.p>
          </Link>

          <Link href="https://wa.me/6289678186631">
            <motion.p variants={navSocialVariant(1.2)}>
              <span>WhatsApp</span>{" "}
              <Image width="25" height="25" src={WhatsApp} alt="WhatsApp icon"></Image>
            </motion.p>
          </Link>
        </motion.div>

        <h1 className={`${styles.nav_email}`}>
          <marquee>
            Thank you for visiting my portfolio
          </marquee>
        </h1>
      </motion.div>
      {/* <h1 className={`${styles.nav_email}`}>fikrimobiliu@gmail.com</h1> */}
    </>
  );
}

export default Navbar;
