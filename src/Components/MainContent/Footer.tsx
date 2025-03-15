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
  
  const Footer = () => {
    return (
      <Box sx={{ backgroundColor: "#1a1b41", backgroundImage:`url(${bg})`, color: "white", paddingTop: 4, mt: 4 }}>
        {/* Top Section */}
        <Box
          sx={{
            maxWidth: 1200,
            margin: "auto",
            padding: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          {/* Company Info */}
          <Box sx={{ maxWidth: 400 }}>
            <Typography variant="body1" sx={{ fontSize: "1rem", marginBottom: 2 }}>
              Servosys Solutions is a unit of EML Consultancy Services Private
              Limited, a company headquartered in New Delhi, India. We are one of
              the fastest-growing providers of software products and technology
              services for business process automation solutions that address
              challenges like process turn-around time, organizational
              productivity, regulatory compliance, business scalability,
              operational visibility, and excellence.
            </Typography>
            {/* Subscription Form */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Email"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  input: { color: "black" },
                }}
                fullWidth
              />
              <Button
                variant="contained"
                sx={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                Get Quote
              </Button>
            </Box>
          </Box>
  
          {/* Links Section */}
          <Grid container spacing={2} sx={{ marginTop: { xs: 3, md: 0 } }}>
            {/* Products */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6">
                PRODUCTS
              </Typography>
              {["ServoStreams", "ServoDocs", "ServoWebScan", "ServoImage"].map(
                (item) => (
                  <Link key={item} href={`/products/${item.toLowerCase()}`} color="inherit" underline="hover">
                    <Typography variant="body2">
                      → {item}
                    </Typography>
                  </Link>
                )
              )}
            </Grid>
  
            {/* Solutions */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6">
                SOLUTIONS
              </Typography>
              {[
                "ARC Solution",
                "Digital Lending",
                "Digital CASA",
                "Home Loans",
                "Mortgage Lending",
              ].map((item) => (
                <Link key={item} href={`/solutions/${item.toLowerCase().replace(/ /g, '-')}`} color="inherit" underline="hover">
                  <Typography variant="body2">
                    → {item}
                  </Typography>
                </Link>
              ))}
            </Grid>
  
            {/* Quick Links */}
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="h6">
                QUICK LINKS
              </Typography>
              {[
                "About Us",
                "Careers",
                "Leadership Team",
                "Blog",
                "Contact Us",
                "Awards & Recognition",
              ].map((item) => (
                <Link key={item} href={`/quick-links/${item.toLowerCase().replace(/ /g, '-')}`} color="inherit" underline="hover">
                  <Typography variant="body2">
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
            Pride Tower, 1st floor, Plot 12A, Sector 125, Noida, Uttar Pradesh 201313
          </Typography>
  
          {/* Contact */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginTop: { xs: 2, md: 0 } }}>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email /> sales@servosys.com
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email /> inquiry@servosys.com
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone /> +91-120-5112541
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
            © Copyright 2024, Servosys – All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    );
  };
  
  export default Footer;
  