import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import HandShek from "../../assets/MainImages/HandShek.png";
import LowCode from "../../assets/MainImages/LowCode.png";
import Led from "../../assets/MainImages/Led.png";

function Boost4x() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  // Tabs Data
  const tabs = [
    { label: t("Boost.Handshake_with_Futuristic_Technologies"), color: "#eeeee4" },
    { label: t("Boost.Low-code platform"), color: "#eeeee4" },
    { label: t("Boost.AI_Led_products_&_solutions"), color: "#eeeee4" },
  ];

  // Main Content Data
  const data = [
    {
      title: t("Boost.Handshake_with_Modern_Technologies"),
      text: t("Boost.Embracing"),
      image: HandShek,
    },
    {
      title: t("Boost.Low_Code"),
      text: t("Boost.Low_Code_T"),
      image: LowCode,
    },
    {
      title: t("Boost.AI_Led"),
      text: t("Boost.AI_Led_T"),
      image: Led,
    },
  ];

  return (
    <>
      {/* Boost Header */}
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} flexWrap="wrap">
        <Box textAlign="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#16224F"
            sx={{ fontSize: { xs: "20px", sm: "28px", md: "32px" } }}
          >
            {t("Boost.BOOST")}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#16224F"
            sx={{ fontSize: { xs: "20px", sm: "28px", md: "32px" } }}
          >
            {t("Boost.PRODUCTIVITY")}
          </Typography>
        </Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "transparent",
            WebkitTextStroke: "2px red",
            fontSize: { xs: "32px", sm: "48px", md: "64px" },
          }}
        >
          4X
        </Typography>
      </Box>

      {/* Tabs */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        mb={4}
        mt={3}
        flexWrap="wrap"
      >
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              background: activeIndex === index ? "linear-gradient(90deg, #16224F, #E41E26)" : tab.color,
              color: activeIndex === index ? "white" : "#E41E26",
              borderRadius: "20px",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              fontWeight: "bold",
              textTransform: "none",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* Content Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        maxWidth="90%"
        margin="auto"
        // flexWrap="wrap"
        sx={{ flexDirection: { xs: "column", md: "row",lg:"row" } }}
      >
        {/* Text Content */}
        <Box maxWidth={{ xs: "100%", md: "50%" }} textAlign="justify" mb={{ xs: 3, md: 0 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#16224F"
            gutterBottom
            sx={{ fontSize: { xs: "20px", sm: "24px", md: "28px" } }}
          >
            {data[activeIndex].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" }, lineHeight: 1.5 }}
          >
            {data[activeIndex].text}
          </Typography>
        </Box>

        {/* Image */}
        <Box maxWidth={{ xs: "100%", md: "50%" }}>
          <img
            src={data[activeIndex].image}
            alt={data[activeIndex].title}
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Boost4x;
