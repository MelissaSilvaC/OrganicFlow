import { TfiClose } from 'react-icons/tfi';

interface Props {
    name: string,
    email: string,
    photo: string,
    password: string,
}

export default function InspectorCard({ photo, name, email, password }: Props) {
    return (
        <div className="text-white w-[25rem] max-sm:w-[15rem] border border-slate-600 rounded-md p-4 m-5 hover:bg-cinza_escuro hover:cursor-pointer">

            <div className='flex justify-end'>
                <button onClick={() => { 
                    const userConfirmed = window.confirm("Tem certeza de que quer continuar?");
                    if (userConfirmed) {
                        // Ação para continuar
                    } else {
                        // Ação para cancelar
                    }
                }} className='border-2 max-sm:border p-2 border-red-600 rounded-full hover:animate-pulse'>
                    <TfiClose className='w-4 h-4 max-sm:w-3 max-sm:h-3 fill-red-600' />
                </button>
            </div>

            <div className='flex max-sm:flex-col max-sm:items-center space-x-4 max-sm:space-y-2 pb-2'>
                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 rounded-full bg-cover" style={{ backgroundImage: `url(${photo})` }} />

                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-lg max-sm:text-base pb-2'>{name}</p>
                    <p className='max-sm:text-sm'>{email}</p>
                    <p className='max-sm:text-sm'>{password}</p>
                </div>
            </div>

        </div>
    )
}
