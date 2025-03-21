import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import  { useState } from "react";
import {motion} from 'framer-motion'
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next";




export default function MainContent2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation();

  const data =[
    {
        title:t('Delevired_Slider.title1'),
        descrption:t('Delevired_Slider.description1'),
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-4.jpg',
        buttonText:'learn More'
    },
    {
        title:t('Delevired_Slider.title2'),
        descrption:t('Delevired_Slider.description2'),
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg',
        buttonText:'learn More'
    },
    {
        title:t('Delevired_Slider.title3'),
        descrption:t('Delevired_Slider.description3'),
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-2.jpg',
        buttonText:'learn More'
    }
]




  return (
    <Box  py={3} px={3}>
      <SameSection Title={t('Delevired.title')}
        SubHeading={t('Delevired.heading')}
        Description={t('Delevired.description')}/>
     
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${data[activeIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(60%)",
            zIndex: -1,
          }}
        />
        <Box sx={{ width: "50%", p: 5 }}>
          <Typography variant="h3" fontWeight="bold">
            {data[activeIndex].title}
          </Typography>
          <Typography variant="body1" mt={2} mb={3}>
            {data[activeIndex].descrption}
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "20px" }}
          >
            {data[activeIndex].buttonText}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Tabs
            orientation="vertical"
            value={activeIndex}
            onChange={(e, newIndex) => setActiveIndex(newIndex)}
            textColor="inherit"
            sx={{
              "& .MuiTab-root": {
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                writingMode: "vertical-rl",
                textTransform: "none",
                borderBottom: "none",
              },
              "& .Mui-selected": {
                color: "#ff5b5b",
              },
            }}
          >
            {data.map((item, index) => (
              <Tab key={index} label={item.title} />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
