import {  } from "react";
import Link from "next/link";
import { Envelope } from "phosphor-react";
import styles from "../styles/contact.module.scss";

export default function ContactSection() {
 return(
        <section className={styles.contact} id="contact">
          <h4>Got a project in mind?</h4>
          <h2>
            Get In Touch.{" "}
            <Link href="mailto:fikrimobiliu@gmail.com">
              <Envelope color="#ABABAD" weight="regular" size={80} />
            </Link>
          </h2>
          <Link href="mailto:fikrimobiliu@gmail.com">
            <p>fikrimobiliu@gmail.com</p>
          </Link>
          <Link href="tel:+6289678186631">
            <p> +(62) 896-7818-6631</p>
          </Link>
        </section>
    
  );
}
