import { Box, Button, Grid, Typography } from "@mui/material";

import BlogCard from "../ReUsable/BlogCart";

const eventData = [
  {
    image:
      "https://www.servosys.com/wp-content/uploads/2023/09/Modernizing-Digital-Transformation-award-at-FINNOVEX-2023-Dubai-Middle-East.-1-720x480.jpg",
    category: "Awards",
    title:
      "Honored as a Digital Transformation Player of the Year at Synnex India NBFC Summit & Awards 2023",
    link: "#",
  },
  {
    image:
      "https://www.servosys.com/wp-content/uploads/2023/10/DSC_9915-1024x684.jpg",
    category: "Awards",
    title: "Servosys Solutions was honored as the winner of “Modernizing Digital Transformation” at FINNOVEX 2023, Dubai Middle East.",
    link: "#",
  },
];

export default function Events() {
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant="h4" fontWeight="bold">
      Events, Awards & Accolades
      </Typography>

      {/* Blog Cards */}
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 3 }}>
        {eventData.map((blog, index) => (
          <Grid item sm={6} md={3} key={index}>
            <BlogCard {...blog} />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#89023E",
          "&:hover": { backgroundColor: "#700A2E" },
        }}
      >
        View All
      </Button>
    </Box>
  );
}
