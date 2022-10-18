import md5 from 'md5';

const { REACT_APP_MARVEL_PUBLIC_KEY, REACT_APP_MARVEL_PRIVATE_KEY } = process.env;
const BASE_URL = 'https://gateway.marvel.com/v1/public';
const CHARACTERS_URL = `${BASE_URL}/characters`;
const PATH_COMICS = '/comics';
const PATH_EVENTS = '/events';
const PATH_STORIES = '/stories';
const PATH_SERIES = '/series';
const DATE = new Date().toUTCString();
const HASH = md5(DATE + REACT_APP_MARVEL_PRIVATE_KEY + REACT_APP_MARVEL_PUBLIC_KEY);
const AUTH = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${HASH}&ts=${DATE}`;

export const URL_API_MAPPING = {
  ['CHARACTERS_URL']: CHARACTERS_URL,
  ['AUTH']: AUTH,
  ['PATH_COMICS']: PATH_COMICS,
  ['PATH_EVENTS']: PATH_EVENTS,
  ['PATH_STORIES']: PATH_STORIES,
  ['PATH_SERIES']: PATH_SERIES,
};
