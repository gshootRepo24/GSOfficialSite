import  { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import Translator from "./ReUsable/Translator";


const AutoSlider = () => {



  // const { t } = useTranslation();
  const data = [
  {
    id: "slide1",
    image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg",
    Title: <Translator string='Slider.Unlock Business Values With ModernTechnology' />,
    GoTo:'/'
  },
  {
    id: "slide2",
    image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-2.jpg",
    Title: <Translator string='Slider.Fastest Solution Implementer'/>,
  },
  {
    id: "slide3",
    image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-4.jpg",
    Title: <Translator string='Slider.Digital_Lending_Platform'/>,
  },
];




  const [currentIndex, setCurrentIndex] = useState(0);
 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%", margin: "auto" }}>
     
      <img
        src={data[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
     
      <Box sx={{ position: "absolute", top:'20%', left: "20%", color: "white", padding: "10px" }}>
        <Typography variant="h3">{data[currentIndex].Title}</Typography>
        <Button variant='contained' sx={{mt:'50px'}}><Translator string='Slider.Learn more'/></Button>
      </Box>
      
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default AutoSlider;
