import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardComponent({image,title,maxWidth,description}:any) {
  return (
    <Card sx={{ maxWidth: {maxWidth}, borderRadius: 3, boxShadow: 3, textAlign: "center", p: 2 }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt={title}
        sx={{ width: "100px", mx: "auto", mt: 2 }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
