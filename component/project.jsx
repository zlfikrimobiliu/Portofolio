import React, { useEffect, useMemo, useState } from "react";
import styles from "../styles/project.module.scss";
import { motion } from "framer-motion";
import { GithubLogo, Link } from "phosphor-react";
import { projectVariant, imageVariant } from "../variants/index.js";

function Project({ name, img, imgs, text, tools, link, github }) {
  const gallery = useMemo(() => {
    if (Array.isArray(imgs) && imgs.length > 0) return imgs;
    return img ? [img] : [];
  }, [img, imgs]);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [gallery.length, name]);

  useEffect(() => {
    if (gallery.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallery.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [gallery]);

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
            <img src={gallery[activeSlide] || img} alt={`${name} preview`} />
          </motion.div>
          {gallery.length > 1 && (
            <div className={styles.project_dots}>
              {gallery.map((_, index) => (
                <button
                  key={`${name}-slide-${index}`}
                  type="button"
                  aria-label={`Show ${name} screenshot ${index + 1}`}
                  className={`${styles.project_dot} ${
                    activeSlide === index ? styles.project_dot_active : ""
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          )}
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
