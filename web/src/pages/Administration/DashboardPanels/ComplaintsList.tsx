import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import api from '../../../axiosUrl';
import { useState, useEffect } from 'react';
import TitleComplaint from 'components/Cards/Titles/Title-complaint';

interface Denuncia {
    id: number;
    argumento: string;
    stage: string;
    description: string;
    user: {
        name: string;
    };
}

export default function ComplaintsList() {
    const [denuncias, setDenuncias] = useState<Denuncia[]>([]);

    useEffect(() => {
        api.get('/denuncia')
            .then(response => {
                const novasDenuncias = response.data.map((denuncia: Denuncia) => ({
                    id: denuncia.id,
                    name: denuncia.user.name, // Aqui você pode ajustar para o campo que deseja exibir como o nome do usuário
                    stage: denuncia.stage, // Ajustando o nome do campo para 'stage'
                    description: denuncia.description,
                }));

                setDenuncias(novasDenuncias);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Usuário que denunciou',
            width: 300,
            renderCell: params => (
                <Link to={`denuncia/${params.row.id}`}>
                    {params.row.name}
                </Link>
            ),
        },
        {
            field: 'stage',
            headerName: 'Estágio denunciado',
            width: 300,
            renderCell: params => (
                <Link to={`denuncia/${params.row.id}`}>
                    {params.row.stage}
                </Link>
            ),
        },
        {
            field: 'description',
            headerName: 'Argumento',
            width: 300,
            renderCell: params => (
                <Link to={`denuncia/${params.row.id}`}>
                    {params.row.description}
                </Link>
            ),
        },
    ];

    return (
        <div className="pb-28 max-sm:h-screen">
            <TitleComplaint titulo="Denúncias" estilo="max-sm:pt-0" />
            <div className="px-16 max-sm:px-2">
                <div className="bg-gray-200">
                    <DataGrid
                        rows={denuncias}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}
