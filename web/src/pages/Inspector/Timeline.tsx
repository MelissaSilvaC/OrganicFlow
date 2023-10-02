import TitleTimeLine from "components/Cards/TitleTimeLine";
import Accordion from 'components/Accordion/Accordion';
import BasicAccordion from "components/Accordion/MUIAccordion";

export default function TimeLine() {
    return (
        <div className="bg-preto h-full pt-[80px] pb-5">
            <TitleTimeLine />

            <div className="text-white font-medium ml-24 my-12">
                <p>ID: (parametro ID)</p>
                <p>(parametro data)</p>
                <p>Endereço do fornecedor: (parametro Fornecedor)</p>
                <p>Número do lote: (parametro Lote)</p>
            </div>
            <Accordion />
        </div>
        
    )
}
