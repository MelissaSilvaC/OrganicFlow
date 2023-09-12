import CompanyCard from "../../components/Cards/CompanyCard";
import ProductCard from "../../components/Cards/ProductCard";
import ProfileScreen from "../ProfileScreen";

export default function ProfileInspector(){
    return (
        <ProfileScreen>
            <div className="space-y-28 mt-24">
                <div>
                    {/** Scroll bar horizontal */}
                    <p className="text-white text-2xl px-24 pb-8">Cadastro na empresas</p>

                    <div className="flex">
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                    </div>
                    
                </div>

                <div className="px-24">
                    <p className="text-white text-2xl pb-8">Produtos da empresa (selecionada)</p>
                    <div className="flex flex-wrap">
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    </div>
                </div>
            </div>
        </ProfileScreen>
    )
}