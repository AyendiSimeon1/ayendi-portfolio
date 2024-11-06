"use client";
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  keyframes,
  styled
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-out;
`;

const AnimatedTypography = styled(Typography)`
  animation: ${slideIn} 0.8s ease-out;
`;

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <AnimatedTypography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              letterSpacing: -1,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Ayendi Simeon
          </AnimatedTypography>

          <AnimatedBox>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                fontWeight: 600,
                mb: 2,
                maxWidth: '800px'
              }}
            >
              Transforming Ideas into
              <Box component="span" sx={{ color: 'primary.main' }}> High-Impact </Box>
              Solutions
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: '600px',
                mb: 4
              }}
            >
              Full Stack Developer specializing in scalable applications that drive business growth
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<RocketLaunchIcon />}
                sx={{
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  borderRadius: 2
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  borderRadius: 2
                }}
              >
                Contact Me
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={4}
              sx={{
                mt: 6,
                pt: 4,
                borderTop: 1,
                borderColor: 'divider'
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  3+ Years
                </Typography>
                <Typography color="text.secondary">
                  Industry Experience
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  5+ Projects
                </Typography>
                <Typography color="text.secondary">
                  Delivered Successfully
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  100%
                </Typography>
                <Typography color="text.secondary">
                  Client Satisfaction
                </Typography>
              </Box>
            </Stack>
          </AnimatedBox>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;