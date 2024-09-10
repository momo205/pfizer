import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as ScrollLink, Element } from 'react-scroll';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

function Home() {
  const [showSignIn, setShowSignIn] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Handlers to toggle showing SignIn or SignUp component
  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', to: 'home-section' },
    { text: 'Our Product', to: 'product-section' },
    { text: 'Contact Us', to: 'contact-section' },
    { text: 'Who Are We', to: 'who-section' },
    // Add more items as needed
  ];

  return (
    <Container sx={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#f9f9f9', padding: '0' }}>
      {/* Navigation Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  sx={{ height: '60px', justifyContent: 'center', backgroundColor: '#1976d2' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              Maternal Health Monitor
            </Typography>
            {/* Sign In and Sign Up Buttons */}
            <Button color="inherit" sx={{ mr: 2 }} onClick={handleSignUpClick}>
              Sign Up
            </Button>
            <Button color="inherit" sx={{ mr: 2 }} onClick={handleSignInClick}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={() => setDrawerOpen(false)}>
                <ScrollLink to={item.to} smooth={true} duration={500} offset={-60}>
                  <ListItemText primary={item.text} />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Section */}
      <Element name="home-section">
        <Box sx={{ mt: 5 }}>
          {/* Conditional Rendering for SignIn or SignUp Component */}
          {showSignIn ? (
            <SignIn />
          ) : showSignUp ? (
            <SignUp />
          ) : (
            <>
              {/* Padded Image Section */}
              <Grid container justifyContent="center">
                <Paper
                  elevation={1}
                  sx={{ padding: '20px', maxWidth: '100%', textAlign: 'center', paddingTop: '40px' }}
                >
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Maternal Health Monitor"
                    style={{ width: '100%', borderRadius: '10px' }}
                  />
                </Paper>
              </Grid>

              {/* Description Section */}
              <Box sx={{ mt: 5, textAlign: 'center', color: '#333' }}>
                <Typography variant="h4" gutterBottom>
                  About the Maternal Health Monitor
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
                  Our product is designed to help maternal mothers monitor the health of both the fetus and the mother.
                  With real-time data collected from advanced sensors, this product ensures that the health of both is
                  consistently monitored to provide a safer pregnancy experience.
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Element>

      {/* Mission Statement Section */}
      <Element name="who-section">
        <Box sx={{ mt: 8, textAlign: 'center', color: '#333' }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
            Our mission is to revolutionize maternal healthcare by providing innovative solutions that ensure the well-being of both mothers and their babies. We are dedicated to enhancing the pregnancy experience through cutting-edge technology and compassionate care.
          </Typography>
        </Box>
      </Element>

      {/* Contact Us Section */}
      <Element name="contact-section">
        <Box sx={{ mt: 8, textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box component="form" sx={{ maxWidth: '600px', margin: '0 auto' }}>
            <TextField fullWidth label="Your Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="Your Email" variant="outlined" margin="normal" />
            <TextField fullWidth label="Your Message" variant="outlined" margin="normal" multiline rows={4} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>
        </Box>
      </Element>

      {/* Footer */}
      <Box sx={{ mt: 8, textAlign: 'center', padding: '10px', backgroundColor: '#e0e0e0', borderRadius: '8px' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Test Company. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;