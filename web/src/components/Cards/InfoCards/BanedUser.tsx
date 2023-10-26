import Button from "components/Items_Forms/Button";

interface Props {
    name: string,
    email: string,
    photo: string,
    cnpj?: string,
}

export default function BanedUser({ photo, name, email, cnpj }: Props) {
    return (
        <div className="text-white w-[25rem] border-2 border-slate-600 rounded-md flex p-4 space-x-4 m-5">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 rounded-full bg-cover" style={{ backgroundImage: `url(${photo})` }} />
            <div className='flex flex-col justify-center'>
                <p className='font-semibold text-lg max-sm:text-base pb-2'>{name}</p>
                <p className='max-sm:text-sm'>{email}</p>
                <p className='max-sm:text-sm'>{cnpj}</p>
                <Button 
                onClick={()=>{}}
                texto="desfazer banimento"
                botaoCSS= "bg-verde_folha h-[30px] rounded-lg font-medium text-white px-5 mt-4 shadow hover:bg-verde_palido"
                />
            </div>
        </div>
    )
}