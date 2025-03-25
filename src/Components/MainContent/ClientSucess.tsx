import { Box, Card, CardContent, CardMedia, Grid2, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import SameSection from "../ReUsable/SameSection";
import { useTranslation } from "react-i18next";
import RetailLanding from "../../Assets/MainImages/RetailLanding.png";
import SmeLanding from "../../Assets/MainImages/SmeLanding.png";
import CoprateLanding from "../../Assets/MainImages/CoprateLanding.png";
import GoldLoan from "../../Assets/MainImages/GoldLoan.png";
import CustomerDurable from "../../Assets/MainImages/CustomerDurable.png";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

export default function ClientSucess() {
  const {colors} = useContext(ThemeContext)
  const { t } = useTranslation();
  const [data, setData] = useState([
    {
      image: RetailLanding,
      description: t('clientSucess.title2'),
    },
    {
      image: SmeLanding,
      description:t('clientSucess.title3'),
    },
    {
      image: CoprateLanding,
      description: t('clientSucess.title4'),
    },
    {
      image: GoldLoan,
      description: t('clientSucess.title5'),
    },
    {
      image: CustomerDurable,
      description: t('clientSucess.title6'),
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  

  const rotateClockwise = (arr:any) => {
    const last = arr.pop();
    arr.unshift(last);
    return arr;
  };

  const rotateCounterClockwise = (arr:any) => {
    const first = arr.shift();
    arr.push(first);
    return arr;
  };

  const handlePrev = () => {
    setData((prevData) => rotateCounterClockwise([...prevData]));
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setData((prevData) => rotateClockwise([...prevData]));
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <>
      <Box  justifyContent="center" py={3} px={3} sx={{background:colors.background,color:colors.text}}>
        <SameSection
          Title={t("clientSucess.title")}
          SubHeading={t("clientSucess.handling")}
          Description={t("clientSucess.description")}
        />
        <Box display="flex" justifyContent="center" position="relative">
          <Grid2 container spacing={1}>
          {data.map((item, index) => (
            <Grid2>
            <Box key={index} p={1}>
              <Card sx={{ maxWidth: 300,height:400,background:colors.background,color:colors.text }}>
                <CardMedia component="img" height="300" image={item.image} alt={item.description} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            </Grid2>
          ))}
          </Grid2>

          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
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
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(226, 16, 16, 0.5)",
              color: "white",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

