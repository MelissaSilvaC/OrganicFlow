import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from '../../../axiosUrl'

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
            if (description !== null) {
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
            return null;
        },
    },
    {
        field: 'alvo',
        headerName: 'Alvo da denúncia',
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
        headerName: 'Argumento',
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

export default function ComplaintsList() {
    const [denuncias, setDenuncias] = useState<any[]>([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const handleComplaintClick = (complaint: React.SetStateAction<null>) => {
        setSelectedComplaint(complaint);
    };
    useEffect(() => {
        api.get(`/denuncia`)
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


