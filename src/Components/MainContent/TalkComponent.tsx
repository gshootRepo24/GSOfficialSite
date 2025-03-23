import { useState } from 'react';
import SameSection from '../ReUsable/SameSection';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function TalkComponent() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <>
      <SameSection 
        Title={t('Talk.title')}
        SubHeading={t('Talk.heading')}
        Description={t('Talk.description')}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: { xs: 2, md: 4 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 800,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: 3,
            borderRadius: 2,
            backgroundColor: "white",
          }}
        >
          {/* Left Side: Contact Information */}
          <Box
            sx={{
              flex: 1,
              padding: 2,
              borderRight: { md: "1px solid #ddd" },
              textAlign: { xs: "center", md: "left" },
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {t('Talk.form.contactDetails')}
            </Typography>
            <Typography variant="body1" mt={1}>
              📍 {t('contact.address')}
            </Typography>
            <Typography variant="body1" mt={1}>
              📞 {t('contact.phone')}
            </Typography>
            <Typography variant="body1" mt={1}>
              ✉️ {t('contact.email_sales')}
            </Typography>
          </Box>

          {/* Right Side: Form */}
          <Box sx={{ flex: 1, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              {t('Talk.form.message')}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={t('Talk.form.name')}
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                aria-label="Enter your name"
              />
              <TextField
                fullWidth
                label={t('Talk.form.email')}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                aria-label="Enter your email address"
              />
              <TextField
                fullWidth
                label={t('Talk.form.phone')}
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                aria-label="Enter your contact number"
              />
              <TextField
                fullWidth
                label={t('Talk.form.message')}
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
                aria-label="Enter your message"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  width: "100%",
                  padding: 1.5,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                aria-label="Submit the form"
              >
                {t('Talk.form.submit')}
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
