import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ImageTextCard = ({ image, textContent }:any) => {
  return (
    <Box
      sx={{
        display: 'flex',
       justifyContent:'space-between',
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 1,
        m:10    
      }}
    >
      <img
        src={image}
        alt={image}
        style={{
          width: '40%',
          height: 'auto',
          marginRight: '20px',
          borderRadius: '8px',
        }}
      />
      <Box sx={{ flex: 1, maxWidth:'40%', mt:5 }}>
        <Typography variant="body1">{textContent}</Typography>
      </Box>
    </Box>
  );
};

export default ImageTextCard;
