import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState, useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import InfoField from "./InfoField"
import Accordion from "@mui/material/Accordion"
import StageCard from "components/Cards/Titles/Stage-card"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import api from '../../axiosUrl'
import logmes from './logica_mes'

const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3 max-sm:text-sm'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
const estilo = "flex justify-center"

const url = window.location.href;
const idlinha = url.split("/").pop();
export default function StageIII() {
    const [nomeTransporte, setNomeTransporte] = useState("")
    const [nomeLogistica, setNomeLogistica] = useState("")
    const [dataCarregamento, setDataCarregamento] = useState("")
    const [dataDescarregamento, setDataDescarregamento] = useState("")
    const [rotaPercorrida, setRotaPercorrida] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

    const [date, setDate] = useState("")
    const [medal, setMedal] = useState(false);
    const [report, setReport] = useState(false);

    useEffect(() => {
        const url = window.location.href;
        const id = url.split("/").pop();
        api.get(`/linha/${id}`)
            .then(response => {
                const { nome, dt_carregamento, dt_descarregamento, origem, destino, praticas, form, date } = response.data.Relatorio3[0];
                setNomeTransporte(nome);
                setDataCarregamento(dt_carregamento);
                setDataDescarregamento(dt_descarregamento);
                setNomeLogistica(origem);
                setRotaPercorrida(destino);
                setPraticas(praticas);
                setDate(date)
                setIsFormVisible(form);

                if (nome || dt_carregamento || dt_descarregamento || origem || destino || praticas) {
                    setReport(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const partes = date.split("/");
    const dia = partes[0];
    const mes = partes[1];

    const nomeDoMes = logmes(Number(mes));

    const handleForm = (dataCarregamento: string,
        dataDescarregamento: string,
        praticas: string,
        nome: string,
        origem: string,
        destino: string,
        ) => {
        setIsFormVisible(!isFormVisible);
    
        const data = {
            id_linha: idlinha,
            nome: nome,
            praticas: praticas,
            dt_carregamento: dataCarregamento,
            dt_descarregamento: dataDescarregamento,
            origem: origem,
            destino: destino,
        };
    
        api.post('/relatorio3', data)
        .then(response => console.log(response)) // se for bem-sucedido 
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <Accordion sx={{ background: 'none' }}>
            <StageCard
               month={nomeDoMes}//mudar data de criaçaõ do bgl
               day={dia}//mudar
                stageName="Transporte e Logística"
                report={report}

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
                                onChange={evento => setNomeTransporte(evento.target.value)}
                                label="Nome da empresa de transporte"
                                valor={nomeTransporte}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <div className={dataTCSS}>
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataCarregamento(evento.target.value)}
                                    label="Data do carregamento dos produtos"
                                    valor={dataCarregamento}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataDescarregamento(evento.target.value)}
                                    label="Data do descarregamento dos produtos"
                                    valor={dataDescarregamento}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                            </div>
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setRotaPercorrida(evento.target.value)}
                                label="Destino do carregamento"
                                valor={rotaPercorrida}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextArea
                                obrigatorio={true}
                                onChange={evento => setPraticas(evento.target.value)}
                                label="Registro das condições de transporte (temperatura, umidade, etc.)"
                                valor={praticas}
                                campoCSS={" bg-neutral-50 rounded-xl shadow px-6 my-3"}
                                inputCSS={inputTCSS}
                            />
                            <div className="flex max-sm:items-center">
                                <Button
                                    botaoCSS={botaoTCSS}
                                    texto='Enviar relatório'
                                    onClick={() => {
                                        setReport(!report)
                                        handleForm(dataCarregamento, dataDescarregamento, praticas, nomeTransporte, nomeLogistica, rotaPercorrida);
                                    }}
                                />
                            </div>
                        </form>)
                        : (
                            <div>
                                <InfoField
                                    label="Nome da empresa de transporte"
                                    valor={nomeTransporte}
                                />
                                <br />
                                <div className={dataTCSS}>
                                    <InfoField
                                        label="Data do carregamento dos produtos"
                                        valor={dataCarregamento}
                                        estilo={estilo}
                                    />
                                    <InfoField
                                        label="Data do descarregamento dos produtos"
                                        valor={dataDescarregamento}
                                        estilo={estilo}
                                    />
                                </div>
                                <br />
                                <InfoField
                                    label="Destino do carregamento"
                                    valor={rotaPercorrida}
                                />
                                <br />
                                <InfoField
                                    label="Registro das condições de transporte"
                                    valor={praticas}
                                />
                            </div>
                        )}

                </div>
            </AccordionDetails>
        </Accordion>

    )
}