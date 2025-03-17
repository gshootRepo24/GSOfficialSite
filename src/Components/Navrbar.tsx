import { ArrowRight, ChevronDown } from "lucide-react";
import { Button, Menu, MenuItem, Box } from "@mui/material";
import styles from "./Header.module.css";
import logo from "../assets/growshoot_logo-icon.svg";
import { useTranslation } from "react-i18next";
import Translator from "./ReUsable/Translator";
import { useState } from "react";

// Submenu data structure
const menuItems = {
  Product: [
    "ServoStreams",
    "ServoDocs",
    "ServoWebScan",
    "ServoImage"
  ],
  Solutions: [
    "ARC Solution",
    "Digital Lending",
    "Digital CASA",
    "Home Loans",
    "Mortgage Lending"
  ],
  Resources: [
    "About Us",
    "Careers",
    "Leadership Team",
    "Blog",
    "Contact Us",
    "Awards & Recognition"
  ],
  Company: [
    "About Us",
    "Careers",
    "Leadership Team",
    "Blog",
    "Contact Us",
    "Awards & Recognition"
  ]
};

function Navbar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <img src={logo} alt="Logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        {Object.keys(menuItems).map((menu) => (
          <li key={menu}>
            <Box
              onClick={(e) => handleMenuOpen(e, menu)}
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <Translator string={`nav.${menu}`} />
              <ChevronDown size={16} />
            </Box>
          </li>
        ))}
      </ul>

      {/* Request Demo Button */}
      <Button 
        variant="contained" 
        className={styles.requestButton}
        endIcon={<ArrowRight />}
      >
        {t('nav.Request Demo')}
      </Button>

      {/* Submenu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 3,
          sx: { mt: 1.5 }
        }}
      >
        {activeMenu && menuItems[activeMenu as keyof typeof menuItems].map((item) => (
          <MenuItem 
            key={item}
            onClick={handleMenuClose}
            sx={{ minWidth: 200 }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
}

export default Navbar;
