// import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

// export default function CardComponent({image,title,maxWidth,description}:any) {
//   return (
//     <Box sx={{ maxWidth: {maxWidth},  textAlign: "center", p: 2 }}>
//        <Card sx={{borderRadius: 3, boxShadow: 3,padding:2}} >
//       <CardMedia
//         component="img"
//         height="100"
//         image={image}
//         alt={title}
//         sx={{ width: "100px", mx: "auto", mt: 2 }}
//       />
//       <CardContent >
//         <Typography variant="h6" fontWeight="bold" color="primary">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       {/* <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions> */}
//     </Card>
//     </Box>
   
//   )
// }
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

export default function CardComponent({ image, title, maxWidth, description }: any) {
  const {colors} = useContext(ThemeContext);
  return (
    <Box sx={{ maxWidth: { maxWidth }, textAlign: "center", p: 2,border:"2px solid red" }}>
      <Card sx={{ 
        borderRadius: 3, 
        boxShadow: 3, 
        padding: 2, 
        background:colors.background,
        color:colors.text,
        // height: 350, // Set a fixed height for the card
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}>
        <CardMedia
        component="img"
        height="100"
        image={image}
        alt={title}
        sx={{ width: "100px", mx: "auto", mt: 2 }}
      />
        <CardContent sx={{ flex: 1,mt:2 }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" >
            {description}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Box>
  );
}
