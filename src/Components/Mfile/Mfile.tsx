import { Box, Button, Card, CardContent, Grid2, Stack, Typography } from "@mui/material";
import Footer from "../MainContent/Footer";
import ImageTextCard from "../ReUsable/Image-Text";
import Topbar from "../Topbar";
import {
  DirectionsWalk,
  MenuBookOutlined,
  SchoolOutlined,
  Star,
} from "@mui/icons-material";
import MfileCard from "./Card";
import CardComponent from "../ReUsable/CardComponent";
import Navbar from "../Navrbar";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";



export default function Mfile() {
  const {t} = useTranslation();
  const {colors}= useContext(ThemeContext)
  const Cards = [
    {
      icon: DirectionsWalk,
      title:t('integration_section.features.collective_intelligence'),
      desc: t('integration_section.features.collective_intelligence_description'),
    },
    {
      icon: MenuBookOutlined,
      title: t('integration_section.features.regulatory_compliance'),
      desc: t('integration_section.features.regulatory_compliance_description'),
    },
    {
      icon: SchoolOutlined,
      title:  t('integration_section.features.holistic_view'),
      desc:  t('integration_section.features.holistic_view_description'),
    },
  ];
  const CardService = [
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-teams.png",
      title: t('microsoft_integration.teams_addin.title'),
      maxWidth: 345,
      description:t('microsoft_integration.teams_addin.description'),
    },
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-outlook.png",
      title:  t('microsoft_integration.outlook_addin.title'),
      maxWidth: 345,
      description:
      t('microsoft_integration.outlook_addin.description'),
    },
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-sharedpoint.png",
      title: t('microsoft_integration.sharepoint_connector.title'),
      maxWidth: 345,
      description:
      t('microsoft_integration.sharepoint_connector.description'),
    },
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-365.png",
      title:  t('microsoft_integration.microsoft_365_integration.title'),
      maxWidth: 345,
      description: t('microsoft_integration.microsoft_365_integration.description'),
    },
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2025/02/logo-microsoft-office.png",
      title:  t('microsoft_integration.microsoft_office.title'),
      maxWidth: 345,
      description:t('microsoft_integration.microsoft_office.description'),
    },
    {
      image:
        "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-copilot.png",
      title: t('microsoft_integration.copilot_connector.title'),
      maxWidth: 345,
      description:t('microsoft_integration.copilot_connector.description'),
    },
  ];
  return (
   
    <>
    <Topbar />
    <Navbar />
    <Box>
      <ImageTextCard
        image="https://www.m-files.com/wp-content/uploads/2024/10/Website-image-Microsoft-365-1.png"
        title={t("hero_section.title")} // Use translation
        textContent={t("hero_section.description")} // Use translation
        position="left"
      />
      <ImageTextCard
        image="https://www.m-files.com/wp-content/uploads/2025/02/Website-Deploy-M-Files-rocket.png"
        title={t("integration_section.title")} // Use translation
        textContent={t("integration_section.description")} // Use translation
        position="right"
      />
    </Box>
    <Box textAlign="center" sx={{background:colors.background,color:colors.text}}>
      <Typography sx={{  p: 4 }} variant="h4">
        {t("integration_section.features.single_view")} {/* Use translation */}
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        {Cards.map((item) => (
          <Grid2 container gap={2} key={item.title}>
            <MfileCard Icon={item.icon} title={t(item.title)} desc={t(item.desc)} /> {/* Use translation */}
          </Grid2>
        ))}
      </Box>
    </Box>
    <Box sx={{ textAlign: "center", p: 4,bgcolor:colors.background }}>
      <Typography sx={{ color: colors.text, m: 4 }} variant="h4">
        {t("microsoft_integration.title")} {/* Use translation */}
      </Typography>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        <Grid2 container spacing={1} justifyContent="center">
          {CardService.map((item) => (
            <CardComponent
              image={item.image}
              title={t(item.title)} // Use translation
              maxWidth={345}
              description={t(item.description)} // Use translation
            />
          ))}
        </Grid2>
      </Box>
    </Box>
    <Box sx={{ textAlign: 'center', p: 4,background:colors.background }}>
      <Typography sx={{ color: colors.text, m: 4 }} variant="h4">
        {t("call_to_action.title")} {/* Use translation */}
      </Typography>

      <iframe src="https://fast.wistia.net/embed/iframe/2ckhpllgco?playbar=true&amp;muted=false&amp;videoFoam=true&amp;autoplay=1" frameBorder="0" width={1000} height={500} sandbox='allow-scripts allow-modal' allow="autoplay;encrypted-media;" title="Video Player"></iframe>
    </Box>
    <Box sx={{backgroundColor: colors.background, color: colors.text}}>
       <Card sx={{ backgroundColor: colors.background,color: colors.text,borderRadius: 2, p: 4, maxWidth:'80%', margin: "auto" }}>
      <CardContent>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t("call_to_action.title")} {/* Use translation */}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t("call_to_action.description")} {/* Use translation */}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Box display="flex" alignItems="center">
            <Star sx={{ color: "orange" }} />
            <Typography sx={{ ml: 1 }}>4.3</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Star sx={{ color: "orange" }} />
            <Typography sx={{ ml: 1 }}>4.5</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Star sx={{ color: "orange" }} />
            <Typography sx={{ ml: 1 }}>4.4</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ backgroundColor: '#1b254e', "&:hover": { backgroundColor: '#1b254e' } }}>
            {t("call_to_action.try")} {/* Use translation */}
          </Button>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", "&:hover": { borderColor: '#1b254e' } }}>
            {t("call_to_action.get")} {/* Use translation */}
          </Button>
        </Stack>
      </CardContent>
    </Card>
    </Box>
   
    <Footer />
  </>
  );
}
