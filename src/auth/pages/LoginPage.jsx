import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useState } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('demo@demo.com');
  const [password, setPassword] = useState('*******');
  const [message, setMessage] = useState();

  const onNavigateHome = () => {
    user && password ? navigate('/', { replace: true }) : setMessage('Enter your credentials');
  };
  const onUserChange = (event) => {
    setUser(event.target?.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target?.value);
  };

  return (
    <AuthLayout title="Login">
      {message && <Alert severity="error">{message}</Alert>}
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@google.com"
              fullWidth
              value={user}
              onChange={onUserChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Passsword"
              fullWidth
              value={password}
              onChange={onPasswordChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onNavigateHome}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
