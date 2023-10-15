import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";

interface Denuncia {
  id: number;
  description: string;
  alvo: string;
  user: {
    name: string;
  };
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Usuário que denunciou',
    width: 300,
    renderCell: (params) => {
      const description = params.row.name;
      // Check if the description is not null
      if (description !== null) {
        // Wrap the name in a link
        return (
          /**
          <a href={`your_link_here/${description}`}>
            {description}
          </a>
          */
          <Link to='denuncia'>
            {description}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
  {
    field: 'alvo',
    headerName: 'Usuário alvo',
    width: 300,
    renderCell: (params) => {
      const description = params.row.alvo;
      // Check if the description is not null
      if (description !== null) {
        // Wrap the name in a link
        return (
          /**
          <a href={`your_link_here/${description}`}>
            {description}
          </a>
          */
          <Link to='denuncia'>
            {description}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
  {
    field: 'description',
    headerName: 'Descrição',
    width: 300,
    renderCell: (params) => {
      const description = params.row.description;
      // Check if the description is not null
      if (description !== null) {
        // Wrap the name in a link
        return (
          /**
          <a href={`your_link_here/${description}`}>
            {description}
          </a>
          */
          <Link to='denuncia'>
            {description}
          </Link>
        );
      }
      return null; // Return null for null values
    },
  },
];



// const rows = [
//   //data: usuario que fez a denuncia
//   //usuario: alvo
//   //argumento: description
//   { id: 1, name: 'Snow', alvo: 'Jon', description: 'a ' },
//   { id: 2, name: 'Lannister', alvo: 'Cersei', description: 'a ' },
//   { id: 3, name: 'Lannister', alvo: 'Jaime', description: 'a ' },
//   { id: 4, name: 'Stark', alvo: 'Arya', description: 'a ' },
//   { id: 5, name: 'Targaryen', alvo: 'Daenerys', description: 'a ' },
//   { id: 6, name: 'Melisandre', alvo: null, description: 'a ' },
//   { id: 7, name: 'Clifford', alvo: 'Ferrara', description: 'a ' },
//   { id: 8, name: 'Frances', alvo: 'Rossini', description: 'a ' },
//   { id: 9, name: 'Roxie', alvo: 'Harvey', description: 'a ' },
// ];

export default function DataTable() {
  const [denuncias, setDenuncias] = useState<any[]>([]);

  useEffect(() => { 

    axios.get(`http://localhost:3000/denuncia`)
    .then(response => {

        const novosDenuncia = response.data.map((denuncia: Denuncia) => ({
        id: denuncia.id,
        name: denuncia.user.name,
        alvo: denuncia.alvo,
        description: denuncia.description,
        }));
        
    setDenuncias(novosDenuncia);
    console.log(novosDenuncia)
    
    })
    //retorna o objeto inteiro
    .catch((error) => {
        console.log(error);
    });
    // console.log('aa')
    
  }, []);
  return (
    <div>
      <DataGrid
        rows={denuncias}
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

