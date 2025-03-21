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

const Cards = [
  {
    icon: DirectionsWalk,
    title: "Collective Intelligence",
    desc: "Unlock insights as M-Files platform helps with organizing and finding information, managing versions and duplicates, and guiding content collaboration within the Microsoft Ecosystem.",
  },
  {
    icon: MenuBookOutlined,
    title: "Strong Regulatory Compliance",
    desc: "M-Files' enhanced integration drives regulatory compliance by automating permissions and compliance controls according to business context and embedding them into daily workflows.",
  },
  {
    icon: SchoolOutlined,
    title: "Holistic View",
    desc: "Gain a holistic view to all relevant enterprise information across systems and data repositories. With M-Files, teams could work within Microsoft applications, including Microsoft Outlook, Microsoft Teams, and Microsoft Copilot, and access the enterprise information through M-Files.",
  },
];
const CardService = [
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-teams.png",
    title: "Microsoft Teams Add-In",
    maxWidth: 345,
    description:
      "M-Files Add-In for Microsoft Teams allows working in the context of a single team while providing unified access to all enterprise data from the M-Files Add-In tab. M-Files automates document governance and guides collaboration with workflows, while enabling ad-hoc conversations within Microsoft Teams.",
  },
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-outlook.png",
    title: "Microsoft Outlook Add-In",
    maxWidth: 345,
    description:
      "M-Files Outlook Integration automates filing emails and conversations with the appropriate client and project, enabling users to concentrate more on their work. This enhanced integration streamlines email organization and ensures communications and official correspondence are safely retained within the M-Files platform, enhancing overall productivity, efficiency, and compliance.",
  },
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-sharedpoint.png",
    title: "Microsoft SharePoint Connector",
    maxWidth: 345,
    description:
      "This M-Files integration connects to documents in SharePoint and adds new capabilities for knowledge work automation. M-Files allows connecting SharePoint documents to business objects from non-Microsoft systems, improving discoverability and driving business processes. M-Files supports complex, built-in workflows and compliance rules with states, triggers, actions, and conditions.",
  },
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-365.png",
    title: "M-Files Microsoft 365 Integration",
    maxWidth: 345,
    description:
      "M-Files integrates into Microsoft 365 and eliminates the manual work associated with document creation, storing and usage while ensuring consistency, confidentiality, and context.",
  },
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2025/02/logo-microsoft-office.png",
    title: "Microsoft Excel, Word, PowerPoint",
    maxWidth: 345,
    description:
      "M-Files helps find information based on what it is rather than where it is whether it is in Microsoft Excel or Microsoft PowerPoint. M-Files connects to all repositories and systems to create a single source of truth.",
  },
  {
    image:
      "https://www.m-files.com/wp-content/uploads/2024/05/logo-microsoft-copilot.png",
    title: "Microsoft Copilot Connector",
    maxWidth: 345,
    description:
      "Microsoft Copilot for Microsoft 365 is your AI companion at work. It helps access relevant data, summarize emails, transcribe meetings, create documents, and conduct research.",
  },
];

export default function Mfile() {
  const {t} = useTranslation();
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
    <Box textAlign="center">
      <Typography sx={{ color: "#1b254e", m: 4 }} variant="h4">
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
    <Box sx={{ textAlign: "center", m: 4 }}>
      <Typography sx={{ color: "#1b254e", m: 4 }} variant="h4">
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
    <Box sx={{ textAlign: 'center', m: 4 }}>
      <Typography sx={{ color: "#1b254e", m: 4 }} variant="h4">
        {t("call_to_action.title")} {/* Use translation */}
      </Typography>

      <iframe src="https://fast.wistia.net/embed/iframe/2ckhpllgco?playbar=true&amp;muted=false&amp;videoFoam=true&amp;autoplay=1" frameBorder="0" width={1000} height={500} sandbox='allow-scripts allow-modal' allow="autoplay;encrypted-media;" title="Video Player"></iframe>
    </Box>
    <Card sx={{ backgroundColor: "#1A253A", color: "white", borderRadius: 2, p: 4, maxWidth: 800, margin: "auto" }}>
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
    <Footer />
  </>
  );
}
