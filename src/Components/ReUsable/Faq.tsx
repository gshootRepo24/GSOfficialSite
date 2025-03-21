import { Box, Typography } from "@mui/material";

const Faq = ({question,answer}:any) => {
    console.log('faq is loading....')
  return (
    <Box
      sx={{
        padding: "40px",
        textAlign: "left",
        maxWidth: "80%",
        margin: "auto",
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
          color: "#555",
          lineHeight: "1.6",
        }}
      >
       {answer}
      </Typography>
    </Box>
  );
};

export default Faq;
