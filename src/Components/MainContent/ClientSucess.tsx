import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import SameSection from "../ReUsable/SameSection";

let data = [
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/5.webp",
    description: "Retail Landing",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/3-1.webp",
    description: "SME Lending",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/1.webp",
    description: "Corprate Lending",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/4-1.webp",
    description: "Gold Loan",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/2-1.webp",
    description: "Customer Durable Lending",
  },
  
];

export default function ClientSucess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
     data = rotateCounterClockwise([...data]);

    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };


  function rotateClockwise(arr:any) {
    let last = arr.pop(); // Remove the last element
    arr.unshift(last); // Add it to the front
    return arr;
  }
  
  // Counterclockwise Rotation
  function rotateCounterClockwise(arr:any) {
    let first = arr.shift(); // Remove the first element
    arr.push(first); // Add it to the end
    return arr;
  }

  const handleNext = () => {
     data = rotateClockwise([...data]);

    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  return (
    <>
      <Box textAlign="center" justifyContent="center" py={3} px={3}>

        <SameSection
        Title='Client Success Spotlight'
        SubHeading='Empowering Businesses with Servosys Solutions'
        Description=' With our suites, you can foster digital banking transformation and
          scale business operations to excellence while addressing challenges
          with high TAT, organizational productivity, service quality, and
          regulatory compliance.'
        />
        {data.map((item,index) => (

          
          <Box display='inline-flex' p={1} justifyContent='space-between' key={index}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia component="img" height="300" image={item.image} alt={item.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {item.description}
                </Typography>
              </CardContent>
            </Card>
            <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          // top: "50%",
          mt:20,
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(195, 19, 19, 0.5)",
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
          // top: "50%",
          mt:20,
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(226, 16, 16, 0.5)",
          color: "white",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
          </Box>
          
        ))}
            
      </Box>
    </>
  );
}
