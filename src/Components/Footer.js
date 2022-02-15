import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Catbox } from '../Assets/catbox-selfie-white.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Catbox />
      <p>CATBOX. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
