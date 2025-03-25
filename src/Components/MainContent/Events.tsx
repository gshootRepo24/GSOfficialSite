
import { Box, Button, Grid, Typography } from "@mui/material";
import BlogCard from "../ReUsable/BlogCart";
import { useTranslation } from 'react-i18next'; 
import { ThemeContext } from "../ThemesProvider/ThemeProvider";
import { useContext } from "react";

const eventData = [
  {
    image:
      "https://www.servosys.com/wp-content/uploads/2023/09/Modernizing-Digital-Transformation-award-at-FINNOVEX-2023-Dubai-Middle-East.-1-720x480.jpg",
    categoryKey: "events.card.card1.title", 
    titleKey: "events.card.card1.description", 
    link: "#",
  },
  {
    image:
      "https://www.servosys.com/wp-content/uploads/2023/10/DSC_9915-1024x684.jpg",
    categoryKey: "events.card.card2.title",
    titleKey: "events.card.card2.description",
    link: "#",
  },
];

export default function Events() {
  const { t } = useTranslation(); 
  const {colors}=useContext(ThemeContext);

  return (
    <Box sx={{ textAlign: "center", pt: 2,background:colors.background,color:colors.text }}>
      <Typography variant="h4" fontWeight="bold">
        {t('events.title')} 
      </Typography>

      
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 3 }}>
        {eventData.map((event, index) => (
          <Grid item sm={6} md={3} key={index}>
            <BlogCard 
              image={event.image} 
              category={t(event.categoryKey)} 
              title={t(event.titleKey)} 
              link={event.link} 
            />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          m: 4,
          backgroundColor: "#89023E",
          "&:hover": { backgroundColor: "#700A2E" },
        }}
      >
        {t('events.button')} 
      </Button>
    </Box>
  );
}