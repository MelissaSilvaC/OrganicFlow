import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"

/**
    Nome do centro de processamento e embalagem.(normal)
    Localização do centro de processamento e embalagem.(normal)
    Data de processamento(date)
    Data de embalagem dos alimentos orgânicos.(date)
    Lista de ingredientes e materiais de embalagem utilizados.(array)
    Registro dos procedimentos de higienização e manuseio.(texto bloco)
*/

export default function StageII({ handleMedal, handleReport }: IHandle) {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [dataProcessamento, setDataProcessamento] = useState("")
    const [dataEmbalagem, setDataEmbalagem] = useState("")
    //const [material, setMaterial] = useState([])
    const [material, setMaterial] = useState("")
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
                        label="Nome do centro de processamento e embalagem"
                        valor={nome}
                        tipo='text'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <br />
                    <TextField
                        obrigatorio={true}
                        onChange={evento => setLocalizacao(evento.target.value)}
                        label="Localização do centro de processamento e embalagem"
                        valor={localizacao}
                        tipo='text'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <br />
                    <div className="flex justify-evenly">
                        <TextField
                            obrigatorio={true}
                            onChange={evento => setDataProcessamento(evento.target.value)}
                            label="Data de processamento dos alimentos"
                            valor={dataProcessamento}
                            tipo='date'
                            labelCSS='flex justify-center'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />
                        <TextField
                            obrigatorio={true}
                            onChange={evento => setDataEmbalagem(evento.target.value)}
                            label="Data de embalagem dos alimentos"
                            valor={dataEmbalagem}
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
                            label="Nome do produtor ou empresa responsável"
                            valor={nome}
                        />
                        <br />
                        <InfoField
                            label="Localização geográfica da propriedade ou fazenda orgânica"
                            valor={localizacao}
                        />
                        <br />
                        <div className="flex justify-evenly">
                            <InfoField
                                label="Data de processamento dos alimentos"
                                valor={dataProcessamento}
                                estilo={estilo}
                            />
                            <InfoField
                                label="Data de embalagem dos alimentos"
                                valor={dataEmbalagem}
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
    )
}