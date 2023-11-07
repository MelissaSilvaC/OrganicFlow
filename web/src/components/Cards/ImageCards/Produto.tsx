import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextShadow from "./TextShadow";
import ModalUpdateProduct from 'components/Modal/UpdateProduct';
import TextField from 'components/Items_Forms/TextField';
import Button from 'components/Items_Forms/Button';

interface ProdutoProps{
    id:number;
    nome:string;
    photo:string;
}

const TestProduct:React.FC<ProdutoProps>=({ nome,photo,id}) => {
    const [hover, setHover] = useState(false);
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [nameProduct, setNameProduct] = useState("")
    const [produtos, setProdutos] = useState<any[]>([]);

    const url = window.location.href;
    const idURL = url.split("/").pop();
    const idStorage = localStorage.getItem('id');
    let perfil = true
    if (idURL != idStorage) { 
        perfil = false
    }else if(idStorage == '3'){
        perfil = false 
    }

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const onUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        
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
        <div>
            <div className='flex justify-end'>
                {perfil ?
                    <ModalUpdateProduct>
                        <form onSubmit={onUpdate}>
                            {/* Renderiza a imagem se imageURL estiver definida */}
                            <div className="flex justify-center">
                                <div className="w-44 h-44 max-sm:w-28 max-sm:h-28 flex rounded-[50px] max-sm:rounded-[30px] border-2 border-verde_escuro bg-cover">
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
                            <Button
                                botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900'
                                texto='Salvar Edição'
                            />
                        </form>
                    </ModalUpdateProduct>
                    : ""
                }
            </div>
            <Link to={`/fiscal/lista/${id}`}>
                <div
                    className="w-44 h-44 max-sm:w-28 max-sm:h-28 mx-3 mb-3 mt-0 max-sm:mx-1 max-sm:mb-1 flex flex-col justify-end rounded-[50px] max-sm:rounded-[30px] border-2 border-verde_escuro bg-verde_folha bg-cover"
                    style={{
                        backgroundImage: `url(${photo})`,
                        cursor: hover ? 'pointer' : 'auto'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover && (
                        <TextShadow nome={nome} />
                    )}
                </div>
            </Link>
        </div>
    )

}
export default TestProduct