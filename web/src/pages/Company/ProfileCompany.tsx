import ProfileScreen from "../ProfileScreen";
import ModalProduct from "components/Modal/RegisterProduct";
import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState } from "react";
import IProduto from "types/IProduto";
import ProductCard from "components/Cards/Produto";
import React from "react";

export default function ProfileCompany() {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [nameProduct, setNameProduct] = useState("")
    {/** LIMPE A LISTA APÓS OS TESTES */ }
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

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (image) {
            // Verifica se um arquivo de imagem foi selecionado
            console.log('Upload de imagem:', image);
            // Aqui você pode enviar a imagem para o servidor ou realizar outras ações
            const novoProduto: IProduto = {
                image: URL.createObjectURL(image), 
                // Use URL.createObjectURL para obter um URL temporário para o arquivo selecionado
                nameProduct,
            };

            setProdutos((prevState) => [...prevState, novoProduto]);
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
            console.log('passou por essa função')
        }
    };

    return (
        <ProfileScreen>
            <div>
                <div className="flex m-24 flex-wrap ">
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
        </ProfileScreen>
    )
}