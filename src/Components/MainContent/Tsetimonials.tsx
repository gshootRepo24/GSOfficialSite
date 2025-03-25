// import { Box } from "@mui/material";
import { Box } from "@mui/material";
import CardComponent from "../ReUsable/CardComponent";
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const cardData = [
  {
    image:
      "https://www.servosys.com/wp-content/uploads/2023/07/Abhishek-Sharma-CDO.jpg",
    description:
      "We have evaluated various products, and we thought Servosys Solutions is one of the best we have come across. We were also looking for a partner who is much more helpful in terms of migrations or much faster TAT, the needs we asked for, or the requirement we raised. Servosys was equally efficient and good in that particular aspect. We have been using this product for 3 odd years, and overall, I am very impressed.",
  },
];

export default function Testimonials() {
  const {colors} = useContext(ThemeContext)
  const { t } = useTranslation(); // Initialize translation hook
  const test = cardData[0];

  return (
    <>
      <Box sx={{ pt: 2, justifyContent: 'center', alignItems: 'center', background:colors.background }}>
        <SameSection
          Title={t('TestMon.title')} // Use translation for title
          SubHeading={t('TestMon.heading')} // Use translation for subheading
        />
        <CardComponent 
          image={test.image}
          description={t('TestMon.description')} // Use translation for description
        />
      </Box>
    </>
  );
}