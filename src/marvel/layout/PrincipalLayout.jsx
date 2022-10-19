import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const PrincipalLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      direction="column"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 3 }}>
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: '100%' },
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
        }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};

PrincipalLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};
