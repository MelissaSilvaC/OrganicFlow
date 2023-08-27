import TitleComplaint from "components/Cards/TitleComplaint";

export default function ComplaintsList(){
    return (
        <div className="bg-preto h-screen">
            <div className="pt-16">
                <TitleComplaint />
            </div>
            
            <div className="text-white text-lg font-medium p-16 space-x-14">
                <button>Excluir</button>
                <button>Ordenar por</button>
            </div>
            
            <div>
                {/**Tabela */}
            </div>

        </div>
    )
}