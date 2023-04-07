import { FaEdit, FaPen, FaTrash } from 'react-icons/fa';
import DataTable, { TableColumn } from 'react-data-table-component';

import { useProperties } from '../hooks/useProperties';
import { Property } from '../interfaces/Property';

const columns: TableColumn<Property>[] = [
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'Description',
    selector: row => row.description,
    sortable: true,
    wrap: true
  },
  {
    name: 'Image',
    cell: row => <img className="mt-1" src={row.img} alt={row.title}/>,
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

export const PropertiesPage = () => {
  const {properties, isLoading} = useProperties();
  console.log(properties)

  return (
    <>
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <DataTable
        title='Propiedades'
        columns={columns}
        data={properties}
        actions={<Test/>}
        highlightOnHover
        pointerOnHover
        theme='dark'
        onRowClicked={row => console.log(row.id)}
        responsive={true}
      />
    </>
  )
}

export const Test = () => {
  return (
    <button className='btn btn-primary'>Nuevo <FaEdit/></button>
  )
}