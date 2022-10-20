import { useState, useEffect } from 'react';
import { getComics } from '../apis/getComics';

export const useGetComics = (query) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllComics = async () => {
    const allComics = await getComics(query);
    setComics(allComics);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllComics();
  }, []);

  return {
    comics: comics,
    isLoading: isLoading,
  };
};
