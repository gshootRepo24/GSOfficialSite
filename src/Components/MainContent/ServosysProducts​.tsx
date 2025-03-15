import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import SameSection from "../ReUsable/SameSection";

const tabs = [
    { label: "ServoStreams", color: "#eeeee4" },
    { label: "ServoDocs", color: "#eeeee4" },
    { label: "ServoWebScan", color: "#eeeee4" },
    { label: "ServoImage", color: "#eeeee4" },
  ];

const data = [
    {
      Button: "Learn More",
      text: "Future-Ready BPM suite enables BFSI companies to leverage powerful features such as straight-through processing, instant customer checks, flexible configuration, and real-time dashboards for reporting.",
      image: "https://www.servosys.com/wp-content/uploads/2023/06/ServosStreams.png",
    },
    {
        Button: "Learn More",
      text: "ServoDocs® is a cutting-edge Document Management System (DMS) having capability to archive, versioning, retrieve, and index documents. It is purposely designed to deliver high performance and integrates with external systems through APIs.",
      image:
        "https://www.servosys.com/wp-content/uploads/2023/06/ServoDocs-2.png",
    },
    {
        Button: "Learn More",
      text: "ServoWebScan® offers efficient document digitization using TWAIN compliant scanners. ServoWebScan simplifies complex document scanning processes by providing quick access to controls for auto indexing, scanning, reordering, cropping, resizing, and editing/deleting documents.",
      image:
        "https://www.servosys.com/wp-content/uploads/2023/06/ServoWebscan.png",
    },
    {
        Button: "Learn More",
        text: "ServoImage©, an API Toolkit and Image Processing SDK designed to tackle diverse business problems involving images. This powerful API can be seamlessly integrated into apps such as Customer Onboarding and Loan Origination, significantly reducing development time and effort for image-related functionalities.",
        image:
          "https://www.servosys.com/wp-content/uploads/2023/06/ServoImage.png",
      },
  ];

export default function ServosysProducts() {
    const [activeIndex,setActiveIndex] = useState(0);
  return (
    <Container sx={{ textAlign: "center" }}>
        <SameSection Title='Servosys Products​'
        SubHeading='That will Streamline Your Complete Business Process '
        Description='Experience the future of digital innovation with Servosys Products. With our four innovative solutions, we empower businesses to streamline processes, enhance productivity, and elevate their digital capabilities.'
        />
     
     <Box display="flex" alignItems='center' justifyContent='center' gap={2}  mt={3}>
                 
                 {tabs.map((tab, index) => (
                       <Button
                         key={index}
                         onClick={() => setActiveIndex(index)}
                         sx={{
                           background: activeIndex === index ?"linear-gradient(90deg, #16224F,rgb(245, 75, 81))" : tab.color  ,
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
                 <Box display="flex" alignItems="center" justifyContent="space-between" gap={10} padding={10} >
                   <Box maxWidth="50%">
                    
                     <Typography variant="body1">
                       {data[activeIndex].text}
                     </Typography>
                     <Button
                     sx={{
                        background:"linear-gradient(90deg, #16224F,rgb(245, 75, 81))",
                        p:1,
                        mt:2,
                        color:'white'
                     }}
                     >{data[activeIndex].Button}</Button>
                   </Box>
                   <Box>
                     <img src={data[activeIndex].image} alt={data[activeIndex].image} width="100%" />
                   </Box>
                 </Box>

    </Container>
  );
}
