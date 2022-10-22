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

  const message = comics.length === 0 ? 'No results found' : '';
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box xs={12}>
      {message}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container xs={12} spacing={2} justifyContent="center">
          {comics.map((per) => (
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
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color={per.price === 0 ? 'secondary' : 'primary'}>
                  {per.price === 0 ? 'Priceless' : 'Price$' + per.price}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
