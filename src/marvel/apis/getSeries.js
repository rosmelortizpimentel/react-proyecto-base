import { get } from '../../helpers/api';
import { URL_API_MAPPING } from '../../helpers/urls';

export const getSeries = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}/${query}/series${URL_API_MAPPING['AUTH']}`;
  const data = await get(url);

  const series = data.map((item) => ({
    id: item.id,
    title: item.title,
    modified: item.modified,
    image: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
    description: item.description,
    count: data.count,
    total: data.total,
  }));
  return series;
};
