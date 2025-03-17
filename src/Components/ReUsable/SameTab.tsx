import { Box, Typography } from "@mui/material";


export default function SameTab({ heading, description, image,imagePosition }: any) {
  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%", margin: "auto" }}>
        <img
        src={image}
        alt={image}
        style={{
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
          float: imagePosition
        }}
      />
      <Box sx={{ position: "absolute", top:'20%', color: "white", padding: "10px", textAlign:'center' }}>
      <Typography variant="h2" color="white">
        {heading}
      </Typography>
      <Typography variant="h5" sx={{textWrap:'wrap', maxWidth:'50%', margin:'auto'}}>
        {description}
      </Typography>
      </Box>
    </Box>
  );
}
