
import SameSection from '../ReUsable/SameSection'
import CardComponent from '../ReUsable/CardComponent'
import { Container, Grid } from '@mui/material'


const CardData=[
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/paperless.webp',
        title:'Future-Ready',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    },
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/centralised.webp',
        title:'Ai Powered',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    },
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/process-mapping.webp',
        title:'Low Code',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    },
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/workflow.webp',
        title:'Micro Service',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    },
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/Integration.webp',
        title:'Ai And Automation',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    },
    {
        image:'https://www.servosys.com/wp-content/uploads/2023/06/tracking.webp',
        title:'End to End',
        description:'Stay ahead of the curve with the latest innovations and technologies backed by robust Research and Development, and Industry advancements.'
    }
]

export default function DigitizeYourBusiness() {
  return (
    <>
    <SameSection
    Title='How Does Servosys'
    SubHeading='Digitize Your Business?'
    Description='Ride the wave of technologies that are going to be epi-center of your futuristic journey to Digital Transformation'
    />
   <Container sx={{ mt: 4 }}>
      <Grid container spacing={1} justifyContent="center">
        {CardData.map((card, index) => (
          <Grid item key={index}>
            <CardComponent
              image={card.image}
              title={card.title}
              description={card.description}
              maxWidth={345}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}
