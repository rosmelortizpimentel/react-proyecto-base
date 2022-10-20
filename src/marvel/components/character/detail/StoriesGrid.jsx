import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { useGetStories } from '../../../hooks/useGetStories';

export const StoriesGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  }));

  const { idCharacter } = useParams();
  const { stories, isLoading } = useGetStories(idCharacter);
  useEffect(() => {}, []);

  const message = stories.length == 0 ? 'No results found for' : 'Results for';
  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box>
      {message}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item container xs={10} spacing={4}>
          {stories.map((per) => (
            <Grid item xs={3} key={per.id}>
              <Item>
                <img
                  style={{
                    width: 180,
                    height: 200,
                  }}
                  src={`${per.image}`}
                />
                <Typography>{per.title}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Moment format="DD/MM/YYYY">{per.modified}</Moment>
                  <Typography>{per.price}</Typography>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  );
};
