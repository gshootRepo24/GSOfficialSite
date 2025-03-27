import { Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

const CustomCard = ({ IconComponent, heading, desc }:any) => {
  // console.log('custom')
  const {colors} = useContext(ThemeContext);
  return (
    <Card sx={{ background:colors.background,color:colors.text,width: 345, height: 300, boxShadow: 3, borderRadius: 2, textAlign: "center", p: 2, display: "flex", flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      '&:hover':{
      background:'linear-gradient(45deg,rgb(26, 77, 217),rgb(118, 10, 10))',
      scale:1.1,
    } }}>
      {IconComponent && (
      <IconComponent sx={{ fontSize: 100, margin: "10px auto", display: "block", }} />
      )}
      <CardContent>
      <Typography variant="h6" component="div" fontWeight="bold">
        {heading}
      </Typography>
      <Typography variant="body2" >
        {desc}
      </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
