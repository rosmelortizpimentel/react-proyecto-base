import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetseries } from '../../../hooks/useGetSeries';

export const SeriesGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  }));

  const { idCharacter } = useParams();
  const { series, isLoading } = useGetseries(idCharacter);

  const message = series.length === 0 ? 'No results found' : '';
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box>
      {message}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container xs={12} spacing={2} justifyContent="center">
          {series?.map((per) => (
            <Grid item xs={12} sm={4} md={3} xl={2} key={per.id} sx={{ minWidth: 200 }}>
              <Item>
                <img
                  style={{
                    width: 180,
                    height: 200,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                  src={per.image}
                />
                <Typography variant="body2" textAlign="center">
                  {per.title}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" fontWeight="bold" color="primary">
                    {per.startYear == per.endYear
                      ? per.startYear
                      : per.startYear + ' - ' + per.endYear}
                  </Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};
