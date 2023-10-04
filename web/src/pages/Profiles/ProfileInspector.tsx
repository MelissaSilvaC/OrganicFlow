import React, { useState } from "react";
import Slider from "react-slick";
import CompanyCard from "../../components/Cards/Empresa";
import ProfileScreen from "./ProfileScreen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IProduto from "types/IProduto";
import ProductCard from "components/Cards/Produto";

export default function ProfileInspector() {
    const companySettings = {
        infinite: true,
        slidesToShow: 6, // Número de cartões exibidos de cada vez
        slidesToScroll: 1, // Número de cartões para rolar de cada vez
    };

    const [produtos, setProdutos] = useState<IProduto[]>([  // Inicialize o estado "produtos" com a lista inicial.
        {
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vub3VyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=600',
            nameProduct: 'Cenoura'
        },
        {
            image: 'https://images.unsplash.com/photo-1589753014594-0676c69bbcbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFiYW5ldGV8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60',
            nameProduct: 'Rabanete'
        },
        {
            image: 'https://images.unsplash.com/photo-1556781366-336f8353ba7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            nameProduct: 'Alface'
        },
        {
            image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vub3VyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=600',
            nameProduct: 'Cenoura'
        },
        {
            image: 'https://images.unsplash.com/photo-1589753014594-0676c69bbcbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFiYW5ldGV8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60',
            nameProduct: 'Rabanete'
        },
        {
            image: 'https://images.unsplash.com/photo-1556781366-336f8353ba7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            nameProduct: 'Alface'
        }
    ]);

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
                        {/**Função map que lista os produtos da empresa */}
                        
                        {produtos?.map((produto, index) => (
                            <ProductCard
                                key={index}
                                image={produto.image}
                                nameProduct={produto.nameProduct}
                            />
                        ))
                        }

                    </div>
                </div>
            </div>
        </ProfileScreen>
    );
}
