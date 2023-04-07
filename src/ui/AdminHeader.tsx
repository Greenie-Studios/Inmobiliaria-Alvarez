import { FC } from 'react';
import { FaBars } from 'react-icons/fa';

interface Props {
  toggle: Function;
}

export const AdminHeader: FC<Props> = ({toggle}) => {
  return (
    <header className='admin-header'>
      <button className='btn btn-primary' onClick={() => toggle()}>
        <FaBars size={25}/>
      </button>
    </header>
  )
}