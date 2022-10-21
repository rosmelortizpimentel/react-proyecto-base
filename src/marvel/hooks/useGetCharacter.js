import { useState, useEffect } from 'react';
import { getCharacter } from '../apis/getCharacter';

export const useGetCharacter = (query) => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCharacter = async () => {
    const character = await getCharacter(query);
    setCharacter(character);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllCharacter();
  }, []);

  return {
    character: character,
    isLoading: isLoading,
  };
};
