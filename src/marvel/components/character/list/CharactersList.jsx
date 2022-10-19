import PropTypes from 'prop-types';
import { Badge, Box, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import { useGetCharacters } from '../../../hooks/useGetCharacters';
import { CharacterItem } from './CharacterItem';
import FilterIcon from '@mui/icons-material/Filter';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const CharactersList = ({ query }) => {
  const { characters, isLoading } = useGetCharacters(query);
  const queryStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    fontSize: '1.5em',
    textTransform: 'capitalize',
  };
  const message = characters.length == 0 ? 'No results found for' : 'Results for';

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ lexGrow: 1, paddingTop: 10, paddingBottom: 2 }}>
          <Badge badgeContent={characters.length} color="primary">
            {characters.length == 0 ? <SentimentVeryDissatisfiedIcon /> : <FilterIcon />}
          </Badge>
          <Typography variant="subtitle1">{message}</Typography>
          <Typography variant="h3" sx={queryStyles}>
            {query}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {characters.map((character) => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </Grid>
        </Box>
      </Box>
      <Divider sx={{ paddingTop: 10 }} />
    </>
  );
};

CharactersList.propTypes = {
  query: PropTypes.string,
};
