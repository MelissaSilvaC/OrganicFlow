import Button from "components/Items_Forms/Button"
import TextField from "components/Items_Forms/TextField"
import { useState } from "react"
import IHandle from "types/IHandle"
import InfoField from "./InfoField"

export default function StageV({ handleMedal, handleReport }: IHandle) {
    const [nome, setNome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [dataChegada, setDataChegada] = useState("")
    const [dataValidade, setDataValidade] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(true);

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
    )
}