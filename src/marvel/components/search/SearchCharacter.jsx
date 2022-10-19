import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
// import { Search } from '@mui/icons-material';

export const SearchCharacter = ({ onNewSearch }) => {
  const navigate = useNavigate();
  const { nameCharacter = '' } = useParams();
  const [inputValue, setinputVaue] = useState(nameCharacter);

  const onInputChange = (event) => {
    setinputVaue(event.target?.value);
  };

  const onSumbit = (event) => {
    event.preventDefault();
    if (inputValue === '') return navigate(`/`);
    if (inputValue.trim().length <= 1) return;
    setinputVaue('');
    onNewSearch(inputValue.trim());
  };

  return (
    <form onSubmit={onSumbit}>
      <Typography variant="subtitle2" sx={{ fontSize: '1.5em', paddingBottom: 1 }}>
        Search Marvel Character
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        {/* <Search sx={{ color: 'action.active' }} /> */}
        <TextField
          //label="Search Marvel character"
          variant="standard"
          fullWidth
          value={inputValue}
          onChange={onInputChange}
          sx={{}}
        />
      </Box>
    </form>
  );
};

SearchCharacter.propTypes = {
  onNewSearch: PropTypes.any,
};
