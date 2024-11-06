"use client";
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
  keyframes,
  styled
} from '@mui/material';
import { 
  SiPython, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiGraphql, 
  SiMongodb, 
  SiPostgresql, 
  SiGit,
  SiTypescript 
} from 'react-icons/si';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
  50% { box-shadow: 0 0 20px rgba(0,0,0,0.2); }
  100% { box-shadow: 0 0 5px rgba(0,0,0,0.1); }
`;

const StyledPaper = styled(Paper)(({ theme, delay }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  '&:hover': {
    transform: 'scale(1.05)',
    animation: `${glowAnimation} 2s ease-in-out infinite`,
    backgroundColor: theme.palette.background.paper,
  }
}));

const tools = [
  { 
    name: 'Python', 
    icon: SiPython, 
    color: '#3776AB',
    description: 'Backend Development & Data Processing'
  },
  { 
    name: 'JavaScript', 
    icon: SiJavascript, 
    color: '#F7DF1E',
    description: 'Frontend & Full Stack Development'
  },
  { 
    name: 'Node.js', 
    icon: SiNodedotjs, 
    color: '#339933',
    description: 'Server-side JavaScript Runtime'
  },
  { 
    name: 'Express', 
    icon: SiExpress, 
    color: '#000000',
    description: 'Web Application Framework'
  },
  { 
    name: 'GraphQL', 
    icon: SiGraphql, 
    color: '#E10098',
    description: 'API Query Language'
  },
  { 
    name: 'MongoDB', 
    icon: SiMongodb, 
    color: '#47A248',
    description: 'NoSQL Database'
  },
  { 
    name: 'PostgreSQL', 
    icon: SiPostgresql, 
    color: '#4169E1',
    description: 'Relational Database'
  },
  { 
    name: 'Git', 
    icon: SiGit, 
    color: '#F05032',
    description: 'Version Control System'
  },
  { 
    name: 'TypeScript', 
    icon: SiTypescript, 
    color: '#3178C6',
    description: 'Typed JavaScript Development'
  }
];

const ToolsShowcase = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        background: `linear-gradient(to bottom right, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            Leveraging modern technologies to build scalable and efficient solutions
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={tool.name}>
              <StyledPaper
                elevation={3}
                delay={index * 0.2}
              >
                <Box
                  sx={{
                    fontSize: '4rem',
                    color: tool.color,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(10deg)'
                    }
                  }}
                >
                  <tool.icon />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' }
                  }}
                >
                  {tool.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    textAlign: 'center',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  {tool.description}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ToolsShowcase;