import { Box, Typography } from "@mui/material";

export default function SameSection({ Title, SubHeading, Description }:any) {
  return (
    <Box sx={{textAlign:'center', mt:3}}>
      <Typography
        variant="h4"
        fontWeight="Bold"
        color="red"
        textTransform="uppercase"
      >
        ​{Title}
      </Typography>
      <Typography
        variant="h4"
        fontWeight="Bold"
        color="#063970"
        textTransform="capitalize"
      >
        {SubHeading}
      </Typography>
      <Typography variant="body1" fontWeight="800">
        {Description}
      </Typography>
    </Box>
  );
}
