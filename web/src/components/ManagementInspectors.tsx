import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState, useEffect } from "react";
import React from "react";
import empresa from '../assets/img/logoExample.png'
import ModalManager from "components/Modal/RegisterInspector";
import InspectorCard from "./Cards/InfoCards/Inspector";
import api from '../axiosUrl'

export default function ManagementInspector(){
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const url = window.location.href;
    const idURL = url.split("/").pop();
    const idStorage = localStorage.getItem('id');
    let perfil = true
    if (idURL != idStorage) { perfil = false }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        api.post('/fiscal', {
            name: name,
            email: email,
            password: password
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => {
            console.log(error);
        });
    }

    const [users, setUsers] = useState<{ id: number; name: string; email: string; photo:string; }[]>([]);


    useEffect(() => {
        api.get(`/empresa/${idURL}`)
            .then(response => {
                console.log(response.data); // Verifique se os dados são o que você espera
                const usersData = response.data.UserRole.map((item: { user: { id: any; name: any; email: any; photo: any; }; }) => ({
                    id: item.user.id,
                    name: item.user.name,
                    email: item.user.email,
                    photo: item.user.photo
                }));
                setUsers(usersData);
            })
            .catch(error => {
                console.error('Erro ao obter os dados:', error);
            });
    }, []);
    

    //ESSA FUNÇÃO É PARA SABER SE O INPUT SELECIONOU A IMAGEM
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0]; // Obtenha o primeiro arquivo selecionado
        if (selectedImage) {
            setImage(selectedImage); // Atualize o estado com o objeto File
            setImageURL(URL.createObjectURL(selectedImage));
        }
    };
   
    return (
        <div className="p-0">
            <p className="text-white text-2xl max-sm:text-xl pb-8">Fiscais da empresa</p>
            <div className="flex flex-wrap">
                {perfil ?
                <div className="text-white w-[25rem] max-sm:w-[13rem] max-sm:h-[6rem] border-2 max-sm:border border-slate-600 rounded flex justify-center items-center m-5 hover:bg-cinza_escuro hover:cursor-pointer">
                    
                        <ModalManager>
                            <form onSubmit={onSubmit}>
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
                : ""}

                {users.map(user => (
                    <InspectorCard
                    key={user.id}
                    id={user.id}
                    photo={user.photo}
                    name={user.name}
                    email={user.email}
                    />
                ))}
            </div>
        </div>
    )
}