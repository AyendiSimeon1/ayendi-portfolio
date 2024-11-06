"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['Projects', 'Skills', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item} component="a" href={`#${item.toLowerCase()}`}>
            <ListItemText 
              primary={item} 
              primaryTypographyProps={{
                fontSize: '1.2rem',
                fontWeight: 500
              }}
            />
          </ListItem>
        ))}
        <ListItem>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <IconButton
              href="https://github.com/ayendisimeon1"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="large"
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/simeon-ayendi"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              size="large"
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon sx={{ 
            display: 'flex', 
            mr: 1,
            color: 'blue',
            fontSize: { xs: 28, md: 32 } 
          }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'blue',
              textDecoration: 'none',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Full Stack Developer
          </Typography>

          {!isMobile ? (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href="https://github.com/ayendisimeon1"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/in/simeon-ayendi"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;