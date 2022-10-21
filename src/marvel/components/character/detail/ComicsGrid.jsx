import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetComics } from '../../../hooks/useGetComics';

export const ComicsGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  }));

  const { idCharacter } = useParams();
  const { comics, isLoading } = useGetComics(idCharacter);

  const message = comics.length == 0 ? 'No results found' : '';
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
        <Grid item xs={1}></Grid>
        <Grid item container xs={12} spacing={1}>
          {comics.map((per) => (
            <Grid item xs={12} sm={4} md={3} xl={2} key={per.id}>
              <Item>
                <img
                  style={{
                    width: 180,
                    height: 200,
                  }}
                  src={`${per.image}`}
                />
                <Typography gutterBottom variant="subtitle1">{per.title}</Typography>
                 <Typography variant="subtitle1">
                    {'$ '}
                    {per.price}
                  </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};
