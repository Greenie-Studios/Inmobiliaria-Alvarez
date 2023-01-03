import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';
import { LandingPage } from '../pages';

export const LandingRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='marvel' element={<LandingPage />}/>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}
