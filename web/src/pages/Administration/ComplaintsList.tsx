import TitleComplaint from "components/Cards/Titles/TitleComplaint";
import Table from "components/Table/ComplaintsTable";

export default function ComplaintsList(){
    return (
        <div className="pb-28">
            <TitleComplaint titulo="Denúncias"/>
            <div className="px-16">
                <div className="bg-gray-200">
                    <Table />
                </div>
            </div>
        </div>
    )
}