import Topbar from "../Topbar";
import Navbar from "../Navrbar";
import SameTab from "../ReUsable/SameTab";
import SameSection from "../ReUsable/SameSection";
import Footer from "../MainContent/Footer";
import { Box, Typography } from "@mui/material";
import ImageTextCard from "../ReUsable/Image-Text";
import Grid from "@mui/material/Grid2";
import {
  Settings,
  RingVolume,
  Textsms,
  BlurOn,
  StackedLineChart,
} from "@mui/icons-material";
import CustomCard from "../ReUsable/CustomCard";
import TrustedBy from "../MainContent/TrustedBy";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useTranslation } from "react-i18next";
import autoimage from "../../assets/GsImages/AutoImage.png";
import pdfimage from "../../assets/GsImages/pdfImage.png";
import phoneset from "../../assets/GsImages/phoneset.png";
import tech from "../../assets/GsImages/tech.png";
import Faq from "../ReUsable/Faq";
import GsBanner from "../../assets/GsImages/GsImageBanner.png";
import GsImageProcess from "../../assets/GsImages/GsImageProcess.png";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";
import { useContext } from "react";

const CardData = [
  {
    icon: AccessAlarmIcon,
    heading: "HIGHLY INTEGRATION-FRIENDLY",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    icon: Settings,
    heading: "MULTI-STORAGE SUPPORT",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    icon: RingVolume,
    heading: "FAST SEARCHING & MIS",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    icon: Textsms,
    heading: "PARALLEL READ/WRITE",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    icon: BlurOn,
    heading: "SECURITY & ENCRYPTION",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    icon: StackedLineChart,
    heading: "INCREASED PRODUCTIVITY",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
];

const TextImage = [
  {
    image: autoimage,
    position: "left",
    title: "Auto Image Enhancement",
  },
  {
    image: pdfimage,
    position: "right",
    title: "Easy Document Segregation",
  },
  {
    image: phoneset,
    position: "left",
    title: "On Device execution",
  },
  {
    image:tech,
     position: "right",
    title: "Integration Friendly",
  },
];
const faq =[
  {
    question:"Simplify Complex Paper-Based Processes With Efficient Images API Solution",
    answer:"Simplify the way you work with advanced technology and the speed of digital. Automation empowers you to manage content across multiple platforms of your business effectively. Intelligent digitization is the key to transforming paper-based content into virtual assets. An efficient images API solution eliminates the vulnerabilities involved in paper-based operations and fosters digital content management. An advanced business landscape and flawless execution can significantly improve overall efficiency and business productivity."
  },
  {
    question:"An Improved Content Management With Images API Solutions",
    answer:"Are you still spending vast amounts on storage space to keep your essential business documents? Paper is relatively inefficient and risky in terms of misplacement. With a diligent images API, you can get rid of cumbersome paperwork followed by hectic management and make your business operations easier. Ditch the outdated storage units and convert your paper into digital documents. Expert imaging services digitize your critical documents under a secured imaging interface that enables excellent traceability and complies with security protocols."
    },
    {
      question:"Harnessing The  Power Of Artificial Intelligence – API With Images",
      answer:"Scale all your short-term and long-term imaging needs with our AI-empowered API with images. Our imaging software is competent for handling high-volume document generation in your organization daily. An exemplary industrial experience and years of expertise enable us to deploy innovative imaging solutions quickly and effectively. Transform to make your business seamless and improve operational efficiency."},
      {
        question:"Photo Management Software Form A Seamless Experience",
        answer:"Unleash complete business potential with advanced automated solutions. Digitally enhanced photo management software is the best solution for speeding up your document management. It helps in editing, resizing, reshaping, etc., all your documents and important papers while offering seamless storage and an established track record for easy handling. Paper-based documents are time and cost-intensive. The advanced solutions prevent risk and mismanagement."
      },{
        question:"Streamline Relevant Business Processes With Image Management System",
        answer:"Manual and paper-based business processes can be cumbersome and hectic. Relying on updated technology and automation of routine tasks can significantly help in managing your operations while assisting in cutting down the inputs. Strategize your digital transformation with our image management system and enable your business to achieve the completion of maximum tasks while minimizing time and focusing on better productivity."
      }
  ]

export default function ServoSysDoc() {
  // var stackTrace = Error().stack;
  // console.log(stackTrace); // if console.log is available
  console.log(ServoSysDoc);
  const {colors}=useContext(ThemeContext)
  // console.trace();

  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <Navbar />
      <SameTab
        float="right"
        heading={t("servoimage.GsImage")}
        description={t("servoimage.digitization_benefit")}
        image={GsBanner}
      />
      <SameSection
        Title={t("servoimage.overview_title")}
        Description={t("servoimage.overview_description")}
      />
      <ImageTextCard
        position="left"
        image={GsImageProcess}
        textContent={t("servoimage.gsimages_usage")}
      />

      <SameSection Title={t("servoimage.features_title")} />
      <Box sx={{background:colors.background}}>
        <Box
        sx={{
          m: 2,
          // mt: 4,
          display: "flex",
          justifyContent: "center",
          gap: 1,
          maxWidth: "80%",
          margin: "auto",
          
        }}
      >
        <Grid container spacing={3}>
          {CardData.map((item) => (
            <Grid key={item.heading}>
              <CustomCard
                IconComponent={item.icon}
                heading={item.heading}
                desc={item.desc}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
      
      <Box textAlign="center" sx={{background:colors.background,color:colors.text,pt:2}} >
        <Typography  variant="h3">
          {t("servoimage.breakthrough_results")}
        </Typography>
        {TextImage.map((item) => (
          <ImageTextCard
            image={item.image}
            position={item.position}
            title={item.title}
          />
        ))}
      </Box>
      

      <TrustedBy />

      {faq.map((item) => (
        <Faq question={item.question} answer={item.answer} />
      ))}
      
      <Footer />
    </>
  );
}
