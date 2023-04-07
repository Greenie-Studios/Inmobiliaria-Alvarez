import { useState } from 'react';
import {
  FaTh,
  FaThList
} from 'react-icons/fa';
import { PropertiesList } from '../../ui';
import { useProperties } from '../../admin/hooks/useProperties';

export const SalesPage = () => {
  const {properties, isLoading} = useProperties();
  const [list, setList] = useState('grid');

  const onOptionChange = (e: any) => {
    setList(e.target.value)
  }

  return (
    <>
      <section className='hero'>
        <h1>Propiedades en venta</h1>
      </section>

      <section className='properties'>
        <div className='filters'>
          <select name="order" id="order">
            <option value="hola" selected>Últimos publicados</option>
            <option value="saab">Más barato</option>
            <option value="opel">Más caro</option>
          </select>

          <div className='test'>
            <label>
              <input
                type='radio'
                name='test'
                value='grid'
                checked={list === 'grid'}
                onChange={onOptionChange}
              />
              <FaTh size={25}/>
            </label>
            
            <label>
              <input
                type='radio'
                name='test'
                value='list'
                checked={list === 'list'}
                onChange={onOptionChange}
              />
              <FaThList size={25}/>
            </label>
          </div>
        </div>
        {
          isLoading && (<h2>Loading...</h2>)
        }

        <PropertiesList properties={properties} list={list === 'list'}/>
      </section>
    </>
  )
}