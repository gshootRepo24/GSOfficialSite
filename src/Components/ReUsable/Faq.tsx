import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const Faq = ({question,answer}:any) => {
    // console.log('faq is loading....')
    const {colors}=useContext(ThemeContext);
  return (
    <Box
      sx={{
        padding: "40px",
        textAlign: "left",
        maxWidth: "100%",
        margin: "auto",
        background:colors.background,
        color:colors.text
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
       {question}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          // color: "#555",
          lineHeight: "1.6",
        }}
      >
       {answer}
      </Typography>
    </Box>
  );
};

export default Faq;
