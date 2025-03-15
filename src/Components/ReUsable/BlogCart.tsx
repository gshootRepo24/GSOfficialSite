import {  Typography, Card, CardMedia, CardContent, Button } from "@mui/material";

export default function BlogCard({ image, category, title, link }:any) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
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
