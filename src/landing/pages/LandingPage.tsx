import { useProperties } from '../../admin/hooks/useProperties';
import { PropertiesCarousel } from '../../ui';

export const LandingPage = () => {
  const {properties, isLoading} = useProperties();

  return (
    <>
      <section className='hero'>
        <h1>INMOBILIARIA ALVAREZ</h1>
      </section>

      <section className='properties'>
        {
          isLoading && (<h2>Loading...</h2>)
        }

        <PropertiesCarousel properties={properties}/>
      </section>
    </>
  )
}