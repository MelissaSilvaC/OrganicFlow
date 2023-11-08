import api from 'axiosUrl';
import { TfiClose } from 'react-icons/tfi';
import IInspector from 'types/IInspector';

export default function InspectorCard({ photo, name, email,id }: IInspector) {
    const url = window.location.href;
    const idURL = url.split("/").pop();
    const idStorage = localStorage.getItem('id');
    let perfil = true
    if (idURL != idStorage) { perfil = false }

    return (
        <div className=" text-white w-[25rem] border-2 border-slate-600 rounded-md flex flex-col p-4 m-5 hover:bg-zinc-600 hover:cursor-pointer">
            
            {perfil ?
                <div className='flex justify-end'>
                    <button onClick={() => {
                        const userConfirmed = window.confirm("Tem certeza de que quer continuar?");
                        if (userConfirmed) {
                            try {
                                api.delete(`/fiscal/${id}`) // Substitua o '3' pelo ID do usuário que você deseja deletar
                                    .then(response => console.log(response))//se for sucedido 
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            } catch (error) {
                                console.error('Erro ao deletar usuário:', error);
                            }
                        } else {
                            // Ação para cancelar
                        }
                    }} className='border-2 max-sm:border p-2 border-red-600 rounded-full hover:animate-pulse'>
                        <TfiClose className='w-4 h-4 max-sm:w-3 max-sm:h-3 fill-red-600' />
                    </button>
                </div>
            : ""
            }

            <div className='flex max-sm:items-center space-x-4 max-sm:space-y-2 pb-2'>
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 rounded-full bg-cover" style={{ backgroundImage: `url(${photo})` }} />

                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-lg max-sm:text-base pb-2'>{name}</p>
                    <p className='max-sm:text-sm'>{email}</p>
                </div>
            </div>
        </div>
    )
}
