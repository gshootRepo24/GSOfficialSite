import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@mui/material";
import styles from "./Header.module.css";
import logo from "../assets/growshoot_logo-icon.svg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const {t} = useTranslation();
  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>{t('nav.Product')} <ChevronDown size={16} /></li>
        <li>{t('nav.Solutions')} <ChevronDown size={16} /></li>
        <li>{t('nav.Resources')} <ChevronDown size={16} /></li>
        <li>{t('nav.Company')} <ChevronDown size={16} /></li>
      </ul>

      {/* Request Demo Button */}
      <Button 
        variant="contained" 
        className={styles.requestButton}
        endIcon={<ArrowRight />}
      >
      {  t('nav.Request Demo')}
      </Button>
    </nav>
  );
}

export default Navbar;
