import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState,useEffect } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"
import axios from 'axios'

export default function StageIV({ handleMedal, handleReport }: IHandle) {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [responsavel, setResponsavel] = useState("")
    const [dataEntrada, setDataEntrada] = useState("")
    const [dataSaida, setDataSaida] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

        
    useEffect(() => { 
        const url = window.location.href;
        const id = url.split("/").pop(); 
        axios.get(`http://localhost:3000/linha/${id}`)
        .then(response => {
            const { nome, local, responsavel, dt_entrada, dt_saida, praticas,form } = response.data.Relatorio4[0];
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
                            onClick={handleMedal} // Chama a função handleMedal do componente Timeline
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
    )
}