import TextField from "components/Items_Forms/TextField";
import Button from "components/Items_Forms/Button";
import { useState, useEffect } from "react";
import React from "react";
import empresa from '../assets/img/logoExample.png'
import ModalManager from "components/Modal/RegisterInspector";
import InspectorCard from "./Cards/InfoCards/Inspector";
import api from '../axiosUrl'
import IInspector from "types/IInspector";

export default function ManagementInspector() {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [users, setUsers] = useState<IInspector[]>([]);
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
        /**
         * api.post('/fiscal', {
            name: name,
            email: email,
            password: password
        })
            .then(response => console.log(response))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
         */
        const newInspector: IInspector = {
            id: users.length + 1, // Gere um ID único (apenas um exemplo, ajuste conforme necessário)
            name: name,
            email: email,
            photo: "" // Adicione uma lógica para lidar com a foto, se necessário
        };
        setUsers([...users, newInspector]);
        setName("");
        setEmail("");
        setPassword("");
    }
    console.log(idURL)

    /**
     * useEffect(() => {
        api.get(`/empresa/${idURL}`)
            .then(response => {
                console.log(response.data); // Verifique se os dados são o que você espera
                const usersData = response.data[0].userRole.map((item: { user: { id: number; name: string; email: string; photo: string; }; }) => ({
                    id: item.user.id, // Defina uma chave única (assumo 0 como padrão, ajuste conforme necessário)
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
     */

    return (
        <div className="p-0">
            <p className="text-white text-2xl max-sm:text-xl pb-8">Fiscais da empresa</p>
            <div className="flex flex-wrap">
                {perfil ?
                    <div className="text-white">
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
                        id={user.id}  // Use a chave única definida
                        photo={user.photo}
                        name={user.name}
                        email={user.email}
                    />
                ))}
            </div>
        </div>
    )
}