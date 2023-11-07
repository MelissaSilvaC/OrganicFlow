import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState, useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import InfoField from "./InfoField"
import axios from 'axios'
import Accordion from "@mui/material/Accordion"
import StageCard from "components/Cards/Titles/Stage-card"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import Medal from '../../assets/img/Medals/Medal_II.png'
import api from '../../axiosUrl'
import logmes from './logica_mes'

const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
const estilo = "flex justify-center"

export default function StageII() {
    const [nome, setNome] = useState("")
    const [local, setLocal] = useState("")
    const [dtProcessamento, setDtProcessamento] = useState("")
    const [dtEmbalagem, setDtEmbalagem] = useState("")
    //const [material, setMaterial] = useState([])
    const [material, setMaterial] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

    const [date, setDate] = useState("")
    const [medal, setMedal] = useState(false);
    const [report, setReport] = useState(false);
    
    const url = window.location.href;
    const idlinha = url.split("/").pop();

    useEffect(() => {
        const url = window.location.href;
        const id = url.split("/").pop();
        api.get(`/linha/${id}`)
            .then(response => {
                const { nome, local, ingrediente, praticas, dt_processamento, dt_embalagem, form ,date} = response.data.Relatorio2[0];
                setNome(nome);
                setLocal(local);
                setMaterial(ingrediente);
                setPraticas(praticas);
                setDtProcessamento(dt_processamento);
                setDtEmbalagem(dt_embalagem);
                setIsFormVisible(form);
                setDate(date)
                
                // console.log(response.data.Relatorio2);
                // console.log(response.data.Relatorio2[0].nome);
                // console.log(nome);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleClick = (e: SubmitEvent) => {
        e.preventDefault();
        setMedal(!medal);
      };


    const partes = date.split("/");
    const dia = partes[0];
    const mes = partes[1];

    const nomeDoMes = logmes(Number(mes));

    const handleForm = (dataPlantio: string, dataColheita: string, praticas: string, nome: string, localizacao: string,medal:Boolean) => {
        // Inverta o estado isFormVisible para alternar entre formulário e grupo de campos
        setIsFormVisible(!isFormVisible);

        // e.preventDefault(); 
        api.post('/relatorio2', {
            nome: nome,
            local: local,
            dt_processamento: dtProcessamento,
            dt_embalagem: dtEmbalagem,
            ingrediente: material,
            praticas: praticas,
            id_linha: idlinha,
            medal: medal
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        < Accordion sx={{ background: 'none' }} >
            <StageCard
                month={nomeDoMes}//mudar data de criaçaõ do bgl
                day={dia}//mudar
                stageName="Processamento e Embalagem"
                report={report}
                medal={medal} // VALOR BOOLEANO DA MEDALHA
                Num_medal={Medal}
            />
            <AccordionDetails sx={{
                [`@media (min-width: 640px)`]: { background: 'white' },
                [`@media (max-width: 640px)`]: { background: 'white', width: '25rem' }
            }}>
                <div className="px-10 max-sm:px-2 py-6">
                    {isFormVisible ? (
                        <form className="max-sm:text-sm">
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setNome(evento.target.value)}
                                label="Nome do centro de processamento e embalagem"
                                valor={nome}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setLocal(evento.target.value)}
                                label="Localização do centro de processamento e embalagem"
                                valor={local}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <div className={dataTCSS}>
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDtProcessamento(evento.target.value)}
                                    label="Data de processamento dos alimentos"
                                    valor={dtProcessamento}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDtEmbalagem(evento.target.value)}
                                    label="Data de embalagem dos alimentos"
                                    valor={dtEmbalagem}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                            </div>
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setMaterial(evento.target.value)}
                                label="Lista de ingredientes e materiais de embalagem utilizados"
                                valor={material}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextArea
                                obrigatorio={true}
                                onChange={evento => setPraticas(evento.target.value)}
                                label="Registro dos procedimentos de higienização e manuseio"
                                valor={praticas}
                                campoCSS={" bg-neutral-50 rounded-xl shadow px-6 my-3"}
                                inputCSS={inputTCSS}
                            />
                            <div className="flex max-sm:flex-col max-sm:items-center">
                                <Button
                                    botaoCSS={botaoTCSS}
                                    texto='Medalha'
                                    onClick={handleClick}
                                />
                                <Button
                                    botaoCSS={botaoTCSS}
                                    texto='Enviar relatório'
                                    onClick={() => {
                                        setReport(!report)
                                        handleForm(dtEmbalagem, dtEmbalagem, praticas, nome, local,medal)
                                    }}
                                />
                            </div>
                        </form>)
                        : (
                            <div>
                                <InfoField
                                    label="Nome do produtor ou empresa responsável"
                                    valor={nome}
                                />
                                <br />
                                <InfoField
                                    label="Localização geográfica da propriedade ou fazenda orgânica"
                                    valor={local}
                                />
                                <br />
                                <div className={dataTCSS}>
                                    <InfoField
                                        label="Data de processamento dos alimentos"
                                        valor={dtProcessamento}
                                        estilo={estilo}
                                    />
                                    <InfoField
                                        label="Data de embalagem dos alimentos"
                                        valor={dtEmbalagem}
                                        estilo={estilo}
                                    />
                                </div>
                                <br />
                                <InfoField
                                    label="Lista de ingredientes e materiais de embalagem utilizados"
                                    valor={material}
                                />
                                <br />
                                <InfoField
                                    label="Registro dos procedimentos de higienização e manuseio"
                                    valor={praticas}
                                />
                            </div>
                        )}
                </div>
            </AccordionDetails>
        </Accordion>

    )
}