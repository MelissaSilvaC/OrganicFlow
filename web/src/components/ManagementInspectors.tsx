import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState, useEffect } from "react";
import React from "react";
import InfoManagerCard from "components/Cards/InfoCards/Manager";
import empresa from '../assets/img/logoExample.png'
import ModalManager from "components/Modal/RegisterManager";
import InspectorCard from "./Cards/InfoCards/Inspector";

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

    return (
        <div className="flex flex-wrap ">
            <p className="text-white text-2xl pb-8">Fiscais da empresa</p>

            <div className="flex flex-wrap">
                <div className="text-white w-[25rem] border-2 border-slate-600 rounded flex justify-center items-center m-5 hover:bg-cinza_escuro hover:cursor-pointer">
                    <ModalManager>
                        <form onSubmit={() => { }}>
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
                            <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900' texto='Cadastrar' />
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
            {/** 
                 * Botão para criar e listagem dos cards (semelhante aos do gerente) com um icone para deletar
                */}
        </div>
    )
}