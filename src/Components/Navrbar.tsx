import { ArrowRight, ChevronDown, Menu as MenuIcon } from "lucide-react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/growshoot_logo-icon.svg";
import { ThemeContext } from "./ThemesProvider/ThemeProvider";
import { useContext } from "react";




const menuItems = {
  Product: ["GsStreams", "GsDocs", "GsImage", "Complementing Microsoft"], //"GsWebScan"
  Solutions: ["ARC Solution", "Digital Lending", "Digital CASA", "Home Loans", "Mortgage Lending"],
  Resources: ["About Us", "Careers", "Leadership Team", "Blog", "Contact Us", "Awards & Recognition"],
  Company: ["About-Us", "Careers", "Leadership Team", "Blog", "Contact Us", "Awards & Recognition"],
};

function Navbar() {
  const {colors}=useContext(ThemeContext);  
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null); // For mobile submenus

  useEffect(() => {
    console.log("Navbar component loaded");
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleMobileSubMenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "0px",
          zIndex: 1000,
        }}
      >
        Skip to main content
      </a>
      {/* <Button onClick={toggleTheme} style={{position:"absolute",right:"0",bottom:"0"}}>
        {theme==='light'?<LightMode/>:<DarkMode/>}
      </Button> */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ padding: "0 16px", backgroundColor:colors.background,color:colors.text }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src={logo} alt="Growshoot Logo" style={{ height: 50 }} />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4}}>
            {Object.keys(menuItems).map((menu) => (
              <Box
                key={menu}
                onClick={(e) => handleMenuOpen(e, menu)}
                sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer" }}
                aria-haspopup="true"
                aria-expanded={activeMenu === menu ? "true" : "false"}
                role="menuitem"
              >
                <Typography variant="body1">{t(`nav.${menu}`)}</Typography>
                <ChevronDown size={16} />
              </Box>
            ))}
            <Button
              variant="contained"
              endIcon={<ArrowRight />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                // backgroundColor: colors.primary , //getColorPalette2(theme).primaryFontColor
                // color:colors.text,
                // ":hover": { backgroundColor: colors.secondary },
                
              }}
            >
              {t("nav.Request Demo")}
            </Button>
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Submenu for Desktop */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: { mt: 1.5 },
          }}
          
        >
          {activeMenu &&
            menuItems[activeMenu as keyof typeof menuItems].map((item) => (
              <MenuItem
                key={item}
                onClick={handleMenuClose}
                sx={{ minWidth: 100,background:colors.background}}
                tabIndex={0}
              >
                <Link
                  to={`/Nav/${item.replace(/\s+/g, "").toLowerCase()}`}
                  style={{ textDecoration: "none",color:colors.link  }}
                >
                  {item}
                </Link>
              </MenuItem>
            ))}
        </Menu>

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={toggleMobileDrawer}
          PaperProps={{
            sx: { width: "75%", padding: 2 },
            role: "navigation",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} tabIndex={-1}>
            {Object.keys(menuItems).map((menu) => (
              <Box key={menu}>
                <Box
                  onClick={() => toggleMobileSubMenu(menu)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    padding: "8px 0",
                  }}
                  aria-expanded={mobileActiveMenu === menu ? "true" : "false"}
                  aria-haspopup="true"
                  role="button"
                >
                  <Typography variant="body1">{t(`nav.${menu}`)}</Typography>
                  <ChevronDown size={16} />
                </Box>
                <Collapse in={mobileActiveMenu === menu} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 2 }}>
                    {menuItems[menu as keyof typeof menuItems].map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          padding: "8px 0",
                          cursor: "pointer",
                        }}
                      >
                        <Link
                          to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                          style={{ textDecoration: "none", color: "black" }}
                          onClick={toggleMobileDrawer}
                        >
                          {item}
                        </Link>
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              </Box>
            ))}
            <Button
              variant="contained"
              endIcon={<ArrowRight />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor:colors.primary,
                color: "#ffffff",
                ":hover": { backgroundColor:colors.primary },
              }}
            >
              {t("nav.Request Demo")}
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
}

export default Navbar;
