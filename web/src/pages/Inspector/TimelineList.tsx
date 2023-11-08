import TitleTimeline from "components/Cards/Titles/Title-timeline";
import TimelinesTable from "components/TimelinesTable";
import { useState, useEffect, useLayoutEffect } from "react";
import api from 'axiosUrl'
import { Outlet } from "react-router-dom";

export default function TimelineList() {
    const [produto, setProduto] = useState<any>(null);
    const url = window.location.href;
    const id = url.split("/").pop();
    
    useEffect(() => {
        api.get(`/produto/${id}`)
            .then(response => {
                const produto = response.data; // Obtenha o objeto completo do produto
                setProduto(produto)
            })
            //retorna o objeto inteiro
            .catch((error) => { console.log(error) });
    }, []);

    return (
        <section className="bg-preto pt-[80px] pb-5">
            {produto && // Verifica se produto está definido
                <div> <TitleTimeline bgProduct={produto.photo} txtProduct={produto.nome} /> </div>
            }
            <Outlet /> 
        </section>
    )
}