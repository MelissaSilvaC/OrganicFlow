import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
  {
    field: 'data',
    headerName: 'Data',
    width: 150,
    renderCell: (params) => {
      const argumento = params.row.data;
      // Check if the argumento is not null
      if (argumento !== null) {
        // Wrap the data in a link
        return (
          /**
          <a href={`your_link_here/${argumento}`}>
            {argumento}
          </a>
          */
          <Link to='denuncia'>
            {argumento}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
  {
    field: 'usuario',
    headerName: 'Usuário',
    width: 150,
    renderCell: (params) => {
      const argumento = params.row.usuario;
      // Check if the argumento is not null
      if (argumento !== null) {
        // Wrap the data in a link
        return (
          /**
          <a href={`your_link_here/${argumento}`}>
            {argumento}
          </a>
          */
          <Link to='denuncia'>
            {argumento}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
  {
    field: 'argumento',
    headerName: 'Argumento',
    width: 150,
    renderCell: (params) => {
      const argumento = params.row.argumento;
      // Check if the argumento is not null
      if (argumento !== null) {
        // Wrap the data in a link
        return (
          /**
          <a href={`your_link_here/${argumento}`}>
            {argumento}
          </a>
          */
          <Link to='denuncia'>
            {argumento}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
];

const rows = [
  { id: 1, data: 'Snow', usuario: 'Jon', argumento: 'a ' },
  { id: 2, data: 'Lannister', usuario: 'Cersei', argumento: 'a ' },
  { id: 3, data: 'Lannister', usuario: 'Jaime', argumento: 'a ' },
  { id: 4, data: 'Stark', usuario: 'Arya', argumento: 'a ' },
  { id: 5, data: 'Targaryen', usuario: 'Daenerys', argumento: 'a ' },
  { id: 6, data: 'Melisandre', usuario: null, argumento: 'a ' },
  { id: 7, data: 'Clifford', usuario: 'Ferrara', argumento: 'a ' },
  { id: 8, data: 'Frances', usuario: 'Rossini', argumento: 'a ' },
  { id: 9, data: 'Roxie', usuario: 'Harvey', argumento: 'a ' },
];

export default function DataTable() {
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

/**
 * export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: 'lightgray' }}>
      
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      
    </div>
  );
}
 */

