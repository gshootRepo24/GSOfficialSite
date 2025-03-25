import {  Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../ThemesProvider/ThemeProvider";

export default function BlogCard({ image, category, title, link }:any) {
  const {colors} = useContext(ThemeContext);
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2,background:colors.background,color:colors.text }}>
      {/* Blog Image */}
      <CardMedia component="img" height="180" image={image} alt={title} />

      {/* Blog Content */}
      <CardContent>
        <Typography variant="caption" color="textSecondary" fontWeight="bold">
          {category}
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Button 
          size="small" 
          sx={{ mt: 2, fontWeight: "bold", textTransform: "none" }} 
          href={link}
        >
          Read +
        </Button>
      </CardContent>
    </Card>
  );
}
