import { URL_API_MAPPING } from '../../helpers/urls';
import { get } from '../../helpers/api';

export const getCharacter = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}/${query}${URL_API_MAPPING['AUTH']}`;
  const data = await get(url);

  const character = {
    id: data[0].id,
    name: data[0].name,
    modified: data[0].modified,
    image: `${data[0].thumbnail.path}.${data[0].thumbnail.extension}`,
    description: data[0].description,
    comics: data[0].comics.available,
    events: data[0].events.available,
    series: data[0].series.available,
    stories: data[0].stories.available,
  };
  return character;
};
