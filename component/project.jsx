import React from "react";
import Image from "next/image";
import styles from "../styles/project.module.scss";
import Bundle from "../images/bundle-home.png";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, Link, Globe } from "phosphor-react";
import { projectVariant, imageVariant } from "../variants/index.js";

function Project({ name, img, text, tools, link, github }) {
  return (
    <motion.div
      initial={`hidden`}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={projectVariant()}
      className={styles.project}
    >
      <div className={styles.project_image}>
        {/* Use anchor directly instead of button containing anchor */}
        <a
          className={styles.project_link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>

        <div className={styles.project_image_box}>
          <motion.div
            initial={`hidden`}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={imageVariant()}
          >
            <img src={img} alt="picture reference" />
          </motion.div>
        </div>
      </div>
      <div className={styles.project_desc}>
        <h3>{name}</h3>
        <p>{text}</p>
        <h5>{tools}</h5>

        <div className={styles.project_links}>
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Open live preview">
            <Link size={22} color="#ABABAD" weight="fill" />
          </a>

          {github && github !== "#" && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub repository">
              <GithubLogo size={22} color="#ABABAD" weight="fill" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
