import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import { redTheme } from './redTheme';
// import { defaultTheme } from './defaultTheme';

export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={redTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.any,
};
