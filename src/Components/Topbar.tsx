import { Typography, Box, IconButton, Menu, MenuItem,ListItemText } from "@mui/material";
import styles from "./Header.module.css";
import { PhoneIcon, MailIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const languages = [
  { 
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "hi",
    name: "हिंदी",
    country_code: "in",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

export default function Topbar() {
  
  const {i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchParam, setSearchParam] = useSearchParams();

  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    searchParam.set('lang', lang);
    setSearchParam(searchParam);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    handleClose();
   
  };
  useEffect(() => {
    let lang = searchParam.get('lang')||window.navigator.language.split("-")[0];;
    if(lang===undefined){
      
    }
    
    if (lang) {
      i18n.changeLanguage(lang);
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [searchParam, i18n]);

  
  return (
    <div className={styles.topbar}>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "right",
      gap: { xs: 2, sm: 0 }, 
      width: "100%",
    }}
  >
    {/* Contact Info */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <PhoneIcon fontSize="small" />
        <Typography variant="body2">+91 7979 737168</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <MailIcon fontSize="small" />
        <Typography variant="body2">info@growshoot.com</Typography>
      </Box>
    </Box>

    {/* Language Selector */}
    <IconButton
      onClick={handleClick}
      size="large"
      aria-controls="language-menu"
      aria-haspopup="true"
      color="inherit"
      aria-label="Select Language"
      sx={{
        // marginTop: { xs: 0, sm: 0 }, // Add top margin on small screens
      }}
    >
      <LanguageIcon />
    </IconButton>
  </Box>

  <Menu
    id="language-menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    PaperProps={{
      elevation: 3,
      sx: { mt: 1.5 },
    }}
  >
    {languages.map(({ code, name }) => (
      <MenuItem
        key={code}
        onClick={() => changeLanguage(code)}
        selected={i18n.language === code}
        sx={{
          fontWeight: i18n.language === code ? "bold" : "normal",
          minWidth: 160,
        }}
      >
        <ListItemText>{name}</ListItemText>
      </MenuItem>
    ))}
  </Menu>
</div>

  );
}
