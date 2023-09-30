import TitleTimeLine from "components/Cards/TitleTimeLine";
import Navbar from "../../components/navbar/Navbar";
import CustomPaginationActionsTable from "components/Table/TimelinesTable";


export default function Timeline() {
    return (
        <div className="bg-preto h-full py-24">
            <div className="flex items-end space-x-28">
                <TitleTimeLine />
            </div>
            <div className="py-28">
                {/**Tabela */}
                <div className="px-16">
                    <CustomPaginationActionsTable />
                </div>
            </div>
        </div>
    )
}