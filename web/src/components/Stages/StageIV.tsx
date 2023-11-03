import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState, useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import InfoField from "./InfoField"
import axios from 'axios'
import Accordion from "@mui/material/Accordion"
import StageCard from "components/Cards/Titles/Stage-card"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import Medal from '../../assets/img/Medals/Medal_IV.png'
import api from '../../axiosUrl'

const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3 max-sm:text-sm'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
const estilo = "flex justify-center"



export default function StageIV() {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [responsavel, setResponsavel] = useState("")
    const [dataEntrada, setDataEntrada] = useState("")
    const [dataSaida, setDataSaida] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);
    const url = window.location.href;
    const idlinha = url.split("/").pop();

    const [medal, setMedal] = useState(false);
    const [report, setReport] = useState(false);

 
    useEffect(() => {
        const url = window.location.href;
        const id = url.split("/").pop();
        axios.get(`https://organicflow-server.vercel.app/linha/${id}`)
            .then(response => {
                const { nome, local, responsavel, dt_entrada, dt_saida, praticas, form  } = response.data.Relatorio4[0];
                setNome(nome);
                setLocalizacao(local);
                setResponsavel(responsavel);
                setDataEntrada(dt_entrada);
                setDataSaida(dt_saida);
                setPraticas(praticas);

                console.log(response.data.Relatorio4);
                console.log(response.data.Relatorio4[0].nome);
                console.log(nome);
                setIsFormVisible(form);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleForm = async () => {
        try {
          const response = await api.post('/relatorio4', {
            nome,
            localizacao,
            praticas,
            responsavel,
            dataEntrada,
            dataSaida,
            medal,
            id_linha:idlinha
          });
          
          console.log('Registro criado com sucesso:', response.data);
          setIsFormVisible(!isFormVisible); // Alterna a visibilidade do formulário
        } catch (error) {
          console.error('Erro ao criar registro:', error);
        }
      };

    return (
        <Accordion sx={{ background: 'none' }}>
            <StageCard
                month="Mes"
                day="00"
                stageName="Armazenamento e Distribuição"
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
                                label="Nome do centro de armazenamento"
                                valor={nome}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setLocalizacao(evento.target.value)}
                                label="Localização do centro de armazenamento"
                                valor={localizacao}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setResponsavel(evento.target.value)}
                                label="Responsável pelo armazenamento e movimentação dos alimentos"
                                valor={responsavel}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <div className={dataTCSS}>
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataEntrada(evento.target.value)}
                                    label="Data de entrada dos produtos no armazém"
                                    valor={dataEntrada}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataSaida(evento.target.value)}
                                    label="Data de saída dos produtos no armazém"
                                    valor={dataSaida}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                            </div>
                            <br />
                            <TextArea
                                obrigatorio={true}
                                onChange={evento => setPraticas(evento.target.value)}
                                label="Registro das condições de armazenamento (temperatura, umidade, etc.)"
                                valor={praticas}
                                campoCSS={" bg-neutral-50 rounded-xl shadow px-6 my-3"}
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
                                        handleForm()
                                    }}
                                />
                            </div>
                        </form>)
                        : (
                            <div>
                                <InfoField
                                    label="Nome do centro de armazenamento"
                                    valor={nome}
                                />
                                <br />
                                <InfoField
                                    label="Localização do centro de armazenamento"
                                    valor={localizacao}
                                />
                                <br />
                                <InfoField
                                    label="Responsável pelo armazenamento e movimentação dos alimentos"
                                    valor={responsavel}
                                />
                                <br />
                                <div className={dataTCSS}>
                                    <InfoField
                                        label="Data de entrada dos produtos no armazém"
                                        valor={dataEntrada}
                                        estilo={estilo}
                                    />
                                    <InfoField
                                        label="Data de saída dos produtos no armazém"
                                        valor={dataSaida}
                                        estilo={estilo}
                                    />
                                </div>
                                <br />
                                <InfoField
                                    label="Registro das condições de armazenamento (temperatura, umidade, etc.)"
                                    valor={praticas}
                                />
                            </div>
                        )}
                </div>
            </AccordionDetails>
        </Accordion>

    )
}