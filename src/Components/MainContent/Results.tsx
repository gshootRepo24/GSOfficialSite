// import { Box, Typography, Grid } from "@mui/material";
// import SameSection from "../ReUsable/SameSection";
// import bg from '../../assets/Footer/footer-bg.jpg';

// export default function Results() {
//   return (
//     <>
//       {/* Section Title */}
//       <SameSection
//         Title="UNVEILING TANGIBLE RESULTS"
//         SubHeading="Servosys Empowering Numerous Banks and Financial Institutions Across the Industry"
//       />

//       {/* Stats Section with Background Image */}
//       <Box
//         sx={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: { xs: 4, md: 8 },
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         {/* Grid Layout for Stats */}
//         <Grid container spacing={4} justifyContent="center">
//           {/* First Row */}
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">100%</Typography>
//             <Typography variant="body1">Customer Delight with referenceability</Typography>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">38%</Typography>
//             <Typography variant="body1">YOY Consistently Profitable</Typography>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">0%</Typography>
//             <Typography variant="body1">Customer Attrition since Inception</Typography>
//           </Grid>

//           {/* Second Row */}
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">24%</Typography>
//             <Typography variant="body1">YOY Persistent Revenue Growth</Typography>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">In 1 day</Typography>
//             <Typography variant="body1">Managing Billions of transactions</Typography>
//           </Grid>

//           <Grid item xs={12} sm={4}>
//             <Typography variant="h3" fontWeight="bold">100%</Typography>
//             <Typography variant="body1">Compliance and Risk Management with Security</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// }

import { Box, Typography, Grid } from "@mui/material";
import SameSection from "../ReUsable/SameSection";
import bg from '../../assets/Footer/footer-bg.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

export default function Results() {
  const { t } = useTranslation(); // Initialize translation hook
  const {colors} = useContext(ThemeContext);

  return (
    <>
      {/* Section Title */}
      <Box sx={{background:colors.background}}>
      <SameSection
        Title={t('Result.title')} // Use translation for title
        SubHeading={t('Result.heading')} // Use translation for subheading
      />
      </Box>

      {/* Stats Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: 4, md: 8 },
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Grid Layout for Stats */}
        <Grid container spacing={4} justifyContent="center">
          {/* First Row */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">100%</Typography>
            <Typography variant="body1">{t('Result.result.1')}</Typography> {/* Use translation for result 1 */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">38%</Typography>
            <Typography variant="body1">{t('Result.result.2')}</Typography> {/* Use translation for result 2 */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">0%</Typography>
            <Typography variant="body1">{t('Result.result.3')}</Typography> {/* Use translation for result 3 */}
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">24%</Typography>
            <Typography variant="body1">{t('Result.result.4')}</Typography> {/* Use translation for result 4 */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">In 1 day</Typography>
            <Typography variant="body1">{t('Result.result.5')}</Typography> {/* Use translation for result 5 */}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" fontWeight="bold">100%</Typography>
            <Typography variant="body1">{t('Result.result.6')}</Typography> {/* Use translation for result 6 */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
