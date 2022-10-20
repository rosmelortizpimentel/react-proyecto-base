import { useState, useEffect } from 'react';
import { getStories } from '../apis/getStories';

export const useGetStories = (query) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllStories = async () => {
    const allStories = await getStories(query);
    setStories(allStories);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllStories();
  }, []);

  return {
    stories: stories,
    isLoading: isLoading,
  };
};
