import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    IconButton,
  } from "@mui/material";
  import { Email, LocationOn, Phone } from "@mui/icons-material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import bg from '../../assets/Footer/footer-bg.jpg';
  import { useTranslation } from 'react-i18next';
  
  const Footer = () => {
    const { t } = useTranslation();
  
    return (
      <Box sx={{ backgroundColor: "#1a1b41", backgroundImage:`url(${bg})`, color: "white", paddingTop: 4, mt: 4 }}>
        {/* Top Section */}
        <Box
          sx={{
            // maxWidth: 1200,
            margin: "auto",
            padding: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            // justifyContent: "space-between",
            gap:4 
          }}
        >
          {/* Company Info */}
          <Box sx={{ maxWidth: 400 }}>
            <Typography variant="body1" sx={{ fontSize: "1rem", marginBottom: 2 }}>
              {t("company_info.description")}
            </Typography>
            {/* Subscription Form */}
            <Box
  sx={{
    display: "flex",
    // bgcolor: "red",
    alignItems: "center",
    gap: 1,
  }}
>
  <TextField
    variant="filled"
    placeholder="Email"
    sx={{
      height: "40px", 
      backgroundColor: "white",
      borderRadius: "5px",
      fontSize: "0.8rem",
      input: {
        color: "black",
        padding: "10px", 
      },
      "& .MuiFilledInput-root": {
        padding: 0, 
        height: "40px", 
        borderRadius: "5px",
      },
    }}
  />
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#0d6efd",
      height: "40px",
      fontSize: "0.8rem",
      color: "white",
      padding: "0 16px", 
      borderRadius: "5px", 
      textTransform: "none", 
    }}
  >
    Get Quote
  </Button>
</Box>

          </Box>
  
          {/* Links Section */}
            <Grid container spacing={2} justifyContent={'flex-end'} alignContent={'flex-start'}>
            {/* Products */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" align="left">
              {t("footer.products.title")}
              </Typography>
              {["GsStreams", "GsDocs", "GsWebScan", "GsImage"].map(
              (item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} color="inherit" underline="hover">
                <Typography variant="body2" align="left">
                  → {item}
                </Typography>
                </Link>
              )
              )}
            </Grid>
        
            {/* Solutions */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" align="left">
              {t("footer.solutions.title")}
              </Typography>
              {[
              "ARC Solution",
              "Digital Lending",
              "Digital CASA",
              "Home Loans",
              "Mortgage Lending",
              ].map((item) => (
              <Link key={item} href={`/solutions/${item.toLowerCase().replace(/\s+/g, '')}`} color="inherit" underline="hover">
                <Typography variant="body2" align="left">
                → {item}
                </Typography>
              </Link>
              ))}
            </Grid>
        
            {/* Quick Links */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6" align="left">
              {t("footer.quick_links.title")}
              </Typography>
              {[
              "About Us",
              "Careers",
              "Leadership Team",
              "Blog",
              "Contact Us",
              "Awards & Recognition",
              ].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '')}`} color="inherit" underline="hover">
                <Typography variant="body2" align="left">
                → {item}
                </Typography>
              </Link>
              ))}
            </Grid>
            </Grid>
        </Box>
  
        {/* Middle Section */}
        <Box
          sx={{
            backgroundColor: "#0f1b2d",
            padding: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Address */}
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn />
            {t("contact.address")}
          </Typography>
  
          {/* Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: { xs: 2, md: 0 } }}>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email /> {t("contact.email_sales")}
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email /> {t("contact.email_inquiry")}
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone /> {t("contact.phone")}
            </Typography>
          </Box>
        </Box>
  
        {/* Bottom Section */}
        <Box
          sx={{
            backgroundColor: "#08192d",
            padding: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
            {/* Social Icons */}
            <IconButton sx={{ color: "white" }} component="a" href="https://www.facebook.com/ServosysSolutions" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} component="a" href="https://www.instagram.com/servosyssolutions" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} component="a" href="https://twitter.com/Servosys" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} component="a" href="https://www.linkedin.com/company/servosys-solutions" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Box>
          
          {/* Policies */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, fontSize: "14px", mb: 1 }}>
            <Link href="/terms-of-use" color="inherit" underline="hover">Terms of Use</Link>
            <Link href="/privacy-policy" color="inherit" underline="hover">Privacy Policy</Link>
            <Link href="/cookies-policy" color="inherit" underline="hover">Cookies Policy</Link>
          </Box>
  
          {/* Copyright */}
          <Typography variant="body2">
            {t("footer.copyright")}
          </Typography>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  