import { Typography, Box, IconButton, Menu, MenuItem,ListItemText } from "@mui/material";
import styles from "./Header.module.css";
import { PhoneIcon, MailIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useEffect, useState } from "react";
import cookies from 'js-cookie';
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
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(()=>{
    document.body.dir = currentLanguage?.dir || 'ltr'
  },[currentLanguage])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    cookies.set('i18next', code);
    document.dir = code === 'ar' ? 'rtl' : 'ltr';
    handleClose();
  };

  return (
    <div className={styles.topbar}>
      <Box display="flex" alignItems="center" gap={1}>
        <PhoneIcon fontSize="small" />
        <Typography variant="body2">+91-120-5112541</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <MailIcon fontSize="small" />
        <Typography variant="body2">sales@servosys.com</Typography>
      </Box>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-controls="language-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: { mt: 1.5 }
        }}
      >
        <MenuItem disabled>
          {/* <Typography variant="subtitle2" color="text.secondary">
            {t('common.language')}
          </Typography> */}
        </MenuItem>
        
        {languages.map(({ code, name }) => (
          <MenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            selected={currentLanguageCode === code}
            sx={{
              opacity: currentLanguageCode === code ? 0.6 : 1,
              minWidth: 160
            }}
          >
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
