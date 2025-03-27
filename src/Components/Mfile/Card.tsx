
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";


export default function MfileCard({Icon,title,desc}:any) {
  const {colors} = useContext(ThemeContext);
  return (
   <Card sx={{maxWidth:340,border:"2px solid red", m:1,p:4,bgcolor:colors.background,color:colors.text}}>
    <CardContent>
        <Box display='flex'>
          {Icon && (
            <Icon sx={{fontSize: 30}} />
          )}
       <Typography sx={{color:'#1b254e'}}>{title}</Typography>
        </Box>
        <Typography mt={1} variant="body1" fontFamily={'Winky Sans, sans-serif'} textAlign='justify'>
       {desc}
        </Typography>
    </CardContent>
    
   </Card>
  )
}
