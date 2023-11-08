import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, } from "react";
import logoEmpresa from '../../assets/img/logoExample.png'
import TitleComplaint from "components/Cards/Titles/Title-complaint";
import ProductCard from "components/Cards/ImageCards/Produto";
import api from '../../axiosUrl'

export default function ProfileInspector() {
    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        const id = 2; // Substitua pelo id que você deseja buscar
        api.get(`http://localhost:3001/empresa/${id}`)
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <ProfileScreen
            photo={logoEmpresa}
            userName="InspectorName"
            email="inspector@email.com"
        >
            <TitleComplaint titulo="Produtos da empresa" />
            <div className="flex flex-wrap">
                {/* {produtos?.map((produto, index) => (
                            <ProductCard
                                key={index}
                                image={produto.image}
                                nameProduct={produto.nameProduct}
                            />
                        ))} */}
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
                <ProductCard
                    id={1}
                    nome="produto"
                    photo="https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </ProfileScreen>
    );
}
