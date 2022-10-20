import { useParams } from 'react-router-dom';
import {useState} from 'react';
import { useGetComics } from '../../../hooks/useGetComics';
import {Tabs,Tab,Box, Grid,Paper,styled,Typography,CircularProgress} from '@mui/material'
import Moment from 'react-moment';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom:theme.spacing(2),
}));

export const CharacterDetail = () => {
  const { idCharacter } = useParams();
  const [value,setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { comics, isLoading } = useGetComics(idCharacter);
  const message = comics.length == 0 ? 'No results found for' : 'Results for';
  console.log(message);
  console.log(comics,"===CharacterDetai")
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
     <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="Comics" />
            <Tab label="Stories" />
            <Tab label="Events" />
          </Tabs>
        </Box>
        <Box sx={{padding:2}}>
          {value === 0 && (
            <Box>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={1}></Grid>  
                <Grid item container xs={10} spacing={4}>
                  {
                    comics.map(per => (
                      <Grid item xs={3} key={per.id}>
                        <Item >
                          <img 
                            style={{
                              width: 180,
                              height: 200,
                            }}                 
                            src={`${per.image}`}/>
                          <Typography>{per.title}</Typography>
                          <Box sx={{ flexGrow: 1 }}>
                           
                            <Moment format="DD/MM/YYYY">{per.modified}</Moment>
                            <Typography>{per.price}</Typography>
                            
                          </Box>
                        </Item>
                        
                      </Grid>
                    ))
                  }
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </Box>
          )}
          {value === 1 && (
            <Box>
              <Typography>The second tab</Typography>
            </Box>
          )}
          {value === 2 && (
            <Box>
              <Typography>The third tab</Typography>
            </Box>
          )}
        </Box>

      </Box>
      
    </>
  );
};
