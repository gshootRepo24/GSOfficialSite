
import { Box, Card, CardContent, Typography } from "@mui/material";


export default function MfileCard({Icon,title,desc}:any) {
  return (
   <Card sx={{maxWidth:340, m:1,p:4,bgcolor:'#E6E7E7'}}>
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
