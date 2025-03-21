
import { Box, Typography, Grid, Button } from "@mui/material";
import BlogCard from "../ReUsable/BlogCart";
import { useTranslation } from 'react-i18next'; 


const blogData = [
  {
    image: 'https://www.servosys.com/wp-content/uploads/2025/02/Low-Code-BPM-simplifying-business-process-management-in-BFS-Industry-1400x900.jpg',
    categoryKey: "Insights.cards.card1.title", 
    descriptionKey: "Insights.cards.card1.description", 
    link: "#",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2025/01/Aadhaar-Masking-Solution-for-Banks-Financial-Services-700x450.jpg",
    categoryKey: "Insights.cards.card2.title",
    descriptionKey: "Insights.cards.card2.description",
    link: "#",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2025/01/workflow-automation-software-1400x900.jpg",
    categoryKey: "Insights.cards.card3.title",
    descriptionKey: "Insights.cards.card3.description",
    link: "#",
  },
];

export default function Insights() {
  const { t } = useTranslation(); 

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Typography variant="h4" fontWeight="bold">
        {t('Insights.title')} 
      </Typography>

  
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 3 }}>
        {blogData.map((blog, index) => (
          <Grid item sm={6} md={3} key={index}>
            <BlogCard 
              image={blog.image} 
              category={t(blog.categoryKey)} 
              title={t(blog.descriptionKey)} 
              link={blog.link} 
            />
          </Grid>
        ))}
      </Grid>

      <Button 
        variant="contained" 
        sx={{ mt: 4, backgroundColor: "#89023E", "&:hover": { backgroundColor: "#700A2E" } }}
      >
        {t('Insights.view')} 
      </Button>
    </Box>
  );
}