"use client";
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  IconButton,
  Button,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled,
  alpha,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  BusinessCenter as BusinessIcon,
  Code as CodeIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  transition: 'transform 0.3s ease-in-out',
});

const ExperienceCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleY(0)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover::before': {
    transform: 'scaleY(1)',
  },
}));

const projects = [
  {
    id: 1,
    title: 'KwikBy',
    description: 'Kwikby is a cutting-edge CRM platform powered by the WhatsApp Business API. ',
    image: '/aaxa.png',
    technologies: ['Nextjs', 'Node.js', 'MongoDB', 'GraphQL', 'Material UI'],
    liveUrl: 'https://kwikbuy.vercel.app',
    github: 'https://github.com/AyendiSimeon1/kwikbuy',
    metrics: [
      'Increased conversion rate by 25%',
      'Reduced loading time by 40%',
      'Implemented ElasticSearch for faster product search'
    ]
  },
  {
    id: 2,
    title: 'Inventory Manager',
    description: 'Developed a interory dashboard for business.',
    image: '/db.png',
    technologies: ['TypeScript', 'NextJs', 'MongoDB', 'Express'],
    liveUrl: 'https://https://glory-store.vercel.app/',
    
    github: 'https://github.com/AyendiSimeon1/receipt-maker-frontend',
    metrics: [
      
    ]
  },
  {
    id: 3,
    title: 'MyTenant',
    description: 'A platform to help landlord manage tenants.',
    image: '/api/placeholder/800/400',
    technologies: ['NodeJs', 'NextJs', 'Tailwind'],
    liveUrl: 'https://my-tenant-ayendisimeon1s-projects.vercel.app',
    github: 'https://github.com/AyendiSimeon1/MyTenant',
    metrics: [
      
    ]
  }
];

const experiences = [
  {
    company: 'Powerfull.',
    role: 'Junior Full Stack Engineer',
    period: '2024',
    description: 'Built full stack applications to challenges in the power sector',
    achievements: [
      
    ],
    technologies: ['React', 'Node.js', 'AWS', 'NodeJs']
  },
  {
    company: 'ZaZa Labs',
    role: 'Full Stack Developer',
    period: '2023-2024',
    description: 'Internship',
    achievements: [
      
    ],
    technologies: ['NextJs', 'Python', 'PostgreSQL', 'Docker']
  }
];

const ProjectsAndExperience = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Projects & Experience
        </Typography>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{ mb: 6 }}
          TabIndicatorProps={{
            sx: { height: 3, borderRadius: '3px' }
          }}
        >
          <Tab 
            icon={<CodeIcon />} 
            label="Projects" 
            iconPosition="start"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          />
          <Tab 
            icon={<BusinessIcon />} 
            label="Experience" 
            iconPosition="start"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          />
        </Tabs>

        <Box sx={{ mt: 4 }}>
          {tabValue === 0 ? (
            <Grid container spacing={4}>
              {projects.map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <StyledCard>
                    <StyledCardMedia
                      image={project.image}
                      title={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom fontWeight={600}>
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip 
                            key={tech} 
                            label={tech} 
                            size="small"
                            sx={{ 
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              color: 'primary.main'
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Button
                          variant="contained"
                          onClick={() => handleProjectClick(project)}
                          sx={{ textTransform: 'none' }}
                        >
                          View Details
                        </Button>
                        <Box>
                          <IconButton 
                            href={project.github}
                            target="_blank"
                            size="small"
                          >
                            <GitHubIcon />
                          </IconButton>
                          <IconButton 
                            href={project.liveUrl}
                            target="_blank"
                            size="small"
                          >
                            <LaunchIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container spacing={4}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  <ExperienceCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box>
                          <Typography variant="h5" fontWeight={600}>
                            {exp.role}
                          </Typography>
                          <Typography variant="h6" color="primary">
                            {exp.company}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle1" color="text.secondary">
                          {exp.period}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {exp.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography 
                            key={i} 
                            variant="body2" 
                            sx={{ 
                              mb: 1,
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '"•"',
                                color: 'primary.main',
                                mr: 1,
                                fontWeight: 'bold'
                              }
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech) => (
                          <Chip 
                            key={tech} 
                            label={tech} 
                            size="small"
                            sx={{ 
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              color: 'primary.main'
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </ExperienceCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={() => setDialogOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                <Box sx={{ mb: 3 }}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    style={{ width: '100%', borderRadius: theme.shape.borderRadius }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  Project Impact
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {selectedProject.metrics.map((metric, index) => (
                    <Typography 
                      key={index}
                      variant="body1"
                      sx={{ 
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        '&:before': {
                          content: '"•"',
                          color: 'primary.main',
                          mr: 1,
                          fontWeight: 'bold'
                        }
                      }}
                    >
                      {metric}
                    </Typography>
                  ))}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button 
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  View Code
                </Button>
                <Button 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  variant="contained"
                  startIcon={<LaunchIcon />}
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProjectsAndExperience;