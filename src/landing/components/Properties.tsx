import { useProperties } from '../../admin/hooks/useProperties';
import { PropertiesCarousel } from '../../ui';

export const Properties = () => {
  const {properties, isLoading} = useProperties();

  return (
    <section className='properties'>
      {
        isLoading && (<h2>Loading...</h2>)
      }

      <PropertiesCarousel properties={properties}/>
    </section>
  )
}