import { useState, useEffect } from 'react';
import { getCharacters } from '../apis/getCharacters';

export const useGetCharacters = (query) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCharacters = async () => {
    const allCharacters = await getCharacters(query);
    setCharacters(allCharacters);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return {
    characters: characters,
    isLoading: isLoading,
  };
};
