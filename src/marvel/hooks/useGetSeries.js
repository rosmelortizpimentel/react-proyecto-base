import { useState, useEffect } from 'react';
import { getSeries } from '../apis/getSeries';

export const useGetseries = (query) => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllComics = async () => {
    const allSeries = await getSeries(query);
    setSeries(allSeries);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllComics();
  }, []);

  return {
    series: series,
    isLoading: isLoading,
  };
};
