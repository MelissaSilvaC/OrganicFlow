import ProductCard from "../../components/Cards/ProductCard";
import ProfileScreen from "../ProfileScreen";
import ModalProduct from "components/ModalProduct";
import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState } from "react";
import TestProduct from "components/Cards/TestProduct";
import IProduto from "types/IProduto";

interface Props {
    setCards: React.Dispatch<React.SetStateAction<IProduto[]>>
}

export default function ProfileCompany({ setCards }: Props){
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState("")
    const [nameProduct, setNameProduct] = useState("")
    {/** LIMPE A LISTA APÓS OS TESTES */}
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
        }
    ]);
    
    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('form enviado com sucesso', image, nameProduct)
        //função para adcionar o produto na lista
        const novoProduto: IProduto = {
            image,
            nameProduct,
        };
        setProdutos((prevState) => [...prevState, novoProduto]);
        // Fechar o modal após adicionar o produto
    }
    
    
     
    return (
        <ProfileScreen>
            <div className="">
                <div className="flex m-24 flex-wrap ">
                    <ModalProduct>
                        <form onSubmit={onSubmit}>
                            <TextField
                                obrigatorio={true}
                                placeholder='Imagem'
                                onChange={evento => setImage(evento.target.value)}
                                valor={image}
                                type='text'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <TextField
                                obrigatorio={true}
                                placeholder='Nome'
                                onChange={evento => setNameProduct(evento.target.value)}
                                valor={nameProduct}
                                type='text'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1' texto='Enviar' />
                        </form>
                    </ModalProduct>

                    {produtos?.map((produto, index) => (
                        <TestProduct
                            key={index}
                            image={produto.image}
                            nameProduct={produto.nameProduct}
                        />
                    ))
                    }

                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    
                </div>
            </div>
        </ProfileScreen>
    )
}