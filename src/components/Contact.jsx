"use client";
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  IconButton,
  Snackbar,
  Alert,
  styled,
  useTheme,
  alpha,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Description as ResumeIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const SocialButton = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2.5),
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: alpha(theme.palette.primary.main, 0.03),
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    '& .icon': {
      transform: 'scale(1.1)',
    }
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon className="icon" sx={{ fontSize: 30 }} />,
      url: 'https://github.com/ayendisimeon1',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon className="icon" sx={{ fontSize: 30 }} />,
      url: 'https://linkedin.com/in/simeon-ayendi',
      color: '#0077B5',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon className="icon" sx={{ fontSize: 30 }} />,
      url: 'https://twitter.com/dev_ayendi',
      color: '#1DA1F2',
    },
    {
      name: 'Resume',
      icon: <ResumeIcon className="icon" sx={{ fontSize: 30 }} />,
      url: 'https://drive.google.com/file/d/1CrxbajKbpk4Zf1mVaiqhCjrLzSdQr7rf/view',
      color: '#FF5722',
    },
  ];

  const contactInfo = [
    {
      icon: <MailIcon />,
      text: 'ayendisimeon3@gmail.com',
      label: 'Email',
    },
    {
      icon: <PhoneIcon />,
      text: '+234 90 7575 4477',
      label: 'Phone',
    },
    {
      icon: <LocationIcon />,
      text: 'Port Harcout, Rivers State',
      label: 'Location',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        py: 10,
        background: `linear-gradient(to bottom right, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.background.default, 1)})`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {info.label}
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {info.text}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={2}>
              {socialLinks.map((social) => (
                <Grid item xs={6} key={social.name}>
                  <SocialButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box sx={{ mr: 2, color: social.color, transition: 'all 0.3s ease' }}>
                      {social.icon}
                    </Box>
                    <Typography variant="body1" fontWeight={500}>
                      {social.name}
                    </Typography>
                  </SocialButton>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Send Me a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid> */}
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactSection;