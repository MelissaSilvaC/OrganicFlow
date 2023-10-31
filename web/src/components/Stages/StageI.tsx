import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState, useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import InfoField from "./InfoField"
import axios from 'axios'
import Accordion from "@mui/material/Accordion"
import StageCard from "components/Cards/Titles/Stage-card"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import Medal from '../../assets/img/Medals/Medal_I.png'

const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3 max-sm:text-sm'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
const estilo = "flex justify-center"

export default function StageI() {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [dataPlantio, setDataPlantio] = useState("")
    const [dataColheita, setDataColheita] = useState("")
    //const [insumos, setInsumos] = useState([])
    const [insumos, setInsumos] = useState("")
    const [praticas, setPraticas] = useState("")

    const [medal, setMedal] = useState(false);
    const [report, setReport] = useState(false);

    const [isFormVisible, setIsFormVisible] = useState(true);
    const url = window.location.href;
    const idlinha = url.split("/").pop();

    useEffect(() => {
        axios.get(`https://organicflow-server.vercel.app/linha/${idlinha}`)
            .then(response => {
                const { nome, local, dt_plantio, dt_colheita, insumo, praticas, form } = response.data.Relatorio1[0];
                setNome(nome);
                setLocalizacao(local);
                setDataPlantio(dt_plantio);
                setDataColheita(dt_colheita);
                setInsumos(insumo);
                setPraticas(praticas);
                setIsFormVisible(form);

                // console.log(response.data.Relatorio1)
                // console.log(response.data.Relatorio1.nome)
                // console.log(nome+'aaaaaaa')
            })
            .catch((error) => {
                console.log(error);
            });
        // console.log('aa')

    }, []);

    const handleForm = (dataPlantio: string, dataColheita: string, insumos: string, praticas: string, nome: string, localizacao: string) => {
        // Inverta o estado isFormVisible para alternar entre formulário e grupo de campos
        setIsFormVisible(!isFormVisible);

        // e.preventDefault(); 
        axios.post('https://organicflow-server.vercel.app' + '/relatorio1', {
            nome: nome,
            local: localizacao,
            dt_plantio: dataPlantio,
            dt_colheita: dataColheita,
            insumo: insumos,
            praticas: praticas,
            id_linha: idlinha
        })
            .then(response => console.log(response))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        < Accordion sx={{background: 'none'}} >
            <StageCard
                month="Mes"
                day="00"
                stageName="Produção Agrícola"
                report={report}
                medal={medal} // VALOR BOOLEANO DA MEDALHA
                Num_medal={Medal}
                //Consultar relatorio,exibir medalha
            />
            <AccordionDetails sx={{
                [`@media (min-width: 640px)`]: { background: 'white' },
                [`@media (max-width: 640px)`]: { background: 'white', width: '25rem' }
            }}>
                {/**StageI */}
                <div className="px-10 max-sm:px-2 py-6">
                    {isFormVisible ? (
                        <form className="max-sm:text-sm">
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setNome(evento.target.value)}
                                label="Nome do produtor ou empresa responsável"
                                valor={nome}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setLocalizacao(evento.target.value)}
                                label="Endereço da propriedade ou fazenda orgânica"
                                valor={localizacao}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <div className={dataTCSS}>
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataPlantio(evento.target.value)}
                                    label="Data de início do plantio"
                                    valor={dataPlantio}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataColheita(evento.target.value)}
                                    label="Data prevista para colheita"
                                    valor={dataColheita}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                            </div>
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setInsumos(evento.target.value)}
                                label="Lista de insumos orgânicos utilizados"
                                valor={insumos}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextArea
                                obrigatorio={true}
                                onChange={evento => setPraticas(evento.target.value)}
                                label="Registro de práticas de manejo sustentável e controle de pragas"
                                valor={praticas}
                                campoCSS={"bg-neutral-50 rounded-xl shadow px-6 my-3"}
                                inputCSS={inputTCSS}
                            />
                            <div className="flex max-sm:flex-col max-sm:items-center">
                                <Button
                                    botaoCSS={botaoTCSS}
                                    texto='Medalha'
                                    onClick={() => { setMedal(!medal) }}
                                />
                                <Button
                                    botaoCSS={botaoTCSS}
                                    texto='Enviar relatório'
                                    onClick={() => {
                                        setReport(!report)
                                        handleForm(dataPlantio, dataColheita, insumos, praticas, nome, localizacao)
                                    }}
                                />
                            </div>
                        </form>)
                        :
                        (
                            <div>
                                <InfoField
                                    label="Nome do produtor ou empresa responsável"
                                    valor={nome}
                                />
                                <br />
                                <InfoField
                                    label="Localização geográfica da propriedade ou fazenda orgânica"
                                    valor={localizacao}
                                />
                                <br />
                                <div className={dataTCSS}>
                                    <InfoField
                                        label="Data de início do plantio"
                                        valor={dataPlantio}
                                        estilo={estilo}
                                    />
                                    <InfoField
                                        label="Data prevista para colheita"
                                        valor={dataColheita}
                                        estilo={estilo}
                                    />
                                </div>
                                <br />
                                <InfoField
                                    label="Lista de insumos orgânicos utilizados (adubos, fertilizantes, etc.)"
                                    valor={insumos}
                                />
                                <br />
                                <InfoField
                                    label="Registro de práticas de manejo sustentável e controle de pragas"
                                    valor={praticas}
                                />
                            </div>
                        )}
                </div >
            </AccordionDetails>
        </Accordion >
    )
       
}