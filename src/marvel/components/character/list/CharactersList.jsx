import PropTypes from 'prop-types';
import { Badge, Box, Grid, Typography } from '@mui/material';
import { useGetCharacters } from '../../../hooks/useGetCharacters';
import { CharacterItem } from './CharacterItem';
import FilterIcon from '@mui/icons-material/Filter';

export const CharactersList = ({ query }) => {
  const { characters, isLoading } = useGetCharacters(query);

  return (
    <>
      {isLoading && <Typography textAlign={'center'}>Loading ... </Typography>}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ paddingTop: 10, paddingBottom: 2 }}>
          <Badge badgeContent={characters.length} color="primary">
            <FilterIcon color="action" />
          </Badge>
          <Typography variant="h5">{query}</Typography>
          <Typography variant="p">{characters.length == 0 && 'No results found'}</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {characters.map((character) => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

CharactersList.propTypes = {
  query: PropTypes.string,
};
