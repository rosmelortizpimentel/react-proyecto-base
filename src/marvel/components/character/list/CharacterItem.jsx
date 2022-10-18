import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { Box } from '@mui/system';

export const CharacterItem = ({ name, image, id }) => {
  const navigate = useNavigate();
  const onNavigateDetail = (id) => {
    navigate('/details/' + id, { replace: true });
  };

  const nameStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <Grid item xs={4} textAlign="center">
      <Card sx={{ maxWidth: 345, padding: 2 }} onClick={() => onNavigateDetail(id)}>
        <CardActionArea>
          <CardMedia component="img" height="150" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" sx={nameStyles}>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
