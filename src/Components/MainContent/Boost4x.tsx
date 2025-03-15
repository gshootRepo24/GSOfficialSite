import { useState } from "react";
import styles from "./maincontent.module.css";
import { Box, Button, Typography } from "@mui/material";
import { color } from "@mui/system";

// import { Button } from "@mui/material";

const tabs = [
  { label: "Handshake with Futuristic Technologies", color: "#eeeee4" },
  { label: "Low-code platform", color: "#eeeee4" },
  { label: "AI Led products & solutions", color: "#eeeee4" },
];
const data = [
  {
    title: "Handshake with Modern Technologies",
    text: "Embracing emerging technologies and integrating them seamlessly into solutions, future-proofing businesses and enabling you to stay ahead of the curve.",
    image: "https://www.servosys.com/wp-content/uploads/2021/11/Image-59.png",
  },
  {
    title: "Low Code Platform",
    text: "Low code BPM platform keeps you one step ahead in achieving high-speed implementation and digital transformation. Our solutions help you adapt to changing business needs while keeping your on-premise investment minimal.",
    image:
      "https://www.servosys.com/wp-content/uploads/2021/11/Low-Code-2048x1779.jpg",
  },
  {
    title: "AI Led products & solutions",
    text: "Harnessing the power of AI to deliver predictive insights, automate tasks, and optimize processes, driving efficiency and improved decision-making..",
    image:
      "https://www.servosys.com/wp-content/uploads/2021/11/AI-Led-Solutions-2048x1365.jpg",
  },
];

function Boost4x() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
        <Box>
          <Typography variant="h4" fontWeight="bold" color="#16224F">
            BOOST
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#16224F">
            PRODUCTIVITY
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
                color: activeIndex === index ? "#E41E26" : "Black",
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
      <Box display="flex" alignItems="center" justifyContent="space-between" gap={4} padding={20} mt={0}>
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
