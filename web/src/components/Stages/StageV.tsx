import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState,useEffect } from "react"
import InfoField from "./InfoField"
import Accordion from "@mui/material/Accordion"
import StageCard from "components/Cards/Titles/Stage-card"
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails"
import Medal from '../../assets/img/Medals/Medal_V.png'
import api from '../../axiosUrl'
import logmes from './logica_mes'

const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3 max-sm:text-sm'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
const estilo = "flex justify-center"

const url = window.location.href;
const idlinha = url.split("/").pop();

export default function StageV() {
    const [nome, setNome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [dataChegada, setDataChegada] = useState("")
    const [dataValidade, setDataValidade] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

    const [date, setDate] = useState("")
    const [medal, setMedal] = useState(false);
    const [report, setReport] = useState(false);

    useEffect(() => {
        const url = window.location.href;
        const id = url.split("/").pop();
        api.get(`/linha/${id}`)
            .then(response => {
                const { nome, local, dt_chegada, dt_validade, form, medalha,date } = response.data.Relatorio5[0];
                setNome(nome);
                setEndereco(local);
                setDataChegada(dt_chegada);
                setDataValidade(dt_validade);
                setMedal(medalha);
                setIsFormVisible(form);
                setDate(date)
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
    
    const handleForm = async () => {
        try {
          const response = await api.post('/relatorio5', {
            nome,
            local: endereco,
            dt_chegada: dataChegada,
            medalha: medal,
            id_linha: idlinha,
            dt_validade: dataValidade
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
                month={nomeDoMes}//mudar data de criaçaõ do bgl
                day={dia}//mudar
                stageName="Varejo e Consumo"
                report={report}
                medal={!medal} // VALOR BOOLEANO DA MEDALHA
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
                                label="Nome dos pontos de venda ou estabelecimentos varejistas"
                                valor={nome}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <TextField
                                obrigatorio={true}
                                onChange={evento => setEndereco(evento.target.value)}
                                label="endereço dos pontos de venda ou estabelecimentos varejistas"
                                valor={endereco}
                                tipo='text'
                                campoCSS={campoTCSS}
                                inputCSS={inputTCSS}
                            />
                            <br />
                            <div className={dataTCSS}>
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataChegada(evento.target.value)}
                                    label="Data de chegada dos produtos"
                                    valor={dataChegada}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <TextField
                                    obrigatorio={true}
                                    onChange={evento => setDataValidade(evento.target.value)}
                                    label="Data de validade"
                                    valor={dataValidade}
                                    tipo='date'
                                    labelCSS='flex justify-center'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />
                            </div>
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
                                        handleForm()
                                    }}
                                />
                            </div>
                        </form>)
                        : (
                            <div>
                                <InfoField
                                    label="Nome dos pontos de venda ou estabelecimentos varejistas"
                                    valor={nome}
                                />
                                <br />
                                <InfoField
                                    label="endereço dos pontos de venda ou estabelecimentos varejistas"
                                    valor={endereco}
                                />
                                <br />
                                <div className={dataTCSS}>
                                    <InfoField
                                        label="Data de chegada do produto"
                                        valor={dataChegada}
                                        estilo={estilo}
                                    />
                                    <InfoField
                                        label="Data de validade do produto"
                                        valor={dataValidade}
                                        estilo={estilo}
                                    />
                                </div>
                            </div>
                        )}

                </div>
            </AccordionDetails>
        </Accordion>

    )
}