import React, { useState } from "react";
import ProfileScreen from "./ProfileScreen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { useEffect, } from "react";
import logoEmpresa from '../../assets/img/logoExample.png'
import TitleComplaint from "components/Cards/Titles/TitleComplaint";

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
            </div>
        </ProfileScreen>
    );
}
