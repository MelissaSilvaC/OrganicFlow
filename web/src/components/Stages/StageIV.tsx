import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"
/**
    Nome do centro de armazenamento.(normal)
    Localização do centro de armazenamento.(normal)
    Responsável pelo armazenamento e movimentação dos alimentos orgânicos.(normal)
    Data de entrada dos produtos no armazém.(date)
    Data de saída dos produtos no armazém.(date)
    Registro das condições de armazenamento (temperatura, umidade, etc.).(texto bloco)
*/

export default function StageIV({ handleMedal, handleReport }: IHandle) {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [responsavel, setResponsavel] = useState("")
    const [dataEntrada, setDataEntrada] = useState("")
    const [dataSaida, setDataSaida] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

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
                    <div className="flex justify-evenly">
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
                    <div className="flex">
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
                        <div className="flex justify-evenly">
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