import { Box, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: 5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Developed by
        </Typography>
        <Typography variant="subtitle1">
          <Link href="https://github.com/rosmelortizpimentel" underline="hover" target="_blank">
            Rosmel Ortiz
          </Link>
          {' | '}
          <Link href="https://github.com/juandiego85" underline="hover" target="_blank">
            Juan Diego Inga
          </Link>
          <br></br>
          <Link
            href="https://github.com/rosmelortizpimentel/react-proyecto-base"
            underline="hover"
            target="_blank"
            sx={{ fontWeight: 'bold' }}>
            source code
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
