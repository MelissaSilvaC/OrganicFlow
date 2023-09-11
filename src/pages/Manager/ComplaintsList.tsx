import TitleComplaint from "components/Cards/TitleComplaint";
import Table from "components/Table/ComplaintsTable";

export default function ComplaintsList(){
    return (
        <div className="bg-preto h-full py-28">
            <div className="pt-16 pb-24">
                <TitleComplaint />
            </div>
            <div className="px-16">
                <Table />
            </div>
        </div>
    )
}