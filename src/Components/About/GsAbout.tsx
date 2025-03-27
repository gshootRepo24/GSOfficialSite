import Footer from "../MainContent/Footer";
import Navbar from "../Navrbar";
import SameTab from "../ReUsable/SameTab";
import Topbar from "../Topbar";
import AboutBg from "../../Assets/About/AboutBg.png";
import SameSection from "../ReUsable/SameSection";
import ImageTextCard from "../ReUsable/Image-Text";
import Vision from "../../Assets/About/Vision.png";
import Mission from "../../Assets/About/Mission.png";
import CustomCard from "../ReUsable/CustomCard";
import { Grid2 } from "@mui/material";
import TrustedBy from "../MainContent/TrustedBy";
import Results from "../MainContent/Results";
import committed from "../../Assets/About/committed.png";
import { useTranslation } from "react-i18next";


export default function GsAbout() {
  const {t} = useTranslation();
  const CardData = [
    {
      heading:t('GsAbout.know_More.highly_iintergrated'),
      desc: t('GsAbout.know_More.highly_iintergrated_desc'),
    },
    {
      heading: t('GsAbout.know_More.futuristice'),
      desc: t('GsAbout.know_More.futuristice_desc'),
    },
    {
      heading: t('GsAbout.know_More.proven'),
      desc: t('GsAbout.know_More.proven_desc'),
    },
    {
      heading:  t('GsAbout.know_More.proven'),
      desc: t('GsAbout.know_More.proven_desc'),
    },
    {
      heading: t('GsAbout.know_More.award'),
      desc: t('GsAbout.know_More.award_desc'),
    },
  ];
  
  
  return (
    <>
      <Topbar />
      <Navbar />
      <SameTab
        heading={t('GsAbout.title')}
        description={
          t('GsAbout.description')
        }
        image={AboutBg}
      />
      <SameSection
        Title={t('GsAbout.discover.title')}
        Description={
         t('GsAbout.discover.description')
        }
      />
      <ImageTextCard
        image={Vision}
        textContent={t('GsAbout.vision.description')}
        position="left"
        title={t('GsAbout.vision.title')}
      />
      <ImageTextCard
        image={Mission}
        textContent={t('GsAbout.mission.description')}
        position="right"
        title={t('GsAbout.mission.title')}
      />

      <SameSection Title={t('GsAbout.know_More.title')} />

      <Grid2 container mt={4} justifyContent={"center"} spacing={3}>
        {CardData.map((item) => (
          <Grid2 key={item.heading}>
            <CustomCard heading={item.heading} desc={item.desc} />
          </Grid2>
        ))}
      </Grid2>
      <TrustedBy/>
      <Results/>

      <ImageTextCard
        image={committed}
        textContent={t('GsAbout.committed.description')}
        position="right"
        title={t('GsAbout.committed.title')}
      />

      <Footer />
    </>
  );
}
