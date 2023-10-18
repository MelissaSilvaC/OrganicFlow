import fundo from '../../../assets/img/Fundo/greenLines.png'

interface props{
    titulo: string
}

export default function TComplaint({titulo} : props){
    return(
        <div className="pt-14 pb-24">
            <div className="bg-verde_escuro h-[120px] pl-16 pb-5 flex items-end shadow-xl" style={{ backgroundImage: `url(${fundo})` }}>
                <p className="text-white text-3xl font-bold">{titulo}</p>
            </div>
        </div>
    )
}