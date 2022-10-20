import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetComics } from '../../../hooks/useGetComics';
import { Tabs, Tab, Box, CircularProgress } from '@mui/material';
import { ComicsGrid } from './ComicsGrid';
import { StoriesGrid } from './StoriesGrid';
import { SeriesGrid } from './SeriesGrid';

export const CharacterDetail = () => {
  const { idCharacter } = useParams();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { comics, isLoading } = useGetComics(idCharacter);

  const message = comics.length == 0 ? 'No results found for' : 'Results for';
  console.log(message);
  console.log(comics, '===CharacterDetai');
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
            <Tab label="Series" />
            {/* <Tab label="Stories" /> */}
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {value === 0 && <ComicsGrid></ComicsGrid>}
          {value === 1 && <SeriesGrid></SeriesGrid>}
          {value === 2 && <StoriesGrid></StoriesGrid>}
        </Box>
      </Box>
    </>
  );
};
