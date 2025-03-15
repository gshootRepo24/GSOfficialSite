import { Box, Typography, Grid, Button } from "@mui/material";
import BlogCard from "../ReUsable/BlogCart";

// Sample Blog Data
const blogData = [
  {
    image: 'https://www.servosys.com/wp-content/uploads/2025/02/Low-Code-BPM-simplifying-business-process-management-in-BFS-Industry-1400x900.jpg',
    category: "BLOG & ARTICLE",
    title: "Low-Code BPM simplifying business process management in BFS Industry",
    link: "#",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2025/01/Aadhaar-Masking-Solution-for-Banks-Financial-Services-700x450.jpg",
    category: "BLOG & ARTICLE",
    title: "Aadhaar Masking Solution for Banks & Financial Services",
    link: "#",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2025/01/workflow-automation-software-1400x900.jpg",
    category: "BLOG & ARTICLE",
    title: "How to Find the Best Workflow Automation Software in 2025",
    link: "#",
  },
];

export default function Insights() {
  return (
    <Box sx={{ textAlign: "center", mt:2 }}>
      <Typography variant="h4" fontWeight="bold">
        Insights – PRs, Blogs & Articles
      </Typography>

      {/* Blog Cards */}
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 3 }}>
        {blogData.map((blog, index) => (
          <Grid item  sm={6} md={3} key={index}>
            <BlogCard {...blog} />
          </Grid>
        ))}
      </Grid>

     
      <Button 
        variant="contained" 
        sx={{ mt: 4, backgroundColor: "#89023E", "&:hover": { backgroundColor: "#700A2E" } }}
      >
        View All
      </Button>
    </Box>
  );
}
