import { Agent } from '../interfaces/Agent';

export const getAgents = async () => {
  const url = 'https://raw.githubusercontent.com/Greenie-Studios/Inmobiliaria-Alvarez-DB/main/agents.json';

  const resp = await fetch(url);
  const { data } = await resp.json();

  console.log(data);
  
  const agents = data.map((agent: Agent) => ({
    id: agent.id,
    name: agent.name,
    lastname: agent.lastname,
    email: agent.email,
    img: agent.img,
  }));

  return agents;
}