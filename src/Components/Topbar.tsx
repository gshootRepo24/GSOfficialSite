import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material'
import styles from './Header.module.css'
import { PhoneIcon,MailIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@mui/icons-material/Language'
import React from 'react'

export default function Topbar() {
    const { t, i18n } = useTranslation()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        handleClose()
    }

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
                onClick={handleLanguageMenu}
                color="inherit"
                aria-label="language"
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={() => changeLanguage('en')}>
                    English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('hi')}>
                    हिंदी
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('ar')}>
                    العربية
                </MenuItem>
            </Menu>
        </div>
    )
}
