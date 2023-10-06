import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import TextArea from "components/Items_Forms/TextArea"

interface props{
    handleMedal : () => void
    handleColors : () => void
}

export default function StageI({ handleMedal, handleColors } : props){
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [dataPlantio, setDataPlantio] = useState("")
    const [dataColheita, setDataColheita] = useState("")
    const [insumos, setInsumos] = useState([])
    const [praticas, setPraticas] = useState("")
    
    const campoTCSS = 'h-[45px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-[20rem] h-[40px] rounded-lg text-lg font-semibold text-white mt-4 mx-4'

    return (
        <div className="px-10">
            {/**CADASTRO */}
            <br />
            <form>
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
                        labelCSS="flex justify-center"
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <TextField
                        obrigatorio={true}
                        onChange={evento => setDataColheita(evento.target.value)}
                        label="Data prevista para colheita"
                        valor={dataColheita}
                        tipo='date'
                        labelCSS="flex justify-center"
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
                    campoCSS={" bg-neutral-50 rounded-xl shadow px-6 my-3"}
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
                        onClick={handleColors} // Chama a função handleColors ao clicar no botão
                    />
                </div>
            </form>
        </div>
    )
}