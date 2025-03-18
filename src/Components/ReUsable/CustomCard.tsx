import { Card, CardContent, Typography } from "@mui/material";

const CustomCard = ({ IconComponent, heading, desc }:any) => {
  console.log('custom')
  return (
    <Card sx={{ maxWidth: 350, boxShadow: 3, borderRadius: 2, textAlign: "center", justifyItems:'left', p: 2 }}>
      {IconComponent && (
        <IconComponent sx={{ fontSize: 100, margin: "10px auto", display: "block" }} />
      )}
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
