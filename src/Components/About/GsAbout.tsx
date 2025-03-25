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

const CardData = [
  {
    heading: "HIGHLY INTEGRATION-FRIENDLY",
    desc: "Readily available APIs allow integration with any 3rd party applications",
  },
  {
    heading: "Futuristic AI-Led Products Suite",
    desc: "ServoStreams® (BPMS), ServoDocs® (DMS), ServoWebScan® (Scanning Workflow) & ServoImage© (Imaging API toolkit). Our products are technologically superior and built for high performance.",
  },
  {
    heading: "Proven and Accepted Solutions",
    desc: "Mortgage Loan Solutions, CASA Solutions, Gold Loan Solutions, Retail Lending Solutions , Corporate Lending Solutions, Construction Finance Management & Monitoring Software Solution & Many more Lending Solutions",
  },
  {
    heading: "Industries Focus",
    desc: "Although our products are horizontal and find applications in different industries, the initial customer acquisition focus has been on the services industries including Banking, Financial Services, and high-tech companies.",
  },
  {
    heading: "Awards & Recognitions",
    desc: "The prestigious ‘India SME 100 Award’ for which 34,011 companies were nominated. Also, recognized for “Innovative Digital Lending” at Elets NBFC100 Tech Summit2023” New Delhi.",
  },
];

export default function GsAbout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <SameTab
        heading={"About Us"}
        description={
          "We are here to transform your business through innovative enterprise solutions"
        }
        image={AboutBg}
      />
      <SameSection
        Title={"Discover Growshoot Solutions"}
        Description={
          "Growshoot Solutions is a unit of EML Consultancy Services Private Limited, a company headquartered in New Delhi, India. We are one of the fastest-growing providers of software products and technology services for business process automation solutions that address challenges like process turn-around time, organizational productivity, service quality, regulatory compliance, business scalability, operational visibility and excellence."
        }
      />
      <ImageTextCard
        image={Vision}
        textContent="Our vision is to “ease the lives” of business users and individuals by providing state-of-the-art technology solutions at affordable prices."
        position="left"
        title="Our Vision"
      />
      <ImageTextCard
        image={Mission}
        textContent="Streamlining processes to unlock business values and setting benchmarks through technology innovations."
        position="right"
        title="Our Mission"
      />

      <SameSection Title={"Know Us More"} />

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
        textContent="The Company recognizes the importance of corporate social responsibility in promoting the welfare of the society in which the Company is working. The CSR Policy shall be guided by the Company’s corporate vision and aspirations to be the Company of Choice for Customers, Shareholders, Employees and Community. The primary purpose of the Company’s CSR philosophy is to make a meaningful and measurable impact in the lives of economically, physically and socially challenged communities of the country."
        position="right"
        title="Growshoot is committed to making a positive impact through CSR initiatives."
      />

      <Footer />
    </>
  );
}
