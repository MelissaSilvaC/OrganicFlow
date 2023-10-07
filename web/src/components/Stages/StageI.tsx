import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import TextArea from "components/Items_Forms/TextArea"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"

export default function StageI({ handleMedal, handleReport }: IHandle) {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [dataPlantio, setDataPlantio] = useState("")
    const [dataColheita, setDataColheita] = useState("")
    //const [insumos, setInsumos] = useState([])
    const [insumos, setInsumos] = useState("")
    const [praticas, setPraticas] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

    const estilo = "flex justify-center"
    const campoTCSS = 'h-[40px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5'
    const botaoTCSS = 'bg-verde_folha w-[15rem] h-[35px] rounded-lg font-semibold text-white mt-4 mx-4 hover:bg-verde_palido'

    const handleForm = () => {
        // Inverta o estado isFormVisible para alternar entre formulário e grupo de campos
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className="px-10 py-6">
            {isFormVisible ? (
                < form >
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
                        label="Localização geográfica da propriedade ou fazenda orgânica"
                        valor={localizacao}
                        tipo='text'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <br />
                    <div className="flex justify-evenly">
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
                        label="Lista de insumos orgânicos utilizados (adubos, fertilizantes, etc.)"
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
                    <div className="flex">
                        <Button
                            botaoCSS={botaoTCSS}
                            texto='Medalha'
                            onClick={handleMedal} // Chama a função handleMedal do componente TimeLine
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
                        <div className="flex justify-evenly">
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
    )
}