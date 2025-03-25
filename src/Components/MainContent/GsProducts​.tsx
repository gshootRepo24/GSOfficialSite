import { Box, Button, Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next";
import GsStreams from "../../Assets/MainImages/GsStreams.png";
import GsDocs from "../../Assets/MainImages/GsDocs.png";
import GsWebScan from "../../Assets/MainImages/GsWebScan.png";
import GsImage from "../../Assets/MainImages/GsImage.png";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const tabs = [
  { label: "GSStreams", color: "#eeeee4" },
  { label: "GSDocs", color: "#eeeee4" },
  { label: "GSWebScan", color: "#eeeee4" },
  { label: "GSImage", color: "#eeeee4" },
];

const data = [
  {
    Button: "Learn More",
    text: "Future-Ready BPM suite enables BFSI companies to leverage powerful features such as straight-through processing, instant customer checks, flexible configuration, and real-time dashboards for reporting.",
    image: GsStreams,
  },
  {
    Button: "Learn More",
    text: "GSDocs® is a cutting-edge Document Management System (DMS) having capability to archive, versioning, retrieve, and index documents. It is purposely designed to deliver high performance and integrates with external systems through APIs.",
    image: GsDocs,
  },
  {
    Button: "Learn More",
    text: "GSWebScan® offers efficient document digitization using TWAIN compliant scanners. GSWebScan simplifies complex document scanning processes by providing quick access to controls for auto indexing, scanning, reordering, cropping, resizing, and editing/deleting documents.",
    image: GsWebScan,
  },
  {
    Button: "Learn More",
    text: "GSImage©, an API Toolkit and Image Processing SDK designed to tackle diverse business problems involving images. This powerful API can be seamlessly integrated into apps such as Customer Onboarding and Loan Origination, significantly reducing development time and effort for image-related functionalities.",
    image: GsImage,
  },
];

export default function ServosysProducts() {
  const {colors} = useContext(ThemeContext)
  const { t } = useTranslation(); // Initialize translation hook
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container maxWidth={false} sx={{ textAlign: "center", padding: { xs: 2, md: 4 }, width: "100%", background: colors.background, color: colors.primary }}>
      <SameSection
        Title={t("GsProduct.title")} // Use translation for title
        SubHeading={t("GsProduct.heading")} // Use translation for heading
        Description={t("GsProduct.description")} // Use translation for description
      />

      {/* Tabs */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={3}>
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              background:
                activeIndex === index
                  ? "linear-gradient(90deg, #16224F,rgb(245, 75, 81))"
                  : tab.color,
              color: activeIndex === index ? "white" : "#E41E26",
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
            }}
          >
            {t(`GsProduct.Button.${tab.label}`)} {/* Use translation for button labels */}
          </Button>
        ))}
      </Box>

      {/* Tab Content */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        padding={4}
      >
        {/* Text Content */}
        <Box
          maxWidth={{ xs: "100%", md: "50%" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography variant="body1">
            {t(`GsProduct.tabs.tab${activeIndex + 1}`)} {/* Use translation for tab content */}
          </Typography>
          <Button
            sx={{
              background: "linear-gradient(90deg, #16224F,rgb(245, 75, 81))",
              p: 1,
              mt: 2,
              color: "white",
            }}
          >
            {data[activeIndex].Button} {/* Keep the button text as is or translate if needed */}
          </Button>
        </Box>

        {/* Image Content */}
        <Box
          maxWidth={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
        >
          <img
            src={data[activeIndex].image}
            alt={`Product ${activeIndex}`}
            style={{
              width: "100%",
              maxWidth: "400px", // Limit image width for smaller screens
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
