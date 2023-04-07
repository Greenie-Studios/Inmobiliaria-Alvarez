import { FaEdit, FaPen, FaTrash } from 'react-icons/fa';
import DataTable, { TableColumn } from 'react-data-table-component';

import { AdminHeader, Sidebar } from '../../ui';
import { Agent } from '../interfaces/Agent';
import { useAgents } from '../hooks/useAgents';

const columns: TableColumn<Agent>[] = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Lastname',
    selector: row => row.lastname,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    wrap: true
  },
  {
    name: 'Image',
    cell: row => <img className="mt-1" src={row.img} alt={row.name}/>,
  },
  {
    cell: (row) => <div>
      <button
        className='btn btn-nobg-info btn-square'
        onClick={console.log}
        id={row.id}
      ><FaPen/></button>
      <button
        className='btn btn-nobg-danger btn-square'
        onClick={console.log}
        id={row.id}
      ><FaTrash/></button>
    </div>,
    button: true
  }
];

export const AgentsPage = () => {
  const {agents, isLoading} = useAgents();
  console.log(agents)

  return (
    <>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <DataTable
        title='Agentes'
        columns={columns}
        data={agents}
        actions={<Test/>}
        highlightOnHover
        pointerOnHover
        onRowClicked={row => console.log(row.id)}
        responsive={true}
      />
    </>
  )
}

const Test = () => {
  return (
    <button className='btn btn-primary'>Nuevo <FaEdit/></button>
  )
}