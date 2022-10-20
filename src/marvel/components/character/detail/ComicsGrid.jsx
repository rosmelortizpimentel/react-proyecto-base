import { Typography } from '@mui/material';
import { comicShape } from '../../../prototypes';


const ComicsGrid = ({items}) => {
  console.log(items,"===ComicsGrid")
    return (
      <Typography>Hola desde comicsGrids</Typography>
    )
}

export default ComicsGrid;

ComicsGrid.propTypes = {
    items: comicShape,
}