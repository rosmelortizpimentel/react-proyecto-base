import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { ComicsGrid } from './ComicsGrid';
import { StoriesGrid } from './StoriesGrid';
import { SeriesGrid } from './SeriesGrid';
import { Character } from './Character';

export const CharacterDetail = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
     <Box>
      <Character></Character>
    </Box>
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
