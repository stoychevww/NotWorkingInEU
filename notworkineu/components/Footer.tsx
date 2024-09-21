// components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.notAvailable}>NOT AVAILABLE IN EU</div>
      <h2 className={styles.heading}>Why We Do This</h2>
      <p className={styles.text}>
        At <strong>NotWorkingInEU</strong>, we are committed to revealing the
        services and companies that EU citizens are unable to access due to
        restrictive regulations such as GDPR and DMA. We aim to raise awareness
        and encourage the EU Parliament to reconsider these policies, making the
        European Union a favorable environment for technology growth once again.
      </p>
      <div className={styles.links}>
        <a href="#">Why GDPR isn't working</a> <span>|</span>
        <a href="#">Why DMA isn't working</a>
      </div>
      <div className={styles.legal}>
        <a href="#">Privacy Policy</a> <span>|</span>
        <a href="#">Terms of Use</a> <br />
        Responsible Entity: MartialLabs <br />© 2024 NotWorkingInEU. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
