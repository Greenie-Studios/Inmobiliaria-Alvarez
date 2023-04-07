import { useEffect, useState } from 'react';
import { getAgents } from '../helpers/getAgents';

export const useAgents = () => {
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newAgents = await getAgents();
    setAgents(newAgents);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []);

  return {
    agents,
    isLoading
  }
}