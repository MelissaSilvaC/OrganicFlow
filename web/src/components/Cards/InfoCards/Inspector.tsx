import { TfiClose } from 'react-icons/tfi';

interface Props {
    name: string,
    email: string,
    photo: string,
    password: string,
}

export default function InspectorCard({ photo, name, email, password }: Props) {
    return (
        <div className="text-white w-[25rem] border border-slate-600 rounded-md p-4 m-5 hover:bg-cinza_escuro hover:cursor-pointer">

            <div className='flex justify-end'>
                <button onClick={() => { }} className='border-2 p-2 border-red-600 rounded-full hover:animate-pulse'>
                    <TfiClose className='w-4 h-4 fill-red-600' />
                </button>
            </div>

            <div className='flex space-x-4 pb-2'>
                <div className="w-28 h-28 rounded-full bg-cover" style={{ backgroundImage: `url(${photo})` }} />

                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-lg pb-2'>{name}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                </div>
            </div>

        </div>
    )
}