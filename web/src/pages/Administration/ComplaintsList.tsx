import TitleComplaint from "components/Cards/TitleComplaint";
import Table from "components/Table/ComplaintsTable";

export default function ComplaintsList(){
    return (
        <div className="pb-28">
            <div className="pt-14 pb-24">
                <TitleComplaint titulo="Denúncias"/>
            </div>
            <div className="px-16">
                <div className="bg-gray-200">
                    <Table />
                </div>
            </div>
        </div>
    )
}