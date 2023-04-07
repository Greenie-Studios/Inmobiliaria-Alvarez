import { FC } from 'react';

import { Card } from './Card';
import { Property } from '../admin/interfaces/Property';

interface Props {
  properties: Property[];
  list?: boolean
}

export const PropertiesList: FC<Props> = ({ properties, list }) => {
  return (
    <div className={`properties-list ${list ? 'list' : ''}`}>
      {
        properties.map((property: Property, i: number) => (
          <Card
            key={i}
            title={property.title}
            image={property.img}
            content={property.description}
          />
        ))
      }
    </div>
  )
}
