import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState,useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"
import axios from 'axios'
/**
    Informações sobre a empresa de transporte e logística responsável.(normal)
    Data e hora do carregamento dos produtos.(date)
    Data e hora do descarregamento dos produtos.(date)
    Rota percorrida durante o transporte. (origem e destino)(normal)(normal)
    Registro das condições de transporte (temperatura, umidade, etc.).(texto bloco)
*/

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


    const estilo = "flex justify-center"
    const campoTCSS = 'h-[40px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5'
    const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] rounded-lg font-semibold text-white mt-4 mx-4 hover:bg-verde_palido'

    const handleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className="px-10 py-6">
            {isFormVisible ? (
                <form>
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
                    <div className="flex justify-evenly">
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
                    <div className="flex">
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
                        <div className="flex justify-evenly">
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