import TitleComplaint from "components/Cards/TitleComplaint";
import Table from "components/Table/ComplaintsTable";

export default function ComplaintsList(){
    return (
        <div className="bg-preto py-28">
            <div className="pt-16 pb-24">
                <TitleComplaint />
            </div>
            <div className="px-16">
                <div className="bg-gray-200">
                    <Table />
                </div>
            </div>
        </div>
    )
}