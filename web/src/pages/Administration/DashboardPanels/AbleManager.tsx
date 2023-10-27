import InfoManagerCard from "components/Cards/InfoCards/Manager";
import TitleComplaint from "components/Cards/Titles/Title-complaint";
import { FiSearch } from 'react-icons/fi';
import empresa from '../../../assets/img/logoExample.png'
import { useState, useEffect } from "react";
import axios from 'axios'

export default function AbleManager() {
    const [gerentes, setGerentes] = useState<any[]>([]);
    const [gerentesvalidos, setGerentesValidos] = useState<any[]>([]);
    useEffect(() => {

        axios.get(`http://localhost:3000/gerente`)
            .then(response => {

                const gerentes = response.data.map((item: any) => ({
                    id: item.id,
                    photo: item.photo,
                    nome: item.name,
                    cnpj: item.cnpj,
                    email: item.email
                }));

                setGerentes(gerentes);
                console.log(gerentes)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
        // console.log('aa')

        axios.get(`http://localhost:3000/gerentevalido`)
            .then(response => {

                const gerentesvalidos = response.data.map((item: any) => ({
                    id: item.user.id,
                    photo: item.user.photo,
                    nome: item.user.name,
                    cnpj: item.user.cnpj,
                    email: item.user.email
                }));

                setGerentesValidos(gerentesvalidos);
                console.log(gerentesvalidos)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <TitleComplaint titulo="Validar gerentes" estilo="max-sm:pt-0"/>
            <div className="text-white px-20 max-sm:px-2">
                <div className="flex justify-between max-sm:flex-col max-sm:px-5">
                    <p className="text-2xl pb-4 max-sm:text-xl">Gerentes não validados</p>

                    <div className='w-[400px] max-sm:w-[300px] h-11 bg-neutral-100 rounded-[50px] flex px-6 mb-8'>
                        <input className='bg-transparent focus:outline-none grow' placeholder='Pesquisar...' />
                        <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                            <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap">
                    {gerentes?.map((gerente) => (
                        <InfoManagerCard
                            onClick={() => {}}
                            photo={gerente.photo}
                            name={gerente.nome}
                            email={gerente.email}
                            cnpj={gerente.cnpj} />
                    ))}
                </div>
            </div>

            <div className="bg-cinza_escuro h-0.5 my-20" />

            <div className="text-white px-20 max-sm:px-2 max-sm:mb-20">
                <div className="flex justify-between max-sm:flex-col max-sm:px-5">
                    <p className="text-2xl pb-4 max-sm:text-xl">Gerentes validados</p>

                    <div className='w-[400px] max-sm:w-[300px] h-11 bg-neutral-100 rounded-[50px] flex px-6 mb-8'>
                        <input className='bg-transparent focus:outline-none grow' placeholder='Pesquisar...' />
                        <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                            <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {gerentesvalidos?.map((gerentevalidos) => (

                        <InfoManagerCard
                            onClick={() => {}}
                            photo={gerentevalidos.photo}
                            name={gerentevalidos.nome}
                            email={gerentevalidos.email}
                            cnpj={gerentevalidos.cnpj} />
                    ))}
                </div>
            </div>
        </>
    )
}