import Navbar from "components/Navbar";
import ProductCard from "../../components/Cards/ProductCard";
import ProfileScreen from "../ProfileScreen";
import ModalProduct from "components/ModalProduct";
import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState } from "react";

export default function ProfileCompany(){
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState("")
    const [nameProduct, setNameProduct] = useState("")

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('form enviado com sucesso', image, nameProduct)
    }

    return (
        <ProfileScreen>
            <div className="">
                <div className="flex m-24 flex-wrap ">
                    <ModalProduct>
                        <form onSubmit={onSubmit}>
                            <TextField
                                obrigatorio={true}
                                placeholder='Image'
                                onChange={evento => setImage(evento.target.value)}
                                value={image}
                                type='e-mail'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <TextField
                                obrigatorio={true}
                                placeholder='Image'
                                onChange={evento => setNameProduct(evento.target.value)}
                                value={nameProduct}
                                type='e-mail'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1' texto='Enviar' />
                        </form>
                    </ModalProduct>
                    
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard />

                </div>
            </div>
        </ProfileScreen>
    )
}