import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import TextArea from "components/Items_Forms/TextArea"

export function StageII() {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [dataProcessamento, setDataProcessamento] = useState("")
    const [dataEmbalagem, setDataEmbalagem] = useState("")
    const [material, setMaterial] = useState([])
    const [praticas, setPraticas] = useState("")

    const campoTCSS = 'h-[45px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-[20rem] h-[40px] rounded-lg text-lg font-semibold text-white mt-4 mx-4'

    const handleMedal = () => {
        console.log('funcionando')
    }

    const handleColors = () => {
        console.log('funcionando')
    }

    return (
        <>
        {/**
         * <ButtonCreateReport />
            <p>
                Nome do centro de processamento e embalagem.(normal)
                Localização do centro de processamento e embalagem.(normal)
                Data de processamento(date)
                Data de embalagem dos alimentos orgânicos.(date)
                Lista de ingredientes e materiais de embalagem utilizados.(array)
                Registro dos procedimentos de higienização e manuseio.(texto bloco)
            </p>
         */}
            <br />
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
                        labelCSS="flex justify-center"
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <TextField
                        obrigatorio={true}
                        onChange={evento => setDataEmbalagem(evento.target.value)}
                        label="Data de embalagem dos alimentos"
                        valor={dataEmbalagem}
                        tipo='date'
                        labelCSS="flex justify-center"
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
                        onClick={handleColors}
                    />
                </div>
            </form>
        </>
    )
}