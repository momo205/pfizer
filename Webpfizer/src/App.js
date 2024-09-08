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
import SignIn from './components/SignIn';

function App() {
  const [showSignIn, setShowSignIn] = React.useState(false);

  // Handler to toggle showing SignIn component
  const handleSignInClick = () => {
    setShowSignIn(true); // Show the SignIn component when clicked
  };

  return (
    <Container>
      {/* Navigation Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ height: '100px', justifyContent: 'center' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
              Maternal Health Monitor
            </Typography>
            {/* Sign In and Login Buttons */}
            <Button color="inherit" sx={{ mr: 2 }} onClick={handleSignInClick}>
              Sign Up
            </Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ mt: 5 }}>
        {/* Conditional Rendering for SignIn Component */}
        {showSignIn ? (
          <SignIn />
        ) : (
          <>
            {/* Padded Image Section */}
            <Grid container justifyContent="center">
              <Paper
                elevation={3}
                sx={{ padding: '20px', maxWidth: '100%', textAlign: 'center', paddingTop: '80px' }}
              >
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Maternal Health Monitor"
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              </Paper>
            </Grid>

            {/* Description Section */}
            <Box sx={{ mt: 5, textAlign: 'center' }}>
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

      {/* Contact Us Section */}
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
    </Container>
  );
}

export default App;
