import { URL_API_MAPPING } from '../../helpers/urls';

export const getCharacters = async (query) => {
  const url = `${URL_API_MAPPING['CHARACTERS_URL']}${URL_API_MAPPING['AUTH']}&nameStartsWith=${query}&orderBy=-modified&limit=100`;
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  const resp = await fetch(url, {
    method: 'GET',
    headers,
  });

  const { data } = await resp.json();
  const characters = data.results.map((character) => ({
    id: character.id,
    name: character.name,
    modified: character.modified,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    description: character.description,
    comics: character.comics.available,
    events: character.events.available,
    series: character.series.available,
    stories: character.stories.available,
    count: data.count,
    total: data.total,
  }));
  return characters;
};
