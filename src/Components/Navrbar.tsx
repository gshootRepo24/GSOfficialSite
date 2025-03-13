import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@mui/material";
import styles from "./Header.module.css";
import logo from "../assets/growshoot_logo-icon.svg";

function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>Products <ChevronDown size={16} /></li>
        <li>Solutions <ChevronDown size={16} /></li>
        <li>Resources <ChevronDown size={16} /></li>
        <li>Company <ChevronDown size={16} /></li>
      </ul>

      {/* Request Demo Button */}
      <Button 
        variant="contained" 
        className={styles.requestButton}
        endIcon={<ArrowRight />}
      >
        Request Demo
      </Button>
    </nav>
  );
}

export default Navbar;
