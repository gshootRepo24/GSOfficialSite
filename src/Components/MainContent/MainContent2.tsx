import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import  { useState } from "react";
import {motion} from 'framer-motion'


const data =[
    {
        title:'Digital Landing Platform',
        descrption:'The refactoring of architecture with state-of-the-art technology provides a gateway to outgrow a traditional lending regime and embrace functional uniqueness with utmost scalability.',
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-4.jpg',
        buttonText:'learn More'
    },
    {
        title:'Digital Landing Platform',
        descrption:'The refactoring of architecture with state-of-the-art technology provides a gateway to outgrow a traditional lending regime and embrace functional uniqueness with utmost scalability.',
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg',
        buttonText:'learn More'
    },
    {
        title:'Digital Landing Platform',
        descrption:'The refactoring of architecture with state-of-the-art technology provides a gateway to outgrow a traditional lending regime and embrace functional uniqueness with utmost scalability.',
        image:'https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-2.jpg',
        buttonText:'learn More'
    }
]
export default function MainContent2() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box textAlign="center" justifyContent="center" py={3} px={3}>
      <Typography
        variant="h4"
        color="red"
        fontWeight="bold"
        sx={{ textTransform: "uppercase" }}
      >
        Delevired End to End
      </Typography>
      <Typography variant="h4" color="#063970" fontWeight="bold">
        Digital Transformation Solutions
      </Typography>
      <Typography variant="body1" maxWidth="60%" mx="auto" fontWeight="bold">
        Whether you’re looking to enhance operational efficiency, improve
        customer experience, or unlock new growth opportunities, we have the
        knowledge and experience to deliver impeccable outcomes.
      </Typography>

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
