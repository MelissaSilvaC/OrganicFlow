import TitleComplaint from "components/Cards/TitleComplaint";

export default function Complaint(){
    return (
        <div className="bg-preto text-white">
            <div className="pt-16 pb-24">
                <TitleComplaint />
            </div>
            <div>
                Dados sobre a denúncia
            </div>
        </div>
    )
}