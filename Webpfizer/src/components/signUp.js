import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  maxWidth: '400px',
  width: '100%',
  margin: 'auto',
}));

export default function SignUp() {
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const validateInputs = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateInputs();
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card component="form" onSubmit={handleSubmit}>
        <Typography component="h1" variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          id="name"
          label="Full Name"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          error={emailError}
          helperText={emailError ? 'Invalid email' : ''}
          required
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          error={passwordError}
          helperText={passwordError ? 'Password must be at least 6 characters' : ''}
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I want to receive updates via email."
        />
        <Button type="submit" fullWidth variant="contained">
          Sign Up
        </Button>
        <Typography sx={{ textAlign: 'center', mt: 2 }}>
          Already have an account?{' '}
          <Link href="#" variant="body2">
            Sign In
          </Link>
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="outlined">Google</Button>
          <Button variant="outlined">Facebook</Button>
        </Stack>
      </Card>
    </Box>
  );
}