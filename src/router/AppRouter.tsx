import { Route, Routes } from 'react-router-dom';
import { Admin } from '../admin/layout/Admin';
import { AdminRoutes } from '../admin/routes/AdminRoutes';
import { LandingRoutes } from '../landing/routes/LandingRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/admin/*' element={<AdminRoutes/>}/>

        <Route path='/*' element={<LandingRoutes/>}/>
      </Routes>
    </>
  )
}