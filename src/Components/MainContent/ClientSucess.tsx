import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next";



export default function ClientSucess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation();

  let data = [
    {
      image: "https://www.servosys.com/wp-content/uploads/2023/06/5.webp",
      description: t('clientSucess.title2'),
    },
    {
      image: "https://www.servosys.com/wp-content/uploads/2023/06/3-1.webp",
      description:t('clientSucess.title3'),
    },
    {
      image: "https://www.servosys.com/wp-content/uploads/2023/06/1.webp",
      description: t('clientSucess.title4'),
    },
    {
      image: "https://www.servosys.com/wp-content/uploads/2023/06/4-1.webp",
      description: t('clientSucess.title5'),
    },
    {
      image: "https://www.servosys.com/wp-content/uploads/2023/06/2-1.webp",
      description: t('clientSucess.title6'),
    },
    
  ];




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
        Title={t('clientSucess.title')}
        SubHeading={t('clientSucess.handling')}
        Description={t('clientSucess.description')}
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
