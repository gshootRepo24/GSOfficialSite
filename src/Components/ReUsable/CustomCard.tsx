import { Card, CardContent, CardMedia, Icon, Typography } from "@mui/material";


const CustomCard = ({ image, heading, desc }:any) => {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 2, textAlign: "center", p: 2 }}>
      <CardMedia
        component='img'
        image={image}
        alt="icon"
        sx={{ width: 50, height: 50, margin: "10px auto" }}
      />
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
