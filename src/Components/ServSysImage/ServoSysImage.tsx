import Topbar from "../Topbar";
import Navbar from "../Navrbar";
import SameTab from "../ReUsable/SameTab";
import SameSection from "../ReUsable/SameSection";
import Footer from "../MainContent/Footer";
import { Box,  Typography } from "@mui/material";
import ImageTextCard from "../ReUsable/Image-Text";
import Grid from '@mui/material/Grid2';
import { Settings ,RingVolume,Textsms,BlurOn,StackedLineChart} from "@mui/icons-material";
import CustomCard from "../ReUsable/CustomCard";
import TrustedBy from "../MainContent/TrustedBy";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const CardData = [
  {
    icon:AccessAlarmIcon, 
    heading:'HIGHLY INTEGRATION-FRIENDLY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:Settings, 
    heading:'MULTI-STORAGE SUPPORT',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:RingVolume, 
    heading:'FAST SEARCHING & MIS',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:Textsms, 
    heading:'PARALLEL READ/WRITE',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:BlurOn, 
    heading:'SECURITY & ENCRYPTION',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
  {
    icon:StackedLineChart, 
    heading:'INCREASED PRODUCTIVITY',
    desc:'Readily available APIs allow integration with any 3rd party applications'
  },
]

const TextImage= [
  {
  image:'https://www.servosys.com/wp-content/uploads/2023/08/Lowered-TAT-720x400.jpg', 
  textContent:'Advance DMS automates workflows, streamlines document retrieval, ensures compliance, offers advanced search, and integrates with other systems, resulting in faster decision-making and reduced Turnaround Time (TAT).',
  position:'left',
  title:'Lowered TAT'
},
{
  image:'https://www.servosys.com/wp-content/uploads/2023/08/Compliance-and-Security-720x400.jpg', 
  textContent:'Ensures that sensitive financial documents are protected and adhere to regulatory requirements.Having a secure and compliant document repository can expedite audits and regulatory inspections. ',
  position:'right',
  title:'Compliance & Security'
},
{
  image:'https://www.servosys.com/wp-content/uploads/2023/08/Lessened-Manpower-720x400.jpg', 
  textContent:'Advanced DMS automates document processes, reducing the need for manual handling.Quick retrieval reduces time spent searching for documents.',
  position:'left',
  title:'Lessened Manpower'
},
{
  image:'https://www.servosys.com/wp-content/uploads/2023/08/Integration-Friendly-1-720x400.jpg', 
  textContent:'Advanced DMS offers robust APIs for seamless integration with existing software.Supports real-time data synchronization for up-to-the-minute document updates and collaboration.',
  position:'right',
  title:'Integration Friendly'
}

]

export default function ServoSysDoc() {
  
  // var stackTrace = Error().stack;
  // console.log(stackTrace); // if console.log is available
  console.log(ServoSysDoc)
  // console.trace();
  
  return (
    <>
      <Topbar />
      <Navbar />
      <SameTab
      float='right'
        heading="GSDocs"
        description="With the ongoing process of Digitization, reduce your paper-based work and expect to have access to their important documents from anywhere and at any time."
        image="https://www.servosys.com/wp-content/uploads/2023/07/servo-banner-3.jpg"
      />
      <SameSection
        Title="Overview Of GSDocs"
        Description="GSDocs® is a leading-edge Document Management System (DMS) product that has the capability to archive, retrieve, and index documents, and provide fast search, independent of the size of the document repository. This product has been designed for delivering high performance and integrates with external systems through APIs."
      />
      <ImageTextCard
      position='left'
        image="https://www.servosys.com/wp-content/uploads/2023/08/ServoDocs.png"
        textContent="GSDocs® is useful for long-term archive-retrieve use cases as well as short-term transactional use cases. It helps transform digitized paper documents and electronic files into valuable knowledge assets for organizations that need to deal with unstructured documents for conducting business, as the system allows authorized access to the archived documents. This product also helps users maintain versions of the documents uploaded into the system.
        Business applications like Lending Management System (LMS), Core Banking System (CBS), Customer Relationship Management (CRM), Customer On-boarding, Core Insurance, ERP, etc can be integrated with GSDocsTM through APIs."
      />

      <SameSection Title='Advanced Features and Capabilities of GSDocs' />
      <Box sx={{ m: 2, mt:4, display:'flex', justifyContent:'center', gap:1, maxWidth:'80%', margin:'auto' }}>
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
      <Box textAlign='center' mt={4}>
        <Typography color="red" variant="h3">Breakthrough results delivered across BFSI</Typography>
        {TextImage.map((item)=>(
          <ImageTextCard
          image={item.image}
          textContent={item.textContent}
          position={item.position}
          title={item.title}
      />
        ))}
      </Box>


      <TrustedBy/>
      <Footer />
    </>
  );
}
