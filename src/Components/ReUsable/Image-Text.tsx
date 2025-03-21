import { Box, Typography } from '@mui/material';

const ImageTextCard = ({ image, textContent, position,title }: any) => {
  const isLeft = position === 'left';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        alignItems: 'center',
        textAlign:'left',
        justifyContent:'space-between',
        padding: 2,
        // border: '1px solid #ccc',
        // borderRadius: 2,
        // boxShadow: 1,
        m: 10,
      }}
    >
      <img
        src={image}
        alt="image"
        style={{
          width: '40%',
          height: 'auto',
          borderRadius: '8px',
          border: '1px solid #ccc',
          margin: isLeft ? '0 20px 0 0' : '0 0 0 20px',
        }}
      />
      <Box sx={{ flex: 1, maxWidth: '50%' }}>
        <Typography variant='h3' color='red'>{title} </Typography>
        <Typography variant="body1" sx={{lineBreak:'initial'}}>{textContent}</Typography>
      </Box>
    </Box>
  );
};

export default ImageTextCard;
