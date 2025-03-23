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
import logo from "../assets/growshoot_logo-icon.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const menuItems = {
  Product: ["ServoStreams", "ServoDocs", "ServoWebScan", "ServoImage"],
  Solutions: ["ARC Solution", "Digital Lending", "Digital CASA", "Home Loans", "Mortgage Lending"],
  Resources: ["About Us", "Careers", "Leadership Team", "Blog", "Contact Us", "Awards & Recognition"],
  Company: ["About Us", "Careers", "Leadership Team", "Blog", "Contact Us", "Awards & Recognition"],
};

function Navbar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null); // For mobile submenus

  useEffect(() => {
    console.log("App is loading....");
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
    <AppBar position="static" color="transparent" elevation={0} sx={{ padding: "0 16px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 50 }} />
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
          {Object.keys(menuItems).map((menu) => (
            <Box
              key={menu}
              onClick={(e) => handleMenuOpen(e, menu)}
              sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer" }}
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
              backgroundColor: "#007bff",
              ":hover": { backgroundColor: "#0056b3" },
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
              sx={{ minWidth: 200 }}
            >
              <Link to={`/${item.replace(/\s+/g, "").toLowerCase()}`} style={{ textDecoration: "none", color: "black" }}>
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
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                        to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
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
              backgroundColor: "#007bff",
              ":hover": { backgroundColor: "#0056b3" },
            }}
          >
            {t("nav.Request Demo")}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
