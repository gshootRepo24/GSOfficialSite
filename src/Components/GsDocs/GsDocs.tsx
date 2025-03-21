
import "./Gsdocs.css";
import { IoSettingsOutline } from "react-icons/io5";
import { TiCloudStorageOutline } from "react-icons/ti";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { PiCirclesFourFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { Box, Card, Container, ImageList, ImageListItem, Button, Typography, Grid } from "@mui/material";
import bgImage from "../../assets/GsDocs/cloud-computing-data-management-concept-1.jpg";
import imageA from "../../assets/GsDocs/time.jpg";
import imageB from "../../assets/GsDocs/image_b.jpg";
import imageC from "../../assets/GsDocs/image_c.jpg";
import imageD from "../../assets/GsDocs/image_d.jpg";
import imageE from "../../assets/GsDocs/ServoDocs-01.png";
import axisBankImg from "../../assets/GsDocs/AxixBank.webp";
import avansImg from "../../assets/GsDocs/Avans.webp";
import adityaBirlaImg from "../../assets/GsDocs/AdityaBirla.png";
import ayeImg from "../../assets/GsDocs/Aye.png";
import iciciImg from "../../assets/GsDocs/Icici.png";
import ltImg from "../../assets/GsDocs/L&T.webp";
import karurImg from "../../assets/GsDocs/Karur.webp";
import finoImg from "../../assets/GsDocs/Fino.webp";
import gicImg from "../../assets/GsDocs/Gic.webp";
import bandhanImg from "../../assets/GsDocs/Bandhan.webp";
import relianceImg from "../../assets/GsDocs/Reliance.webp";
import suryodayImg from "../../assets/GsDocs/Suryoday.webp";
import { useTranslation } from "react-i18next";
import Navbar from "../Navrbar";
import Topbar from "../Topbar";

const Gsdocs = () => {
  const { t } = useTranslation();
  
  const itemData = [
    { img: axisBankImg, title: 'Axis Bank' },
    { img: avansImg, title: 'Avans' },
    { img: adityaBirlaImg, title: 'Aditya Birla' },
    { img: ayeImg, title: 'Aye' },
    { img: iciciImg, title: 'ICICI' },
    { img: ltImg, title: 'L&T ' },
    { img: karurImg, title: 'Karur' },
    { img: finoImg, title: 'Fino' },
    { img: gicImg, title: 'Gic' },
    { img: bandhanImg, title: 'Bandhan' },
    { img: relianceImg, title: 'Reliance' },
    { img: suryodayImg, title: 'Suryoday' },
  ];

  return (
   <>
   <Topbar/>
   <Navbar/>
    <main style={{ width: '100%', height: '65vh', backgroundColor: 'white', fontFamily: 'Poppins, sans-serif' }}>
      <Box
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginTop: '10px',
          position: 'relative'
        }}
      >
        <Box style={{ width: '100%', height: '100%', background: 'rgba(8, 7, 86, 0.8)' }}>
          <Box style={{ maxWidth: '1073px', margin: 'auto', position: 'absolute', top: '20%', left: 0, right: 0, textAlign: 'center', color: 'white' }}>
            <Typography variant="h1" style={{ color: 'white', fontSize: '50px', fontWeight: 'bold' }}>
              {t('servodocs.servodocs')}
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '24px', fontSize: '20px', color: '#FFFDFD' }}>
              {t('servodocs.DigitizationText')}
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
              <Button
                variant="contained"
                disableElevation
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  // '&:hover': {
                  //   backgroundColor: '#115293',
                  // },
                }}
              >
                {t(`Download Brochure`)}
              </Button>
              <Button
                variant="contained"
                disableElevation
                style={{
                  padding: '10px 15px',
                  backgroundColor: 'red',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  // '&:hover': {
                  //   backgroundColor: 'darkred',
                  // },
                }}
              >
                {t(`Request a Demo`)}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px' }}>
          {t(`Overview Of`)} <span style={{ color: '#1f2b5d' }}>{t(`Servo`)}</span> {t(`Docs®`)}
        </Typography>
        <Box style={{ backgroundColor: "#ffffff", textAlign: "center", fontSize: "20px", lineHeight: "35px" }}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            <strong>{t(`ServoDocs`)}</strong>
            <sup>{t(`®`)}</sup> {t('servodocs.DMSDescription')}
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src="https://www.servosys.com/wp-content/uploads/2023/08/ServoDocs.png" alt="ServoDocs" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              <b>{t(`ServoDocs`)} </b>{t('servodocs.ArchiveRetrieveDescription')}
            </Typography>
            <Typography variant="body1">
              {t(`Business applications like Lending Management System (LMS), Core Banking System (CBS), Customer Relationship Management (CRM), Customer On-boarding, Core Insurance, ERP, etc can be integrated with ServoDocsTM through APIs.`)}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "20px" }}>
        <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '40px', fontWeight: 'bold', color: '#ED2427' }}>
          {t(`AdvancedFeaturesOfServoDocs`)} <span style={{ color: '#1f2b5d' }}>{t(`Servo`)}</span> {t(`Docs®`)}
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{ padding: "40px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left",  }}>
              <IoSettingsOutline style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`HIGHLY INTEGRATION-FRIENDLY`)}
              </Typography>
              <Typography variant="body2">
                {t(`Readily available APIs allow integration with any 3rd party applications`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }}>
              <TiCloudStorageOutline style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`MULTI-STORAGE SUPPORT`)}
              </Typography>
              <Typography variant="body2">
                {t(`ServoDocs support multi-storage types in a single setup`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}}>
              <TbDeviceMobileCheck style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`FAST SEARCHING & MIS`)}
              </Typography>
              <Typography variant="body2">
                {t(`Search on File, Folder and meta levels ensures instant retrieval.`)}
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '24px' }}>
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }}>
              <LuMessageCircleMore style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`PARALLEL READ/WRITE`)}
              </Typography>
              <Typography variant="body2">
                {t(`Supports a high degree of parallel read/write operations that are faster than the traditional systems.`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}}>
              <RiArrowLeftRightLine style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`SECURITY & ENCRYPTION`)}
              </Typography>
              <Typography variant="body2">
                {t(`To adhere to stringent data security policies, documents are stored and transferred in encrypted format.`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}}>
              <PiCirclesFourFill style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`INCREASED PRODUCTIVITY`)}
              </Typography>
              <Typography variant="body2">
                {t(`"Work anywhere, organize documents better, collaborate effectively, save time, and boost productivity.`)}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ textAlign: "center", padding: "10px" }}>
        <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '24px', fontWeight: 'bold', color: '#ED2427' }}>
          Breakthrough results delivered across BFSI
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageA} alt="Image A" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px' }}>
              Lowered TAT
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Advance DMS automates workflows, streamlines document retrieval, ensures compliance, offers advanced search, and integrates with other systems, resulting in faster decision-making and reduced Turnaround Time (TAT).
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px' }}>
              Compliance & Security
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Ensures that sensitive financial documents are protected and adhere to regulatory requirements.
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Having a secure and compliant document repository can expedite audits and regulatory inspections.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageB} alt="Image B" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg' style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageC} alt="Image C" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px' }}>
              Lessened Manpower
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Advanced DMS automates document processes, reducing the need for manual handling.
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Quick retrieval reduces time spent searching for documents.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px' }}>
              Integration Friendly
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Advanced DMS offers robust APIs for seamless integration with existing software.
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
                Supports real-time data synchronization for up-to-the-minute document updates and collaboration.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageD} alt="Image D" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Typography variant="h2" style={{ textAlign: "center", fontWeight: 'bold', color: '#ED2427', margin: '24px 0' }}>
          ServoDocs® – Document Management System
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={imageE} alt="ServoDocs" style={{ width: '100%' }} />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Typography variant="h2" style={{ textAlign: "center", fontWeight: 'bold', color: '#ED2427', margin: '24px 0' }}>
          Trusted by Industry Leaders
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{ padding: "60px" }}>
        <ImageList style={{ width: "100%", height: 450 }} cols={6} gap={15} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Container maxWidth="lg" style={{ padding: "0 10px", color: "#27273a" }}>
        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>ServoDocs®: Streamline Your Document Management System</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          In the contemporary digital landscape, enterprises are generating an unprecedented volume of documentation. Effectively managing this bulky paperwork presents inherent challenges, including the risk of misplacement, time wastage, and frustration. In response to this need, Servosys Solutions has created ServoDocs, a sophisticated document management system (DMS) aimed at facilitating seamless document storage, retrieval, and collaboration.
        </Typography>
        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>Overview of ServoDocs: Document Management Software</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          ServoDocs is an innovative document management software capable of efficiently indexing, retrieving, and archiving documents while offering rapid search capabilities. The product’s primary design objective is optimal performance, complemented by its integration with external systems through the use of APIs, irrespective of the scale of the document repository.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          ServoDocs benefits both short-term transactional and long-term archive-retrieve use cases. Because the system allows permitted access to preserved documents, it assists in converting digitized paper documents and electronic files into valuable knowledge assets for enterprises that must deal with unstructured materials for conducting business. Users can retain versions of the papers they upload into the system with the use of file management software.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          ServoDocsTM can be integrated with business programs like ERP, CRM, Lending Management System (LMS), Core Banking System (CBS), Customer Onboarding, Core Insurance, etc., via APIs.
        </Typography>

        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>Benefits of Using Document Management System Software</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          For companies of all sizes, ServoDocs provides numerous advantages. These are but a handful:
        </Typography>
        <ul style={{ paddingLeft: '40px' }}>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Enhanced Efficiency:</strong> ServoDocs eliminates the need to manually search for paper documents, helping you save time and money. Its user-friendly design and robust search capabilities enable you to locate the necessary documents quickly.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Improved Collaboration:</strong> With document management system features, users can collaborate more easily on documents when they use document management system software. You can assign projects to coworkers, track progress in real time, and exchange documents with them.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Enhanced Output:</strong> ServoDocs’ ability to streamline document management procedures can make your staff members more productive. They can concentrate more on their primary responsibilities and spend less time looking for paperwork.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Enhanced Security:</strong> Legal document management software protects your documents with solid security features, including role-based access control, encryption, and audit trails.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Lower Costs:</strong> The best document management software can assist you in lowering the price of managing documents and storing paper records. You can cut expenses on filing, copying, and printing.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Disaster Recovery:</strong> ServoDocs allows you to save your documents on the cloud, where they are accessible from any location, even in an emergency.
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>Advanced Features of DMS System: ServoDocs</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>Key Features:</strong>
        </Typography>
        <ul style={{ marginBottom: '16px', paddingLeft: '40px' }}>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Highly Integration-Friendly:</strong> ServoDocs offers readily available APIs for seamless integration with any 3rd party applications.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Multi-Storage Support:</strong> ServoDocs supports multiple storage types within a single setup.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Fast Searching:</strong> With the support of the finest DMS system, users can perform instant retrieval through file, folder, and meta-level searches.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Parallel Read/Write:</strong> The system supports high levels of parallel read/write operations, resulting in faster performance compared to traditional systems.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Security & Encryption:</strong> Documents are stored and transferred in encrypted format to comply with strict data security policies.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>Increased Productivity:</strong> ServoDocs enables users to work from anywhere, better organize documents, collaborate effectively, save time, and enhance productivity.
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>Breakthrough results delivered across BFSI</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>Lowered Turnaround Time (TAT)</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          1. Advance DMS not only streamlines document retrieval and ensures compliance but also automates procedures.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          2. It provides advanced search capabilities and system integration, resulting in prompt decision-making and reduced turnaround times (TAT).
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>Compliance & Security</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          1. Advance DMS guarantees the safety and compliance of confidential financial records.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>Reduced Manpower</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          1. By automating document processes, advanced digital document management software diminishes the necessity for manual handling.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          1. Advanced document control software offers robust APIs for seamless interaction with existing software.
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          2. It enables real-time data synchronization for collaborative and up-to-the-minute document modifications.
        </Typography>

        <Typography variant="h2" style={{ color: "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>Getting Started with ServoDocs: Document Control Software</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          Utilizing ServoDocs is straightforward to initiate. Prospective users can request a trial of the software from Servosys Solutions before making a purchase. The company offers a diverse array of options tailored to meet the specific requirements of your business. ServoDocs stands as a robust and user-friendly document management solution, capable of significantly enhancing productivity, security, efficiency, and collaboration for businesses of varying scales. In addition, Servosys Solutions extends its services to include a loan origination system, designed to optimize the loan processing workflow. For those seeking to streamline their document management processes, ServoDocs presents itself as a compelling solution worthy of consideration.
        </Typography>
      </Container>
    </main>
   </>
  );
};

export default Gsdocs;