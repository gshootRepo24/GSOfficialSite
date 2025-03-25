import { Box, Typography } from "@mui/material";

export default function SameSection({ Title, SubHeading, Description }:any) {
  return (
    <Box sx={{ pt:4}}>
      <Typography
        variant="h4"
        fontWeight="Bold"
        color="white"
        sx={{WebkitTextStroke:'2px red',fontSize: { xs: "28px", sm: "32px", md: "36px" }}}
        textTransform="uppercase"
        textAlign={'center'}
      >
        ​{Title}
      </Typography>
      <Typography
        variant="h4"
        fontWeight="Bold"
        color="#063970"
        textTransform="capitalize"
        sx={{fontSize: { xs: "24px", sm: "28px", md: "32px" }}} 
        textAlign={'center'}     
      >
        {SubHeading}
      </Typography>
      <Typography sx={{textAlign:'justify',fontSize: { xs: "20px", sm: "28px", md: "32px" }}} variant="body1"  maxWidth={{xs:'100%',lg:'80%' }} margin='auto'>
        {Description}
      </Typography>
    </Box>
  );
}
