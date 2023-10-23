import fundo from '../../../assets/img/Fundo/greenLines.png'

interface props{
    titulo: string
}

export default function TComplaint({titulo} : props){
    return(
        <div className="pt-14 pb-24 max-sm:pb-10">
            <div className="bg-verde_escuro h-[120px] max-lg:h-[100px] pl-16 max-lg:pl-5 pb-5 max-lg:pb-3 flex items-end shadow-xl" style={{ backgroundImage: `url(${fundo})` }}>
                <p className="text-white text-3xl max-lg:text-xl font-bold">{titulo}</p>
            </div>
        </div>
    )
}