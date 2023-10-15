import logoEmpresa from '../../assets/img/logoExample.png'
import { FiSearch } from 'react-icons/fi';
import { FiFilter } from 'react-icons/fi';
import fundo from '../../assets/img/Fundo/field.png'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function ProfileScreen({ children }: { children?: React.ReactNode }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [photo, setPhoto] = useState('');
    const [local, setLocal] = useState('');

    useEffect(() => {
        
        const url = window.location.href;
        const id = url.split("/").pop(); // Isso assume que o ID está na última parte da URL

        axios.get('http://localhost:3000'+`/empresa/${id}`)
        .then(response => {
            const { name, email, company, cnpj, photo,local } = response.data[0];
            setNome(name);
            setEmail(email);
            setCompany(company);
            setCnpj(cnpj);
            setPhoto(photo);
            setLocal(local);
            
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });

    }, []);

    return (
        <div className='bg-preto'>
            <div className="h-[300px] bg-cover" style={{ backgroundImage: `url(${fundo})` }} />
            {/** Tela do perfil da empresa */}
            <div className="h-full">
                <div className="bg-verde_folha h-2" />

                {/** Perfil, bio, barra de pesquisa e filtros */}
                <div className='px-24 flex'>
                    {/** Perfil, nome, bio */}
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <img className="w-36 h-36 rounded-full top-[-55px] absolute" src={logoEmpresa} />
                        </div>
                        <div className='flex flex-col ml-[170px]'>
                            <p className='font-bold text-4xl text-white my-4'>{nome}</p>
                            <p className='text-lg text-white'>{email}</p>
                            {/* <p className='text-lg text-white pb-5'>Rua plantao, 123 - Penha/São Paulo - SP</p> */}
                            <p className='text-lg text-white pb-5'>{local}</p>
                            <p className='font-light w-[500px] text-md text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque modi aspernatur quisquam nam labore eveniet eligendi delectus voluptatum a doloribus dolor, facilis odit cumque. Mollitia, voluptas perferendis? Dolores, praesentium.</p>
                        </div>
                    </div>

                    {/**Barra de pesquisa*/}
                    <div className='flex justify-end w-full mt-4'>
                        <div className='w-[500px] h-11 bg-neutral-100 rounded-[50px] flex px-6'>
                            <input className='bg-transparent focus:outline-none grow' placeholder='Localize um produto' />
                            <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                                <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                            </div>
                        </div>
                        <FiFilter className='w-8 h-8 ml-5 stroke-white' />
                    </div>
                </div>

                {/** Conteúdo do perfil fiscal/empresa */}
                <div className='pb-16'>
                    {children}
                </div>
            </div>


        </div>
    )
}