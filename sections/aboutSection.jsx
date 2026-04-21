import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring } from "framer-motion";
import WavyHand from "../images/wavy-1.png";
import styles from "../styles/about.module.scss";
import { helloVariant } from "../variants/index.js";

export default function AboutSection() {
  const [isDesktopHero, setIsDesktopHero] = useState(false);

  const rotate = useSpring(0, { stiffness: 120, damping: 18, mass: 0.35 });
  const lift = useSpring(0, { stiffness: 160, damping: 22, mass: 0.35 });

  useEffect(() => {
    const update = () => setIsDesktopHero(window.innerWidth >= 1101);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePhotoPointerMove = useCallback(
    (event) => {
      if (!isDesktopHero) return;
      const el = event.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      rotate.set(x * 10);
      lift.set(-y * 10);
    },
    [isDesktopHero, lift, rotate]
  );

  const resetPhotoMotion = useCallback(() => {
    if (!isDesktopHero) return;
    rotate.set(0);
    lift.set(0);
  }, [isDesktopHero, lift, rotate]);

  return (

   <section className={styles.about_me} id="about">
            <div className={styles.about_me_main}>
              <div className={styles.about_me_main_s1}>
                <div className={styles.about_me_main_s1_p}>
                  <h5>
                    Hello there{" "}
                    <motion.div
                      initial={`hidden`}
                      animate={`visible`}
                      variants={helloVariant()}
                      className={styles.wavyhand}
                      //
                    >
                      <Image
                        src={WavyHand}
                        width={25}
                        height={25}
                        alt="My memoji smiling face"
                      />
                    </motion.div>{" "}
                    , meet
                  </h5>
                  <h2>Fikri Mobiliu</h2>
                  <p>
                  I am a DevSec professional focused on developing applications, networks, and websites with high-level security standards. 
                  With more than six years of experience, I combine software development and cybersecurity principles to ensure 
                  that every product built is not only functional and visually appealing, but also secure against various digital threats. 
                  I am ready to help build your next product with security as a top priority.
                  </p>

                  <a
                    className={styles.hire_me_btn}
                    href="https://drive.google.com/file/d/1a1TjN4rB9RWM6bh0zmnEUA_rqg6a5pnE/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </div>
              </div>
              <div className={styles.about_me_main_s2}>
                <motion.div
                  className={styles.about_photo_shell}
                  rotate={isDesktopHero ? rotate : 0}
                  y={isDesktopHero ? lift : 0}
                  style={isDesktopHero ? { transformPerspective: 900 } : undefined}
                  onPointerMove={handlePhotoPointerMove}
                  onPointerLeave={resetPhotoMotion}
                  onPointerCancel={resetPhotoMotion}
                  onPointerUp={resetPhotoMotion}
                >
                  <img
                    src={isDesktopHero ? "/images/Fikri-profile-cutout.png" : "/images/Fikri-profile.png"}
                    className={styles.about_me__memoji}
                    alt="Fikri Mobiliu portrait"
                  />
                </motion.div>
              </div>
            </div>
          </section>

  );
}
