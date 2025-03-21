import SameSection from '../ReUsable/SameSection';
import CardComponent from '../ReUsable/CardComponent';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'; 

const CardData = [
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/paperless.webp',
    titleKey: 'hgs.Cards.card1.title',
    descriptionKey: 'hgs.Cards.card1.description', 
  },
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/centralised.webp',
    titleKey: 'hgs.Cards.card2.title',
    descriptionKey: 'hgs.Cards.card2.description',
  },
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/process-mapping.webp',
    titleKey: 'hgs.Cards.card3.title',
    descriptionKey: 'hgs.Cards.card3.description',
  },
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/workflow.webp',
    titleKey: 'hgs.Cards.card4.title',
    descriptionKey: 'hgs.Cards.card4.description',
  },
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/Integration.webp',
    titleKey: 'hgs.Cards.card5.title',
    descriptionKey: 'hgs.Cards.card5.description',
  },
  {
    image: 'https://www.servosys.com/wp-content/uploads/2023/06/tracking.webp',
    titleKey: 'hgs.Cards.card6.title',
    descriptionKey: 'hgs.Cards.card6.description',
  },
];

export default function DigitizeYourBusiness() {
  const { t } = useTranslation();

  return (
    <>
      <SameSection
        Title={t('hgs.title')}
        SubHeading={t('hgs.heading')}
        Description={t('hgs.description')}
      />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={1} justifyContent="center">
          {CardData.map((card, index) => (
            <Grid item key={index}>
              <CardComponent
                image={card.image}
                title={t(card.titleKey)} 
                description={t(card.descriptionKey)} 
                maxWidth={345}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}