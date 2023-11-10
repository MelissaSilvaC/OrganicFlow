import InfoManagerCard from "components/Cards/InfoCards/Manager";
import TitleComplaint from "components/Cards/Titles/Title-complaint";
import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar";
import api from '../../../axiosUrl'

export default function AbleManager() {
    const [gerentes, setGerentes] = useState<any[]>([]);
    const [gerentesvalidos, setGerentesValidos] = useState<any[]>([]);
    const [searchGerente, setSearchGerente] = useState("");
    const [searchValidado, setSearchValidado] = useState("");

    useEffect(() => {
        api.get(`/gerente`)
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
            .catch((error) => {
                console.log(error);
            });

        api.get(`/gerentevalido`)
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

    const gerenteFiltrado = gerentes.filter((gerente) =>
        gerente.email.toLowerCase().includes(searchGerente.toLowerCase())
    );

    const validadoFiltrado = gerentesvalidos.filter((validado) =>
        validado.email.toLowerCase().includes(searchValidado.toLowerCase())
    );

    return (
        <>
            <TitleComplaint titulo="Validar gerentes" estilo="max-sm:pt-0"/>
            <div className="text-white px-20 max-sm:px-2">
                <div className="flex justify-between max-sm:flex-col max-sm:px-5">
                    <p className="text-2xl pb-4 max-sm:text-xl">Gerentes não validados</p>
                    
                    <SearchBar
                        placeholder='Pesquisar gerente por email'
                        val={searchGerente}
                        change={(e) => setSearchGerente(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap">
                {gerenteFiltrado?.map((gerente) => (
                        <InfoManagerCard 
                        onClick={() => {
                            console.log(gerente.id)
                            const token = localStorage.getItem('token')
                            console.log(token)
                            api.post('/gerente', {
                                id_user: gerente.id,
                            }, {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            })
                            .then(response => console.log(response))//se for sucedido 
                            .catch((error) => {
                                console.log(error);
                            });
                            
                        }}
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

                    <SearchBar
                        placeholder='Pesquisar gerente por email'
                        val={searchValidado}
                        change={(e) => setSearchValidado(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap">
                    {validadoFiltrado?.map((gerentevalidos) => (
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