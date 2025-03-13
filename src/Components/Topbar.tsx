import { Typography, Box } from '@mui/material'
import styles from './Header.module.css'
import { PhoneIcon,MailIcon } from 'lucide-react'

export default function Topbar() {
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
        </div>
    )
}
