import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { LandingPage, RentsPage, SalesPage } from '../pages';

export const LandingRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/sales' element={<SalesPage />}/>
        <Route path='/rents' element={<RentsPage />}/>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}
