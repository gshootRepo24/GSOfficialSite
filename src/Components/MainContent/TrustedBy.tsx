import { Container, Grid } from "@mui/material";
import SameSection from "../ReUsable/SameSection";
import CardComponent from "../ReUsable/CardComponent";
import { useTranslation } from "react-i18next";
import AxisBank from "../../assets/Banks/AxisBank.png";
import Avanse from "../../assets/Banks/Avanse.png";
import ABCBank from "../../assets/Banks/ABCBank.png";
import Aye from "../../assets/Banks/Aye.png";
import icici from "../../assets/Banks/icici.png";
import LandT from "../../assets/Banks/L&TBank.png";
import KVBank from "../../assets/Banks/KVBank.png";
import Fino from "../../assets/Banks/Fino.png";
const BankData = [
  { image: AxisBank },
  { image: Avanse},
  { image: ABCBank },
  { image: Aye },
  { image: icici },
  { image: LandT },
  { image: KVBank },
  { image: Fino },
];

export default function TrustedBy() {
  const { t } = useTranslation();
  return (
    <>
      <SameSection
        Title={t('​TRUSTEDBY.title')} 
        SubHeading={t('​TRUSTEDBY.heading')}
        Description={t('​TRUSTEDBY.description')}
      />
      <Container sx={{ mt: 4, width:'100%' }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          // maxWidth="80%"
        >
          {BankData.map((card, index) => (
            <Grid item key={index} xs={12}  sm={3} display="flex" justifyContent='center'>
              {/* <CardComponent image={card.image} maxWidth={400} /> */}
              <img src={card.image} alt={card.image} style={{maxWidth:"200px"}} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
