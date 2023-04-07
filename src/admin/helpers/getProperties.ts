import { Property } from '../interfaces/Property';

export const getProperties = async () => {
  const url = 'https://raw.githubusercontent.com/Greenie-Studios/Inmobiliaria-Alvarez-DB/main/properties.json';

  const resp = await fetch(url);
  const { data } = await resp.json();

  console.log(data);
  
  const properties = data.map((property: Property) => ({
    id: property.id,
    title: property.title,
    img: property.img,
    description: property.description,
  }));

  return properties;
}