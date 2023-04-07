import { FC, useState } from 'react';
import { AdminHeader, Sidebar } from '../../ui';

interface Props {
  children: any;
}

export const Admin: FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='admin'>
      <AdminHeader toggle={ToggleSidebar}/>
      <div className='admin-main'>
        <Sidebar active={isOpen}/>
        <main onClick={() => console.log('hola')}>
          {children}
        </main>
      </div>
    </div>
  )
}
