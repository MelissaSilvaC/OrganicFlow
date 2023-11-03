import TitleTimeline from "components/Cards/Titles/Title-timeline";
import Button from "components/Items_Forms/Button";
import CustomPaginationActionsTable from "components/TimelinesTable";
import { useState, useEffect } from "react";
import axios from 'axios'
import api from 'axiosUrl'

export default function TimelineList() {
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [produto, setProduto] = useState<any>(null);

    const urlA = window.location.href;
    const idURL = urlA.split("/").pop();
    const idStorage = localStorage.getItem('id');
    let perfil = true
    if (idURL != idStorage) { perfil = false }

    useEffect(() => {
    
        const url = window.location.href;
        const id = url.split("/").pop();
        api.get(`/produto/${id}`)
            .then(response => {
                const produto = response.data; // Obtenha o objeto completo do produto
               
                setProduto(produto)
        
                console.log(produto)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
        // console.log('aa')
    
    }, []);

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
            console.log('A imagem e os outros dados foram submetidos')
        } else {
            console.log('Nenhuma imagem selecionada.');
        }
    }

    //ESSA FUNÇÃO É PARA SABER SE O INPUT SELECIONOU A IMAGEM
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0]; // Obtenha o primeiro arquivo selecionado
        if (selectedImage) {
            setImage(selectedImage); // Atualize o estado com o objeto File
            setImageURL(URL.createObjectURL(selectedImage));
        }
    };

    const url = window.location.href;
    const id = url.split("/").pop();
    console.log(id)
    const cadastro=()=>{
        api.post(`/linha`,{
            id_produto:id,
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => {
            console.log(error);
        });
    }

    const deletar=()=>{
        api.delete(`/produto/${id}`,{
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <section className="bg-preto pt-[80px] pb-5">
           {produto && ( // Verifica se produto está definido
      <div>
        <TitleTimeline 
          bgProduct={produto.photo}
          txtProduct={produto.nome}
        />
      </div>
    )}

            <div className="py-28 max-lg:py-10">
                {/**Tabela */}
                <div className="px-28 max-lg:px-4">
                    <CustomPaginationActionsTable />
                    <div className="flex mt-8 max-lg:flex max-lg:flex-wrap max-lg:space-y-5 max-sm:text-sm">
                        <Button
                            texto='Escanear linha do tempo'
                            botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 mr-6 shadow hover:bg-verde_palido'
                            onClick={() => {}}
                        />

                        <Button
                            texto='Cadastrar linha do tempo'
                            botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 shadow hover:bg-verde_palido'
                            onClick={() => { cadastro()}}
                        />

                        {perfil ? 
                            <Button
                                texto='Deletar produto'
                                botaoCSS='ml-12 max-lg:ml-0 text-red-600 h-[40px] rounded-lg font-semibold max-lg:font-medium px-5 mr-6 shadow border-2 border-red-600 hover:animate-pulse'
                                onClick={() => {
                                    const confirmacao = window.confirm('Tem certeza? Esta ação vai deletar TODAS as linhas do tempo relacionadas a esse produto');

                                    if (confirmacao) {
                                        deletar()
                                    }
                                }}
                            />
                            : ''}
                    </div>
                </div>
            </div>
        </section>
    )
}