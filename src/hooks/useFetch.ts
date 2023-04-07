import { useEffect, useState } from 'react';

export const useProperties = (getData: Function) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async() => {
    const newData = await getData();
    setData(newData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading
  }
}