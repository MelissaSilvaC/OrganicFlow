import TitleTimeLine from "components/Cards/TitleTimeLine";
import CustomPaginationActionsTable from "components/Table/TimelinesTable";

export default function TimelineList() {
    return (
        <div className="bg-preto h-full pt-[80px] pb-5">
            <TitleTimeLine />
            
            <div className="py-28">
                {/**Tabela */}
                <div className="px-16">
                    <CustomPaginationActionsTable />
                </div>
            </div>
        </div>
    )
}