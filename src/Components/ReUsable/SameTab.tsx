import { Box, Typography } from "@mui/material";


export default function SameTab({ heading, description, image }: any) {
  return (
    <Box sx={{  position: "relative", width: "100%", maxWidth: "100%", margin: "auto" }}>
        <img
        src={image}
        alt={image}
        style={{
          width: "100%",
          height: "25rem",
          borderRadius: "10px",
          objectFit: "cover",
          
          
        }}
      />
      <Box sx={{ position: "absolute", top:'20%', color:'rgba(186, 254, 228, 0.8)', padding: "10px",textAlign:'center', width: "100%", height: "100%" }}>
      <Typography fontWeight='bold' variant="h3" mt={2}>
        {heading}
      </Typography>
      <Typography fontSize='20px' variant="h5" sx={{ maxWidth:'70%',margin:'auto'}}>
        {description}
      </Typography>
      </Box>
    </Box>
  );
}
