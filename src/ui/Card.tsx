import { FC } from 'react';
import {
  FaBath,
  FaBed,
  FaCar,
  FaExpand,
  FaRulerCombined,
} from 'react-icons/fa';

interface Props {
  image: string;
  title: string;
  content: string;
}

let test = {
  bath: 2,
  bed: 3,
  parking: 2,
}

export const Card: FC<Props> = ({
  image,
  title,
  content
}) => {
  return (
    <div className='card'>
      <img src={image} alt='' />
      <div className='card-body'>
        <p className='card-title'>{title}</p>
        <p className='card-price'>$1,500,000 - Venta</p>
        <p className='card-address'>Francisco Zarco, Colima</p>
        <div className='card-content'>
          <div className='card-info'>
            {
              !!test.bath &&
              <div>
                <FaBath size={30}/> 2
              </div>
            }
            <div>
              <FaBed size={30}/> 3
            </div>
            <div>
              <FaCar size={30}/> 2
            </div>
          </div>
          <div className='card-size'>
            <div>
              <FaExpand size={25}/> 163 m²
            </div>
            <div>
              <FaRulerCombined size={25}/> 240 m²
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}