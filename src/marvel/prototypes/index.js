import { PropTypes } from 'prop-types';

export const comicShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  modified: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  count: PropTypes.string,
  total: PropTypes.string,
});
