import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AgentsPage, PropertiesPage } from '../pages';

export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>

        <Route path='properties' element={<PropertiesPage/>}/>
        <Route path='agents' element={<AgentsPage/>}/>
        <Route path='/*' element={<Navigate to='/admin'/>}/>
      </Routes>
    </>
  )
}
