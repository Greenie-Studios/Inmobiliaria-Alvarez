import { useEffect, useState } from 'react';
import { getProperties } from '../helpers/getProperties';

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newProperties = await getProperties();
    setProperties(newProperties);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []);

  return {
    properties,
    isLoading
  }
}