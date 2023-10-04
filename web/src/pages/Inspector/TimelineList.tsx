import TitleTimeLine from "components/Cards/TitleTimeLine";
import Button from "components/Items_Forms/Button";
import CustomPaginationActionsTable from "components/Table/TimelinesTable";

export default function TimelineList() {
    return (
        <section className="bg-preto pt-[80px] pb-5">
            <TitleTimeLine />
            
            <div className="py-28">
                {/**Tabela */}
                <div className="px-28">
                    <CustomPaginationActionsTable />
                    <Button 
                    texto='nova linha do tempo'
                    botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold text-white mt-5 px-5 shadow hover:bg-verde_palido'
                    />
                </div>
            </div>
        </section>
    )
}