import { Navigate, Route, Routes } from 'react-router-dom';
import { Admin } from '../layout/Admin';
import { HomePage, AgentsPage, PropertiesPage } from '../pages';

export const AdminRoutes = () => {
  return (
    <Admin>
      <Routes>
        <Route path='/home' element={<HomePage />}/>

        <Route path='/properties' element={<PropertiesPage/>}/>
        <Route path='/agents' element={<AgentsPage/>}/>
        <Route path='/*' element={<Navigate to='home'/>}/>
      </Routes>
    </Admin>
  )
}
