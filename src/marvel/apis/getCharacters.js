import { URL_API_MAPPING } from '../../helpers/urls';
import { get } from '../../helpers/api';

export const getCharacters = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}${URL_API_MAPPING['AUTH']}&nameStartsWith=${query}&orderBy=-modified&limit=100`;
  const data = await get(url);

  const characters = data.map((item) => ({
    id: item.id,
    name: item.name,
    modified: item.modified,
    image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
    description: item.description,
    comics: item.comics.available,
    events: item.events.available,
    series: item.series.available,
    stories: item.stories.available,
    count: data.count,
    total: data.total,
  }));
  return characters;
};
