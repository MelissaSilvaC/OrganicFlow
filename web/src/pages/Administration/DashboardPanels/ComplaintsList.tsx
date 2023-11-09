import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import api from '../../../axiosUrl'
import { useState, useEffect } from "react";
import TitleComplaint from 'components/Cards/Titles/Title-complaint';

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
                    <Link to='admin/dashboard/lista-denuncias/denuncia'>
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
            if (description !== null) {
                return (
                    <Link to='admin/dashboard/lista-denuncias/denuncia'>
                        {description}
                    </Link>
                );
            }
            return null; 
        },
    },
    {
        field: 'description',
        headerName: 'Argumento',
        width: 300,
        renderCell: (params) => {
            const description = params.row.description;
            if (description !== null) {
                return (
                    <Link to='admin/dashboard/lista-denuncias/denuncia'>
                        {description}
                    </Link>
                );
            }
            return null; 
        },
    },
];

export default function ComplaintsList() {
    const [denuncias, setDenuncias] = useState<any[]>([]);
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


