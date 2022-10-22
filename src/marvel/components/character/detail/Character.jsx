import { Box, CircularProgress, Grid, Typography, ButtonBase, Paper, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetCharacter } from '../../../hooks/useGetCharacter';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const Character = () => {
  const { idCharacter } = useParams();
  const { character, isLoading } = useGetCharacter(idCharacter);
  const message = character.total == 0 ? 'No results found' : '';
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box>
      {message}
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="character" src={character.image} sx={{ borderRadius: '50%' }} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="subtitle1" fontWeight="bold">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight="bold">
                  ID: {character.id}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="justify">
                  {character.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
