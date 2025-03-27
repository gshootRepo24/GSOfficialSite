import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const ImageTextCard = ({ image, textContent, position, title }: any) => {
  const isLeft = position === "left";
  const {colors} = useContext(ThemeContext)

  return (
    <Box
      sx={{
        display: "flex",
        pt:2,
        flexDirection: { xs: "column", md: isLeft ? "row" : "row-reverse" },
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: { xs: "center", md: "left" },
        padding: { xs: 2, md: 4 },
        gap: 3,
        margin: "auto",
        maxWidth: "100%",
        background:colors.background,
        color:colors.text
        
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={image}
        alt="Image"
        sx={{
          width: { xs: "100%", md: "40%" },
          height: "auto",
          borderRadius: 2,
          border: "1px solid #ccc",
          boxShadow: 1,
          
        }}
      />
      
      {/* Text Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          color="red"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "32px" },
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.6,
            
          }}
        >
          {textContent}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageTextCard;
