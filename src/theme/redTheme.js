import { createTheme } from '@mui/material';

export const redTheme = createTheme({
  palette: {
    primary: {
      main: '#e62429',
    },
    secondary: {
      main: '#202020',
    },
  },
  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#fff',
      letterSpacing: '0.5px',
      textTransform: 'capitalize',
    },
  },
});
