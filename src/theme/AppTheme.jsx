import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import { defaultTheme } from './defaultTheme';

export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.any,
};
