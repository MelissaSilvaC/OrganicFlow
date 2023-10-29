import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState, useEffect } from "react";
import React from "react";
import empresa from '../assets/img/logoExample.png'
import ModalManager from "components/Modal/RegisterInspector";
import InspectorCard from "./Cards/InfoCards/Inspector";
import axios from 'axios'

export default function ManagementInspector(){
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {

            

            console.log('Fiscal cadastrado!');
        } else {

            
            console.log('Falha ao cadastrar');
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
    const [produtos, setProdutos] = useState<any[]>([]);
    useEffect(() => {

        const url = window.location.href;
        const id = url.split("/").pop();
        axios.get(`http://localhost:3000/fiscal/${id}`)
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

    return (
        <div className="p-0">
            <p className="text-white text-2xl max-sm:text-xl pb-8">Fiscais da empresa</p>

            <div className="flex flex-wrap">
                <div className="text-white w-[25rem] max-sm:w-[13rem] max-sm:h-[6rem] border-2 max-sm:border border-slate-600 rounded flex justify-center items-center m-5 hover:bg-cinza_escuro hover:cursor-pointer">
                    <ModalManager>
                        <form onSubmit={onSubmit}>
                            {/* Renderiza a imagem se imageURL estiver definida */}
                            <div className="flex justify-center">
                                <div className="w-44 h-44 max-sm:w-28 max-sm:h-28 rounded-full border-2 border-verde_escuro bg-cover">
                                    {imageURL && <img src={imageURL} alt="Imagem Enviada" className="rounded-[50px]" />}
                                </div>
                            </div>
                            {/* Label e botão */}
                            <div className="flex flex-col my-2">
                                <label className="font-medium" >Imagem:</label>
                                <label
                                    htmlFor='file-input'
                                    className='custom-file-upload bg-verde_escuro w-full h-[40px] rounded-lg font-semibold text-white mt-1 flex justify-center items-center cursor-pointer hover:bg-green-900'>
                                    Selecione uma imagem
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
                                placeholder='Nome do fiscal'
                                onChange={evento => setName(evento.target.value)}
                                valor={name}
                                tipo='text'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <TextField
                                obrigatorio={true}
                                placeholder='E-mail'
                                onChange={evento => setEmail(evento.target.value)}
                                valor={email}
                                tipo='email'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <TextField
                                obrigatorio={true}
                                placeholder='Senha'
                                onChange={evento => setPassword(evento.target.value)}
                                valor={password}
                                tipo='password'
                                campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                inputCSS={inputTCSS}
                            />
                            <Button botaoCSS='bg-verde_escuro w-full max-lg:rounded-lg rounded-xl text-xl max-lg:text-base font-semibold text-white mt-1 hover:bg-green-900 h-[50px] max-lg:h-[40px]' texto='Cadastrar' />
                        </form>
                    </ModalManager>
                </div>

                {/**
                 * Função map listando cards com as contas dos fiscais
                 */}
                    <InspectorCard
                        photo={empresa}
                        name="Rita"
                        email="seedsprout@email.com"
                        password="9765765"
                    />
                    <InspectorCard
                        photo={empresa}
                        name="Rita"
                        email="seedsprout@email.com"
                        password="9765765"
                    />
                    <InspectorCard
                        photo={empresa}
                        name="Rita"
                        email="seedsprout@email.com"
                        password="9765765"
                    />
                    <InspectorCard
                        photo={empresa}
                        name="Rita"
                        email="seedsprout@email.com"
                        password="9765765"
                    />
            </div>
        </div>
    )
}