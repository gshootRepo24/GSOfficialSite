
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
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const Gsdocs = () => {
  const { t } = useTranslation();
 const {colors,theme} = useContext(ThemeContext)
  
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
          backgroundImage: theme ==="light" ? `url(${bgImage})` : `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginTop: '10px',
          position: 'relative'
        }}
      >
        <Box style={{ width: '100%', height: '100%', background: 'rgba(8, 7, 86, 0.8)' }}>
          <Box style={{ maxWidth: '1073px', margin: 'auto', position: 'absolute', top: '20%', left: 0, right: 0, textAlign: 'center', color: 'white' }}>
            <Typography variant="h1" style={{  color: theme ==="dark" ? colors.text :'white', fontSize: '50px', fontWeight: 'bold' }}>
            <strong>{t(`servodocs.ServoDocs`)}
           <sup>{t(`® `)}</sup>
          </strong>
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '24px', fontSize: '20px', color: theme ==="dark" ? colors.text : '#FFFDFD' }}>
              {t('servodocs.DigitizationText')}
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
              <Button
                variant="contained"
                disableElevation
                style={{
                  padding: '10px 15px',
                  backgroundColor:theme ==="dark" ? colors.background : '#1976d2',
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
                  backgroundColor:theme ==="dark" ? colors.background : 'red',
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
        <Typography variant="h2" style={{background:colors.background, fontWeight: 'bold', color: theme ==="dark" ? colors.text :'#ED2427', marginBottom: '24px' }}>
          {/* <strong>{t(`servodocs.OverviewOf`)}</strong> */}
          <strong>{t(`servodocs.OverviewOf`)}
          </strong>
           <span style={{ color: theme ==="dark" ? colors.text :'#1f2b5d' }}>{t(`servodocs.Servo`)}</span>
            {t(`servodocs.Docs®`)}
        </Typography>
        <Box style={{ backgroundColor: theme ==="dark" ? colors.background :"#ffffff", textAlign: "center", fontSize: "20px", lineHeight: "35px" }}>
          <Typography variant="body1" style={{color:colors.text, fontWeight: 'bold' }}>
            <strong>{t(`servodocs.ServoDocs`)}</strong>
            <sup>{t(`®`)}</sup> {t('servodocs.DMSDescription')}
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{background:colors.background , color:colors.text}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src="https://www.servosys.com/wp-content/uploads/2023/08/ServoDocs.png" alt="ServoDocs" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
            <strong>{t(`servodocs.ServoDocs`)}</strong>
            <sup>{t(`® `)}</sup> {t('servodocs.ArchiveRetrieveDescription')}
            </Typography>
            <Typography variant="body1">
              {t(`servodocs.BusinessApplicationsIntegration`)}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background, textAlign: "center", paddingTop: "30px", paddingBottom: "20px" }}>
        <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '40px', fontWeight: 'bold', color:theme ==="dark" ? colors.text : '#ED2427' }}>
          {t(`servodocs.AdvancedFeaturesOfServoDocs`)} <span style={{ color:theme ==="dark" ? colors.text : '#1f2b5d' }}>{t(`servodocs.Servo`)}</span> {t(`servodocs.Docs®`)}
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background, padding: "40px" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left", }} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <IoSettingsOutline style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.HIGHLYINTEGRATIONFRIENDLY`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.ReadilyAvailableAPIs`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <TiCloudStorageOutline style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.MULTISTORAGESUPPORT`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.MultiStorageSupport`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <TbDeviceMobileCheck style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.FASTSEARCHINGMIS`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.SearchOnFileFolderMeta`)}
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '24px' }}>
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left" }} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <LuMessageCircleMore style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.PARALLELREAD/WRITE`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.ParallelReadWriteSupport`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <RiArrowLeftRightLine style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.SECURITYANDENCRYPTION`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.DataSecurityPolicies`)}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card style={{background:colors.background, color:colors.text, maxWidth: 285, minHeight: 206, padding: "20px", border: "1px solid grey", borderRadius: "30px", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)", textAlign: "left"}} sx={{ '&:hover': {
                  backgroundColor: "transparent", 
                  backgroundImage: "linear-gradient(-90deg, #1E295D 0%, #ED2124CC 100%)",
                },}}>
              <PiCirclesFourFill style={{ fontSize: '50px' }} />
              <Typography variant="body1" style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 'bold' }}>
                {t(`servodocs.INCREASEDPRODUCTIVITY`)}
              </Typography>
              <Typography variant="body2">
                {t(`servodocs.WorkAnywhereBoostProductivity`)}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background, textAlign: "center", padding: "10px" }}>
        <Typography variant="h2" style={{ marginTop: '20px', marginBottom: '24px', fontWeight: 'bold', color:theme==="dark" ? colors.text : '#ED2427' }}>
        {t(`servodocs.BreakthroughResultsBFSI`)}
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{ background:colors.background, display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageA} alt="Image A" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: theme==="dark" ? colors.text :'#ED2427', marginBottom: '24px' }}>
            {t(`servodocs.LoweredTAT`)}
            </Typography>
            <Box style={{color:colors.text, display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
            <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.AdvanceDMSFeatures`)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background,color:colors.text, display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color:theme==="dark" ? colors.text : '#ED2427', marginBottom: '24px' }}>
            {t(`servodocs.Compliance&Security`)}
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.SensitiveDocumentsProtection`)} 
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.SecureCompliantRepository`)}
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

      <Container maxWidth='lg' style={{background:colors.background,color:colors.text, display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImageListItem>
              <img src={imageC} alt="Image C" loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color:theme === "dark" ? colors.text: '#ED2427', marginBottom: '24px' }}>
            {t(`servodocs.LessenedManpower`)}
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.AutomatesDocumentProcesses`)}
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.QuickRetrieval`)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background,color:colors.text, display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "500", lineHeight: "35px", fontFamily: "Poppins, sans-serif", textAlign: "left", marginBottom: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color:theme==="dark"? colors.text:'#ED2427', marginBottom: '24px' }}>
            {t(`servodocs.IntegrationFriendly`)}
            </Typography>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.RobustAPIsIntegration`)}
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "top", paddingInlineStart: "5px" }}>
              <GoDotFill style={{ marginLeft: '8px', fontSize: '24px' }} />
              <Typography variant="body2">
              {t(`servodocs.RealTimeDataSync`)}
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

      <Container maxWidth="lg" sx={{background:colors.background}}>
        <Typography variant="h2" style={{ textAlign: "center", fontWeight: 'bold', color:theme==="dark"? colors.text : '#ED2427', margin: '24px 0' }}>
        {t(`servodocs.ServoDocsDMS`)}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={imageE} alt="ServoDocs" style={{ width: '100%' }} />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{background:colors.background}}>
        <Typography variant="h2" style={{background:colors.background, textAlign: "center", fontWeight: 'bold', color:theme === "dark" ? colors.text : '#ED2427', margin: '24px 0' }}>
        {t(`servodocs.TrustedByIndustryLeaders`)}
        </Typography>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background, padding: "60px" }}>
        <ImageList style={{ width: "100%", height: 450 }} cols={6} gap={15} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Container maxWidth="lg" style={{background:colors.background, padding: "0 10px", color:theme==="dark"? colors.text : "#27273a" }}>
        <Typography variant="h2" style={{color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong> {t(`servodocs.StreamlineDocumentManagement`)} </strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.DigitalLandscapeText`)} 
        </Typography>
        <Typography variant="h2" style={{ color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>{t(`servodocs.OverviewOfServoDocs`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.ServoDocsDescription`)} 
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.ServoDocsBenefits`)}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.IntegrationWithBusinessApps`)} 
        </Typography>

        <Typography variant="h2" style={{ color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>{t(`servodocs.BenefitsOfDMS`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.ForCompaniesOfAllSizes`)} 
        </Typography>
        <ul style={{ paddingLeft: '40px' }}>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.EnhancedEfficiency`)} </strong> {t(`servodocs.ServoDocsEfficiency`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.ImprovedCollaboration`)}</strong>{t(`servodocs.ImprovedCollaborationDescription`)} 
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.EnhancedOutput`)}</strong>  {t(`servodocs.EnhancedOutputDescription`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.EnhancedSecurity:`)}</strong> {t(`servodocs.EnhancedSecurityDescription`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong> {t(`servodocs.LowerCosts`)} </strong> {t(`servodocs.LowerCostsDescription`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.DisasterRecovery`)}</strong> {t(`servodocs.DisasterRecoveryDescription`)}
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" style={{ color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong> {t(`servodocs.AdvancedFeaturesOfDMS`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>{t(`servodocs.KeyFeatures`)}</strong>
        </Typography>
        <ul style={{ marginBottom: '16px', paddingLeft: '40px' }}>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.HighlyIntegrationFriendly`)}</strong> {t(`servodocs.ReadilyAvailableApis`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.MultiStorageSupportKey`)} </strong>  {t(`servodocs.MultiStorageSupportDescription`)} 
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.FastSearching`)}</strong>{t(`servodocs.SearchOnFileFolder`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.ParallelReadWrite`)}</strong>{t(`servodocs.ParallelReadWriteSupportKey`)}
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.SecurityAndEncryption`)} </strong>{t(`servodocs.DataSecurityPoliciesKey`)} 
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ marginBottom: '16px' }}>
              <strong>{t(`servodocs.IncreasedProductivity`)}</strong>{t(`servodocs.WorkAnywhereAndBoostProductivity`)} 
            </Typography>
          </li>
        </ul>

        <Typography variant="h2" style={{ color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>{t(`servodocs.BreakthroughResultsBFSIKey`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>{t(`servodocs.LoweredTATKey`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.AdvanceDMSFeature`)}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.AdvancedSearchAndIntegration`)}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong>{t(`servodocs.ComplianceSecurity`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.AdvanceDMSCompliance`)}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
          <strong> {t(`servodocs.ReducedManpower`)}</strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t('servodocs.AutomatesDocumentProcessesKey')} 
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.RobustAPIsIntegrations`)}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t(`servodocs.RealTimeDataSyncKey`)}
        </Typography>

        <Typography variant="h2" style={{ color:theme==="dark"? colors.text : "#27273A", fontWeight: 'bold', margin: '16px 0' }}>
          <strong>{t(`servodocs.GettingStartedServoDocs`)} </strong>
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px' }}>
        {t('servodocs.GettingStartedDescription')}
        </Typography>
      </Container>
    </main>
   </>
  );
};

export default Gsdocs;