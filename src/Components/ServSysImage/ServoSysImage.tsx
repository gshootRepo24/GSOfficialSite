import Topbar from "../Topbar";
import Navbar from "../Navrbar";
import SameTab from "../ReUsable/SameTab";
import SameSection from "../ReUsable/SameSection";
import Footer from "../MainContent/Footer";
import { Box, Grid, Typography } from "@mui/material";
import ImageTextCard from "../ReUsable/Image-Text";

import { Message, Phone } from "@mui/icons-material";
import CustomCard from "../ReUsable/CustomCard";
import TrustedBy from "../MainContent/TrustedBy";

const CardData = [
  {
    icon:{Message}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    Icon:{Phone}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:{Message}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:{Message}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:{Message}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:{Message}, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
]

export default function ServoSysImage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <SameTab
      float='right'
        heading="ServoWebScan®"
        description="Allowing scanning of documents using any TWAIN compliant scanner through web Apps on mobile/desktop to efficaciously cater document digitization need of automation system."
        image="https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg"
      />
      <SameSection
        Title="Overview Of ServoDocs"
        Description="ServoDocs® is a leading-edge Document Management System (DMS) product that has the capability to archive, retrieve, and index documents, and provide fast search, independent of the size of the document repository. This product has been designed for delivering high performance and integrates with external systems through APIs."
      />
      <ImageTextCard
        image="https://www.servosys.com/wp-content/uploads/2023/08/ServoDocs.png"
        textContent="ServoDocs® is useful for long-term archive-retrieve use cases as well as short-term transactional use cases. It helps transform digitized paper documents and electronic files into valuable knowledge assets for organizations that need to deal with unstructured documents for conducting business, as the system allows authorized access to the archived documents. This product also helps users maintain versions of the documents uploaded into the system.
        Business applications like Lending Management System (LMS), Core Banking System (CBS), Customer Relationship Management (CRM), Customer On-boarding, Core Insurance, ERP, etc can be integrated with ServoDocsTM through APIs."
      />

      <SameSection Title='Advanced Features and Capabilities of ServoDocs' />
      <Box sx={{ m: 2, mt:4, display:'flex', justifyContent:'center', gap:1, maxWidth:'80%', margin:'auto' }}>
      <Grid container spacing={3}>
        {CardData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.heading}>
            <CustomCard
              image={Message}
              heading={item.heading}
              desc={item.desc}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
      <Box textAlign='center' mt={4}>
        <Typography color="red" variant="h2">Breakthrough results delivered across BFSI</Typography>
      </Box>


      <TrustedBy/>
      <Footer />
    </>
  );
}
