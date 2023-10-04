import { useNavigate } from "react-router-dom"

export default function ButtonCreateReport(){
    const navigate = useNavigate()

    return(
        <button 
            onClick={() => { navigate('cadastrar') }}
        className="bg-verde_folha h-[40px] rounded-lg font-semibold text-white mt-5 px-5 shadow hover:bg-verde_palido">
            Cadastrar relatório
        </button>
    )
}