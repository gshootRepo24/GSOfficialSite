import { Container, Grid } from "@mui/material";
import SameSection from "../ReUsable/SameSection";
import CardComponent from "../ReUsable/CardComponent";
import { useTranslation } from "react-i18next";

const BankData = [
  { image: "https://www.servosys.com/wp-content/uploads/2023/07/12.webp" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/07/6-1.webp" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/06/2.png" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/06/1.png" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/06/5.png" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/07/111.webp" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/07/4.webp" },
  { image: "https://www.servosys.com/wp-content/uploads/2023/07/6.webp" },
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
