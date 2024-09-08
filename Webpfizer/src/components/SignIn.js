import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon } from './CustomIcons';

// Shared Card styling
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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card component="form" onSubmit={handleSubmit}>
          <Typography component="h1" variant="h4" gutterBottom>
            Sign In
          </Typography>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            required
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
          <Typography sx={{ textAlign: 'center', mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" variant="body2">
              Sign Up
            </Link>
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Google
            </Button>
            <Button variant="outlined" startIcon={<FacebookIcon />}>
              Facebook
            </Button>
          </Stack>
        </Card>
      </Box>
    </>
  );
}
