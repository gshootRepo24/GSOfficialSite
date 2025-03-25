import { IoSettingsOutline } from "react-icons/io5"
import "./GSWebScan.css"
import Navbar from "../Navrbar"
import Topbar from "../Topbar"
import { Box, Button, Card, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { TiCloudStorageOutline } from "react-icons/ti"
import { TbDeviceMobileCheck } from "react-icons/tb"
import { LuMessageCircleMore } from "react-icons/lu"
import { RiArrowLeftRightLine } from "react-icons/ri"
import { PiCirclesFourFill } from "react-icons/pi"
import { GoDotFill } from "react-icons/go"
import servoScanBgImage from "../../assets/GsDocs/cloud-computing-data-management-concept-1.jpg";
// import bgImage from "../../assets/GsDocs/cloud-computing-data-management-concept-1.jpg";
import readyToUse from "../../assets/GsDocs/Ready-to-Use.jpg";
import reduceDocumentHandling from "../../assets/GsDocs/Reduces-Document-Handling-Time.jpg";
import easyIntegration from "../../assets/GsDocs/Easy-Integration.jpg";
import simplifyDocManagement from "../../assets/GsDocs/Scanning-from-Within-Browsers.jpg";
import gsWebScan from "../../assets/GsDocs/ServoWebScan.jpg";
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

const GSWebScan = () => {
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
              backgroundImage: `url(${servoScanBgImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              marginTop: '10px',
              position: 'relative'
            }}
          >
            <Box style={{ width: '100%', height: '100%', background: 'rgba(8, 7, 86, 0.8)' }}>
              <Box style={{ maxWidth: '1073px', margin: 'auto', position: 'absolute', top: '20%', left: 0, right: 0, textAlign: 'center', color: 'white' }}>
                <Typography variant="h1" style={{ color: 'white', fontSize: '50px', fontWeight: 'bold' }}>
                <strong>{t(`GSWebScan.GSWebScan®`)}
               <sup>{t(`® `)}</sup>
              </strong>
                </Typography>
                <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '24px', fontSize: '20px', color: '#FFFDFD' }}>
                  {t('GSWebScan.Description')}
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
                    {t(`servodocs.DownloadBrochure`)}
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
                    {t(`servodocs.RequestADemo`)}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
    
          <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "30px" }}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px',fontSize:"40px" }}>
              <strong>{t(`GSWebScan.OverviewOfServoWebScan`)}
              </strong>
              <sup>{t(`®`)}</sup>
            </Typography>
            <Box style={{ backgroundColor: "#ffffff", textAlign: "center", fontSize: "20px", lineHeight: "35px" }}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                 {t('GSWebScan.DetailedDescription')}
              </Typography>
            </Box>
          </Container>
          <Container maxWidth="lg" style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "20px" }}>
            <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '40px', fontWeight: 'bold', color: '#ED2427' }}>
              {t(`GSWebScan.AdvancedFeaturesAndCapabilities`)} 
               <sup>{t(`®`)}</sup>
                
            </Typography>
          </Container>
    
          <Container maxWidth="lg" style={{ padding: "40px" }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left", }} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <IoSettingsOutline style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.TwainCompatibility`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.ScannedFilesIntegration`)}
                  </Typography>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <TiCloudStorageOutline style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.EasyConfigurability`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.PropertySettingsConfiguration`)}
                  </Typography>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <TbDeviceMobileCheck style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.DocumentEditing`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.DocumentEditingDescription`)}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '24px' }}>
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <LuMessageCircleMore style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.EasilyIntegrateWithWebApps`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.BrowserSupportDescription`)}
                  </Typography>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <RiArrowLeftRightLine style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.SingleMultipagePDFTIFF`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.SingleMultipagePDFTIFFDescription`)}
                  </Typography>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                      backgroundColor: "transparent", 
                      backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                    },}}>
                  <PiCirclesFourFill style={{ fontSize: '50px' }} />
                  <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t(`GSWebScan.TATReduction`)}
                  </Typography>
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                    {t(`GSWebScan.TATReductionDescription`)}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Container>
    
          <Container maxWidth="lg" style={{ textAlign: "center", padding: "10px" }}>
            <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '24px', fontWeight: 'bold', color: '#ED2427', fontSize:"40px" }}>
            {t(`servodocs.BreakthroughResultsBFSI`)}
            </Typography>
          </Container>
    
          <Container maxWidth="lg" className="image_container" style={{display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ImageListItem>
                  <img src={readyToUse} alt="Image A" loading="lazy" style={{ width: '100%' }} />
                </ImageListItem>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px',fontSize:"40px" }}>
                {t(`GSWebScan.ReadyToUse`)}
                </Typography>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.WebBasedScanningSolution`)}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.TATReductionProduction`)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
    
          <Container maxWidth="lg" className="image_container" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px',fontSize:"40px" }}>
                {t(`GSWebScan.ReducesDocumentHandlingTime`)}
                </Typography>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                  <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.InstantDigitizationDescription`)} 
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                  <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.QuickScanningAndAutoIndexingDescription`)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageListItem>
                  <img src={reduceDocumentHandling} alt="Image B" loading="lazy" style={{ width: '100%' }} />
                </ImageListItem>
              </Grid>
            </Grid>
          </Container>
    
          <Container maxWidth='lg' className="image_container" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ImageListItem>
                  <img src={easyIntegration} alt="Image C" loading="lazy" style={{ width: '100%' }} />
                </ImageListItem>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px',fontSize:"40px" }}>
                {t(`GSWebScan.EasyIntegration`)}
                </Typography>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                  <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.BrowserSupportAndIntegrationDescription`)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
    
          <Container maxWidth="lg" className="image_container" style={{ display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h2" style={{ fontWeight: 'bold', color: '#ED2427', marginBottom: '24px',fontSize:"40px" }}>
                {t(`GSWebScan.SimplifyDocumentManagement`)}
                </Typography>
                <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
                  <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
                  <Typography variant="body2" sx={{fontSize:"20px",fontWeight:500, lineHeight:"35px",color:"#27273A", fontFamily:"poppins"}} >
                  {t(`GSWebScan.SimplifyDocumentCapturingDescription`)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageListItem>
                  <img src={simplifyDocManagement} alt="Image D" loading="lazy" style={{ width: '100%' }} />
                </ImageListItem>
              </Grid>
            </Grid>
          </Container>
    
          <Container maxWidth="lg">
            <Typography variant="h2" style={{ textAlign: "center", fontWeight: 'bold', color: '#ED2427', margin: '24px 0',fontSize:"40px" }}>
            <strong>{t(`GSWebScan.GSWebScan®`)}
               <sup>{t(`® `)}</sup>
              </strong>
            </Typography>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={gsWebScan} alt="GSWebScan" style={{ width: '50%' }} />
            </Box>
          </Container>
    
          <Container maxWidth="lg">
            <Typography variant="h2" style={{ textAlign: "center", fontWeight: 'bold', color: '#ED2427', margin: '24px 0',fontSize:"40px" }}>
            {t(`servodocs.TrustedByIndustryLeaders`)}
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
        </main>
    </>
  )
}

export default GSWebScan