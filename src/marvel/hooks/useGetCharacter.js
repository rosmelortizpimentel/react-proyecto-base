import { useState, useEffect } from 'react';
import { getCharacter } from '../apis/getCharacter';

export const useGetCharacter = (query) => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCharacters = async () => {
    const character = await getCharacter(query);
    setCharacter(character);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return {
    character: character,
    isLoading: isLoading,
  };
};
