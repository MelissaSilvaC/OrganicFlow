import React, { useState } from "react";
import Slider from "react-slick";
import CompanyCard from "../../components/Cards/Empresa";
import ProfileScreen from "./ProfileScreen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "components/Cards/Produto";
import axios from 'axios'
import { useEffect, } from "react";

export default function ProfileInspector() {
    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        const id = 2; // Substitua pelo id que você deseja buscar
        axios.get(`http://localhost:3001/empresa/${id}`)
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    const companySettings = {
        infinite: true,
        slidesToShow: 6, // Número de cartões exibidos de cada vez
        slidesToScroll: 1, // Número de cartões para rolar de cada vez
    };

    

    return (
        <ProfileScreen>
            <div className="space-y-28 mt-24">
                <div className="px-24">
                    <p className="text-white text-2xl pb-8">Cadastro nas empresas</p>
                    {/**Notas: arrumar a responsividade e fazer o slider só aparecer quando os cards preencherem a tela */}
                    <Slider {...companySettings}>
                        {/* Lista dos perfis da empresa */}
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                        <CompanyCard /><CompanyCard /><CompanyCard /><CompanyCard />
                    </Slider>
                </div>

                <div className="px-24">
                    <p className="text-white text-2xl pb-8">Produtos da empresa (nomeDaEmpresa)</p>
                    <div className="flex flex-wrap">
                        {/* {produtos?.map((produto, index) => (
                            <ProductCard
                                key={index}
                                image={produto.image}
                                nameProduct={produto.nameProduct}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
        </ProfileScreen>
    );
}
