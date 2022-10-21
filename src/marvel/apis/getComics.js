import { URL_API_MAPPING } from '../../helpers/urls';
import { get } from '../../helpers/api';

export const getComics = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}/${query}/comics${URL_API_MAPPING['AUTH']}`;
  const data = await get(url);

  const comics = data.map((item) => ({
    id: item.id,
    title: item.title,
    modified: item.modified,
    image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
    description: data.description,
    price: item.prices[0].price,
    count: data.count,
    total: data.total,
  }));
  return comics;
};
