import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


// import { Button } from "@mui/material";



function Boost4x() {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation();


  ////this is data for boost 4x
  const tabs = [
    { label: t('Boost.Handshake_with_Futuristic_Technologies'), color: "#eeeee4" },
    { label: t('Boost.Low-code platform'), color: "#eeeee4" },
    { label: t('Boost.AI_Led_products_&_solutions'), color: "#eeeee4" },
  ];
  const data = [
    {
      title: t('Boost.Handshake_with_Modern_Technologies'),
      text: t('Boost.Embracing'),
      image: "https://www.servosys.com/wp-content/uploads/2021/11/Image-59.png",
    },
    {
      title: t('Boost.Low_Code'),
      text: t('Boost.Low_Code_T'),
      image:
        "https://www.servosys.com/wp-content/uploads/2021/11/Low-Code-2048x1779.jpg",
    },
    {
      title: t('Boost.AI_Led'),
      text:t('Boost.AI_Led_T') ,
      image:
        "https://www.servosys.com/wp-content/uploads/2021/11/AI-Led-Solutions-2048x1365.jpg",
    },
  ];
  /////data end here






  
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Box>
          <Typography variant="h4" fontWeight="bold" color="#16224F">
           {t('Boost.BOOST')}
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#16224F">
            {t('Boost.PRODUCTIVITY')}
          </Typography>
        </Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "transparent", WebkitTextStroke: "2px red" }}
        >
          4X
        </Typography>
      </Box>

      

      <Box display="flex" alignItems='center' justifyContent='center' gap={2} mb={4} mt={3}>
                 
      {tabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                background: activeIndex === index ?"linear-gradient(90deg, #16224F, #E41E26)" : tab.color  ,
                color: activeIndex === index ? "white" : "#E41E26",
                borderRadius: "20px",
                padding: "10px 20px",
                fontWeight: "bold",
                textTransform: "none"
              }}
            >
              {tab.label}
            </Button>
          ))}
      </Box>
      <Box display="flex"  alignItems="center" justifyContent="space-between" gap={2} maxWidth={'70%'} margin={'auto'} >
        <Box maxWidth="50%">
          <Typography variant="h4" fontWeight="bold" color="#16224F" gutterBottom>
            {data[activeIndex].title}
          </Typography>
          <Typography variant="body1">
            {data[activeIndex].text}
          </Typography>
        </Box>
        <Box>
          <img src={data[activeIndex].image} alt={data[activeIndex].title} width="100%" />
        </Box>
      </Box>

      {/* <div id="tabs">
        <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => setActiveIndex(0)}
          >
           Handshake with Modern Technologies
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => setActiveIndex(1)}
          >
            Low Code Platform
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => setActiveIndex(2)}
          >
            AI Led products & solutions
          </button>
          
        </menu>
        <div id="tab-content">
          <ul>
            {data.map((item, index) => activeIndex === index && (
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <img src={item.image} alt={item.image} width={'50%'} />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Boost4x;
