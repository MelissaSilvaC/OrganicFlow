interface IManagerCard {
    name: string,
    email: string,
    photo: string,
    cnpj: string,
    manager?: boolean,
    onClick: () => void
}

export default function ManagerCard({photo, name, email, cnpj, manager, onClick} : IManagerCard){
    return(
        <div onClick={onClick} className="text-white w-[25rem] border-2 border-slate-600 rounded-md flex p-4 space-x-4 m-5 hover:bg-cinza_escuro hover:cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-cover" style={{ backgroundImage: `url(${photo})` }} />
            <div className='flex flex-col justify-center'>
                <p className='font-semibold text-lg max-sm:text-base pb-2'>{name}</p>
                <p className='max-sm:text-sm'>{email}</p>
                <p className='max-sm:text-sm'>{cnpj}</p>
            </div>
        </div>
    )
}