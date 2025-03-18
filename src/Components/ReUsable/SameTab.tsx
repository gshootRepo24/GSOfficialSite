import { Box, Typography } from "@mui/material";


export default function SameTab({ heading, description, image }: any) {
  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%", margin: "auto" }}>
        <img
        src={image}
        alt={image}
        style={{
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
          
        }}
      />
      <Box sx={{ position: "absolute", top:'20%', color: "white", padding: "10px", textAlign:'center' }}>
      <Typography variant="h2" color="white">
        {heading}
      </Typography>
      <Typography variant="h5" sx={{textWrap:'wrap', maxWidth:'70%', margin:'auto'}}>
        {description}
      </Typography>
      </Box>
    </Box>
  );
}
