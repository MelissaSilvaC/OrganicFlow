import React from "react";
import Slider from "react-slick";
import CompanyCard from "../../components/Cards/CompanyCard";
import ProductCard from "../../components/Cards/ProductCard";
import ProfileScreen from "../ProfileScreen";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProfileInspector() {
    const companySettings = {
        infinite: true,
        slidesToShow: 6, // Número de cartões exibidos de cada vez
        slidesToScroll: 1, // Número de cartões para rolar de cada vez
    };

    

    return (
        <ProfileScreen>
            <div className="space-y-28 mt-24">
                <div className="px-24">
                    <p className="text-white text-2xl px-24 pb-8">Cadastro nas empresas</p>

                    <Slider {...companySettings}>
                        {/* Lista dos perfis da empresa */}
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                    </Slider>
                </div>

                <div className="px-24">
                    <p className="text-white text-2xl pb-8">Produtos da empresa (selecionada)</p>
                    <div className="flex flex-wrap">
                        {/**Função map que lista os produtos da empresa */}
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
    );
}
