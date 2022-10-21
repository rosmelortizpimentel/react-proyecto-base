//import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Typography,ButtonBase,Paper,styled} from '@mui/material';
import Moment from 'react-moment';

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
  console.log(character[0],"====character")
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
      maxWidth: 400,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="character" src={`${character[0].image}`} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
            {`${character[0].name}`}
            </Typography>
            <Moment format="DD/MM/YYYY">{`${character[0].modified}`}</Moment>
           
            <Typography variant="body2" color="text.secondary">
            ID: {`${character[0].id}`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Regresar
            </Typography>
          </Grid>
        </Grid>
         
      </Grid>
    </Grid>
  </Paper>
    </Box>
    
  );
};
