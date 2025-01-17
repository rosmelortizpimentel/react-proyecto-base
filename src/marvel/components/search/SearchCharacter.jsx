import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Search } from '@mui/icons-material';

export const SearchCharacter = ({ onNewSearch }) => {
  const navigate = useNavigate();
  const { nameCharacter = '' } = useParams();
  const [inputValue, setinputVaue] = useState(nameCharacter);

  const onInputChange = (event) => {
    setinputVaue(event.target?.value);
  };

  const onSumbit = (event) => {
    event.preventDefault();
    if (inputValue === '') return navigate(`/marvel`);
    if (inputValue.trim().length <= 1) return;
    setinputVaue('');
    onNewSearch(inputValue.trim());
  };

  return (
    <form onSubmit={onSumbit}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.png"
          alt="Marvel"
          style={{ height: '60px' }}
        />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: '1.5em', paddingBottom: 1, textAlign: 'center' }}>
        Search Marvel Character
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Search sx={{ color: 'action.active' }} />
        <TextField
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
