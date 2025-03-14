import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

let data = [
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/5.webp",
    description: "Retail Landing1",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/3-1.webp",
    description: "Retail Landing2",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/1.webp",
    description: "Retail Landing3",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/4-1.webp",
    description: "Retail Landing3",
  },
  {
    image: "https://www.servosys.com/wp-content/uploads/2023/06/2-1.webp",
    description: "Retail Landing4",
  },
  
];

export default function MainContent3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
     data = rotateCounterClockwise([...data]);

    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };


  function rotateClockwise(arr) {
    let last = arr.pop(); // Remove the last element
    arr.unshift(last); // Add it to the front
    return arr;
  }
  
  // Counterclockwise Rotation
  function rotateCounterClockwise(arr) {
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
        <Typography
          variant="h4"
          color="red"
          fontWeight="bold"
          sx={{ textTransform: "uppercase" }}
        >
          Client Success Spotlight
        </Typography>
        <Typography variant="h4" color="#063970" fontWeight="bold">
          Empowering Businesses with Servosys Solutions
        </Typography>
        <Typography variant="body1" maxWidth="60%" mx="auto" fontWeight="bold">
          With our suites, you can foster digital banking transformation and
          scale business operations to excellence while addressing challenges
          with high TAT, organizational productivity, service quality, and
          regulatory compliance.
        </Typography>

        {data.map((index, item) => (

          
          <Box display='inline-flex' p={1} justifyContent='space-between'>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia component="img" height="300" image={index.image} alt={index.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {index.description}
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
