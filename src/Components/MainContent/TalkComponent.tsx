// import { useState } from 'react'
// import SameSection from '../ReUsable/SameSection'
// import { Box, Button, Paper, TextField, Typography } from '@mui/material'

// export default function TalkComponent() {

//   const [formData,setFormData]=useState({
//     name:'',
//     email:'',
//     contact:'',
//     message:''
//   });
//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // Reset the form after submission
//     setFormData({
//       name: "",
//       email: "",
//       contact: "",
//       message: "",
//     });
//   };

//   return (
//   <>
//     <SameSection 
//     Title='Unlock Future Today'
//     SubHeading='Let Our Expert Talk To You'
//     Description='Get in touch with industry’s experts and remove all the business constraints.'
//     />

   
//        <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: 2,
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           maxWidth: 800,
//           width: "100%",
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           padding: 3,
//           borderRadius: 2,
//           backgroundColor: "white",
//         }}
//       >
//         {/* Left Side: Contact Details */}
//         <Box
//           sx={{
//             flex: 1,
//             padding: 2,
//             borderRight: { md: "1px solid #ddd" },
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold">
//             Contact Details
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             📍 123 Main Street, City, Country
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             📞 +1 234 567 890
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             ✉️ contact@example.com
//           </Typography>
//         </Box>

//         {/* Right Side: Form */}
//         <Box sx={{ flex: 1, padding: 2 }}>
//           <Typography variant="h6" fontWeight="bold">
//             Get in Touch
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               type="tel"
//               value={formData.contact}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               variant="outlined"
//               margin="normal"
//               multiline
//               rows={4}
//               required
//             />
//             <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
//               Submit
//             </Button>
//           </form>
//         </Box>
//       </Paper>
//     </Box>
    
//   </>
//   )
// }

import { useState } from 'react';
import SameSection from '../ReUsable/SameSection';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function TalkComponent() {
  const { t } = useTranslation(); // Initialize translation hook

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
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
        Title={t('Talk.title')} // Use translation for title
        SubHeading={t('Talk.heading')} // Use translation for subheading
        Description={t('Talk.description')} // Use translation for description
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: 2,
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
          {/* Left Side: Contact Details */}
          <Box
            sx={{
              flex: 1,
              padding: 2,
              borderRight: { md: "1px solid #ddd" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {t('Talk.form.name')} {/* Use translation for "Contact Details" */}
            </Typography>
            <Typography variant="body1" mt={1}>
              📍 {t('contact.address')} {/* Use translation for address */}
            </Typography>
            <Typography variant="body1" mt={1}>
              📞 {t('contact.phone')} {/* Use translation for phone */}
            </Typography>
            <Typography variant="body1" mt={1}>
              ✉️ {t('contact.email_sales')} {/* Use translation for sales email */}
            </Typography>
          </Box>

          {/* Right Side: Form */}
          <Box sx={{ flex: 1, padding: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              {t('Talk.form.message')} {/* Use translation for "Get in Touch" */}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={t('Talk.form.name')} // Use translation for name label
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('Talk.form.email')} // Use translation for email label
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('Talk.form.phone')} // Use translation for phone label
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label={t('Talk.form.message')} // Use translation for message label
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
                {t(' Talk.form.submit')} {/* Use translation for submit button text */}
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </>
  );
}