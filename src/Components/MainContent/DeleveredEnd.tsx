import { Box, Typography, Button, Tabs, Tab } from "@mui/material";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next";
import Banner4 from "../../Assets/MainImages/Banner4.png";
import Banner3 from "../../Assets/MainImages/Banner3.png";
import Banner2 from "../../Assets/MainImages/Banner2.png";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

export default function MainContent2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const {colors} = useContext(ThemeContext)

  const data = [
    {
      title: t("Delevired_Slider.title1"),
      descrption: t("Delevired_Slider.description1"),
      image: Banner4,
      buttonText: t("Delevired_Slider.ButtonText"),
    },
    {
      title: t("Delevired_Slider.title2"),
      descrption: t("Delevired_Slider.description2"),
      image: Banner3,
      buttonText: t("Delevired_Slider.ButtonText"),
    },
    {
      title: t("Delevired_Slider.title3"),
      descrption: t("Delevired_Slider.description3"),
      image: Banner2,
      buttonText: t("Delevired_Slider.ButtonText"),
    },
  ];

  return (
    <Box py={3} px={3} sx={{background:colors.background}} >
      <SameSection
        Title={t("Delevired.title")}
        SubHeading={t("Delevired.heading")}
        Description={t("Delevired.description")}
      />

      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", md: "100vh" },
          color:colors.text,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          overflow: "hidden",
        }}
      >
        {/* Background Image Animation */}
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
            filter: "brightness(100%)",
            zIndex: -1,
          }}
        />

        {/* Left Section (Text Content) */}
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            p: { xs: 2, md: 5 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {data[activeIndex].title}
          </Typography>
          <Typography
            variant="body1"
            mt={2}
            mb={3}
            sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {data[activeIndex].descrption}
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: "20px",
              fontSize: { xs: "0.8rem", md: "1rem" },
              padding: { xs: "8px 16px", md: "10px 20px" },
            }}
          >
            {data[activeIndex].buttonText}
          </Button>
        </Box>

        {/* Right Section (Vertical Tabs) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide tabs on small screens
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

        {/* Horizontal Tabs for Small Screens */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            mt: 3,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Tabs
            value={activeIndex}
            onChange={(e, newIndex) => setActiveIndex(newIndex)}
            textColor="inherit"
            centered
            sx={{
              "& .MuiTab-root": {
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                textTransform: "none",
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
