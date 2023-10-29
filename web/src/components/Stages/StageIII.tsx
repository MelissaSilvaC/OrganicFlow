import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState,useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"
import axios from 'axios'

export default function StageIII({ handleMedal, handleReport }: IHandle) {
    const [nomeTransporte, setNomeTransporte] = useState("")
    const [nomeLogistica, setNomeLogistica] = useState("")
    const [dataCarregamento, setDataCarregamento] = useState("")
    const [dataDescarregamento, setDataDescarregamento] = useState("")
    const [rotaPercorrida, setRotaPercorrida] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

    useEffect(() => { 
        const url = window.location.href;
        const id = url.split("/").pop(); 
        axios.get(`http://localhost:3000/linha/${id}`)
        .then(response => {
            const { nome, dt_carregamento, dt_descarregamento, origem, destino, praticas,form } = response.data.Relatorio3[0];
            setNomeTransporte(nome);
            setDataCarregamento(dt_carregamento);
            setDataDescarregamento(dt_descarregamento);
            setNomeLogistica(origem);
            setRotaPercorrida(destino);
            setPraticas(praticas);
            
            // console.log(response.data.Relatorio3);
            // console.log(response.data.Relatorio3[0].nome);
            // console.log(nome);
            setIsFormVisible(form);
            
            
            handleReport()
            
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    const campoTCSS = 'h-[40px] max-sm:h-[35px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-sm:mt-1.5'
    const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] max-sm:h-[30px] rounded-lg font-semibold max-sm:font-normal text-white mt-4 mx-4 hover:bg-verde_palido'
    const dataTCSS = 'flex max-sm:flex-col justify-evenly max-sm:space-y-3'
    const estilo = "flex justify-center"

    const handleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
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
                        label="Rota percorrida durante o transporte (origem e destino)"
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
                    <div className="flex max-sm:flex-col max-sm:items-center">
                        <Button
                            botaoCSS={botaoTCSS}
                            texto='Medalha'
                            onClick={handleMedal}
                        />
                        <Button
                            botaoCSS={botaoTCSS}
                            texto='Enviar relatório'
                            onClick={() => {
                                handleReport()
                                handleForm()
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
                            label="Rota percorrida durante o transporte (origem e destino)"
                            valor={rotaPercorrida}
                        />
                        <br />
                        <InfoField
                            label="Registro das condições de transporte (temperatura, umidade, etc.)o"
                            valor={praticas}
                        />
                    </div>
                )}
            
        </div>
    )
}