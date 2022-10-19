import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material';

export const CharacterItem = ({
  name,
  image,
  id,
  modified,
  comics,
  events,
  series,
  stories,
  description,
}) => {
  const navigate = useNavigate();
  const onNavigateDetail = (id) => {
    navigate('/details/' + id, { replace: true });
  };

  const nameStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
  };

  return (
    <Grid item xs={12} sm={4} md={3} xl={2} container justifyContent="center">
      <Card sx={{ width: 300, padding: 1 }} onClick={() => onNavigateDetail(id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            image={image}
            alt={name}
          />
          <CardContent>
            <Tooltip title={description} placement="top-start">
              <Typography variant="subtitle1" sx={nameStyles}>
                {name}
              </Typography>
            </Tooltip>

            <Moment format="DD/MM/YYYY">{modified}</Moment>
          </CardContent>
          <CardActions>
            <Box sx={{ flexGrow: 1 }}>
              {comics != 0 && (
                <Button size="small" component="span">
                  Comics ({comics}){' '}
                </Button>
              )}
              {stories != 0 && (
                <Button size="small" component="span">
                  Stories ({stories}){' '}
                </Button>
              )}
              {series != 0 && (
                <Button size="small" component="span">
                  Series ({series}){' '}
                </Button>
              )}
              {events != 0 && (
                <Button size="small" component="span">
                  Events ({events}){' '}
                </Button>
              )}
            </Box>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  comics: PropTypes.number.isRequired,
  events: PropTypes.number.isRequired,
  series: PropTypes.number.isRequired,
  stories: PropTypes.number.isRequired,
  modified: PropTypes.string,
  description: PropTypes.string,
};
