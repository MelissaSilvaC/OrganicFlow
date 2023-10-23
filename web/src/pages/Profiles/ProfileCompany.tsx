import ModalProduct from "components/Modal/RegisterProduct";
import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState, useEffect } from "react";
import ProductCard from "components/Cards/ImageCards/Produto";
import React from "react";
import axios from "axios";
import ProfileScreen from "./ProfileScreen";
import logoEmpresa from '../../assets/img/logoExample.png'
import ManagementInspector from "components/ManagementInspectors";

export default function ProfileCompany() {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [nameProduct, setNameProduct] = useState("")
    const [produtos, setProdutos] = useState<any[]>([]);
    {/** LIMPE A LISTA APÓS OS TESTES */ }
    // useEffect(()=>{
    //     axios.get('http://localhost:3001'+'/empresa/:id')
    //     .then(response => {
    //         console.log('Dados recebidos:', response.data);
    //       })
    //       .catch(error => {
    //         console.error('Erro ao buscar dados:', error);
    //       });   
    //    const [produtos, setProdutos] = useState<IProduto[]>([  // Inicialize o estado "produtos" com a lista inicial.



    // {
    //     image: // tps://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Vub3VyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=600',
    //     namePro// t: 'Cenoura'
    // },
    //    //]);



    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    //   const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {

        const url = window.location.href;
        const id = url.split("/").pop();
        axios.get(`http://localhost:3000/empresa/${id}`)
            .then(response => {

                const novosProduto = response.data[0].Produto.map((produto: { id: number; nome: string; photo: string; }) => ({
                    id: produto.id,
                    nome: produto.nome,
                    photo: produto.photo,
                }));

                setProdutos(novosProduto);
                console.log(novosProduto)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
        // console.log('aa')

    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (image) {
            const formData = new FormData(); // Crie um objeto FormData para enviar a imagem
        
            formData.append('file', image); // Adicione a imagem ao FormData
            formData.append('nome', nameProduct); // Adicione o nome ao FormData
        
            axios.post('http://localhost:3000/produto', formData) // Correção aqui
                .then(response => console.log(response))//se for sucedido 
                .catch((error) => {
                    console.log(error);
                });
        
            
            console.log(formData)
            setImage(null);
            setNameProduct('');
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

    return (
        <ProfileScreen
            photo={logoEmpresa}
            userName="CompanyName"
            email="company@email.com"
            adress="Rua plantao, 123 - Penha/São Paulo - SP"
        >
            <div className="flex max-sm:flex-wrap flex-col mt-16 mb-20 max-sm:mt-8 max-sm:mb-10">
                <p className="text-white text-2xl max-sm:text-xl pb-8">Produtos da empresa</p>

                <div className="flex flex-wrap max-sm:justify-center">
                    <ModalProduct>
                        <form onSubmit={onSubmit}>
                            {/* Renderiza a imagem se imageURL estiver definida */}
                            <div className="flex justify-center">
                                <div className="w-44 h-44 flex rounded-[50px] border-2 border-verde_escuro bg-cover">
                                    {imageURL && <img src={imageURL} alt="Imagem Enviada" className="rounded-[50px]" />}
                                </div>
                            </div>
                            {/* Label e botão */}
                            <div className="flex flex-col my-2">
                                <label className="font-medium" >Imagem:</label>
                                <label
                                    htmlFor='file-input'
                                    className='custom-file-upload bg-verde_escuro w-full h-[40px] rounded-lg font-semibold text-white mt-1 flex justify-center items-center cursor-pointer hover:bg-green-900'>
                                    Selecione um arquivo
                                </label>
                            </div>

                            <input
                                required
                                type='file'
                                name='image'
                                onChange={handleImageChange}
                                style={{ display: 'none' }} // Oculta o campo de entrada de arquivo
                                id='file-input' // Adiciona um id para referência ao label
                            />

                            <TextField
                                obrigatorio={true}
                                placeholder='Nome'
                                onChange={evento => setNameProduct(evento.target.value)}
                                valor={nameProduct}
                                tipo='text'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900' texto='Enviar' />
                        </form>
                    </ModalProduct>
                    {produtos?.map((produto) => (
                        <ProductCard
                            key={produto.id}
                            id={produto.id}
                            nome={produto.nome}
                            photo={produto.photo}
                        />
                    ))}
                </div>
            </div>

            <ManagementInspector />
        </ProfileScreen>
    )
}