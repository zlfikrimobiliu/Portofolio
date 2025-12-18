import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../component/navbar";
import Preloader from "../component/preloader";
import PortfolioSection from '../sections/portfolioSection'
import FooterSection from '../sections/footerSection'
import AboutSection from '../sections/aboutSection'
import HeadTag from '../sections/headTag'
import HeaderSection from '../sections/headerSection'
import ContactSection from '../sections/contactSection'
import styles from "../styles/Home.module.scss";

export default function Home() {
  
  const [show_nav, setShow_nav] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const setNav = (value) => {
    setShow_nav(value);
  };

  return (
    <div

      className={

        show_nav

          ? `${styles.container} ${styles.container_cropped}`

          : `${styles.container}`
      }

    >
      <HeadTag />

      <AnimatePresence mode="wait">

       {showPreloader && <Preloader key="preloader" />}

       {show_nav && <Navbar key="navbar" setNav={setNav} show_nav={show_nav} />}

      </AnimatePresence>

      <HeaderSection setShow_nav={setShow_nav} setNav={setNav} show_nav={show_nav}  />

      <AboutSection /> 

      <PortfolioSection />

      <ContactSection />
    
      <FooterSection />


    </div>
  );
}
