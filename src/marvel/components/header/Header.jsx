import { Logout } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate('/auth/login', { replace: true });
  };
  return (
    <>
      <Grid item xs={12} sm={6} textAlign="right" alignContent="center" padding={1}>
        <Button variant="contained" sx={{ backgroundColor: 'secondary.main' }} onClick={onLogout}>
          <Logout />
          <Typography sx={{ ml: 1 }}>Logout</Typography>
        </Button>
      </Grid>
    </>
  );
};
