import SameSection from '../ReUsable/SameSection';
import CardComponent from '../ReUsable/CardComponent';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next'; 
import aipower from '../../Assets/MainImages/aipower.png';
import futureready from '../../Assets/MainImages/futureready.png';
import low from '../../Assets/MainImages/low.png';
import microservice from '../../Assets/MainImages/microservice.png';
import endtoend from '../../Assets/MainImages/endtoend.png';
import aiauto from '../../Assets/MainImages/aiauto.png';

const CardData = [
  {
    image: futureready,
    titleKey: 'hgs.Cards.card1.title',
    descriptionKey: 'hgs.Cards.card1.description', 
  },
  {
    image: aipower,
    titleKey: 'hgs.Cards.card2.title',
    descriptionKey: 'hgs.Cards.card2.description',
  },
  {
    image: low,
    titleKey: 'hgs.Cards.card3.title',
    descriptionKey: 'hgs.Cards.card3.description',
  },
  {
    image: microservice,
    titleKey: 'hgs.Cards.card4.title',
    descriptionKey: 'hgs.Cards.card4.description',
  },
  {
    image: endtoend,
    titleKey: 'hgs.Cards.card5.title',
    descriptionKey: 'hgs.Cards.card5.description',
  },
  {
    image: aiauto,
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
        <Grid container spacing={3} justifyContent="center">
          {CardData.map((card, index) => (
            <Grid
              item
              key={index}
              xs={12}     // Full width on small screens
              sm={6}      // Half width on small-medium screens
              md={4}      // One-third width on medium screens
              lg={3}      // One-fourth width on large screens
            >
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
