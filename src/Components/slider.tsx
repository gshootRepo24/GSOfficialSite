import { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import Translator from "./ReUsable/Translator";

const AutoSlider = () => {
  const data = [
    {
      id: "slide1",
      image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg",
      Title: <Translator string="Slider.Unlock Business Values With ModernTechnology" />,
      GoTo: "/",
    },
    {
      id: "slide2",
      image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-2.jpg",
      Title: <Translator string="Slider.Fastest Solution Implementer" />,
    },
    {
      id: "slide3",
      image: "https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-4.jpg",
      Title: <Translator string="Slider.Digital_Lending_Platform" />,
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
    <Box sx={{ position: "relative", width: "100%", maxWidth: "100%", margin: "auto", overflow: "hidden" }}>
      {/* Image */}
      <Box
        component="img"
        src={data[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: { xs: "200px", sm: "300px", md: "500px" }, // Adjust height based on screen size
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          transform: "translateY(-10%)",
          color: "white",
          textAlign: "left",
          width: { xs: "80%", sm: "60%", md: "40%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "18px", sm: "24px", md: "32px" }, // Responsive text sizes
            fontWeight: "bold",
            mb: 2,
          }}
        >
          {data[currentIndex].Title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: "20px",
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive button size
            padding: { xs: "8px 12px", sm: "10px 16px" },
          }}
        >
          <Translator string="Slider.Learn more" />
        </Button>
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
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
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default AutoSlider;
