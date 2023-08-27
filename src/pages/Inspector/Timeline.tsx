import Navbar from "../../components/Navbar";
import ProductImage from "../../components/Cards/ProductImage";

export default function Timeline() {
    return (
        <div className="bg-preto h-screen">
            <div className="flex pt-24 items-end space-x-28">
                <ProductImage />
                <p className="text-2xl font-semibold text-white">Ordenar por</p>
            </div>
            <div>
                {/**Tabela */}
            </div>
        </div>
    )
}