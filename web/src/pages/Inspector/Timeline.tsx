import TitleTimeline from "components/Cards/Titles/Title-timeline";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import StageI from "components/Stages/StageI";
import StageIII from "components/Stages/StageIII";
import StageIV from "components/Stages/StageIV";
import StageV from "components/Stages/StageV";
import StageCard from "components/Cards/Titles/Stage-card";
import StageII from "components/Stages/StageII";
import { useState } from "react";
import Medal_I from '../../assets/img/Medals/Medal_I.png'
import Medal_II from '../../assets/img/Medals/Medal_II.png'
import Medal_III from '../../assets/img/Medals/Medal_III.png'
import Medal_IV from '../../assets/img/Medals/Medal_IV.png'
import Medal_V from '../../assets/img/Medals/Medal_V.png'
import Medal_OF from '../../assets/img/Medals/ofMedal.png'
import ModalComplaint from "components/Modal/RegisterComplaint";
import TextArea from "components/Items_Forms/TextArea";
import Button from "components/Items_Forms/Button";

interface Option {
    id: number;
    label: string;
}

export default function Timeline() {
    const baseBG = { 
        background: 'white',
        //width: '10rem'
    }
    const noBG = { background: 'none' }
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5'
    const [medals, setMedals] = useState([
        { id: 1, showMedal: false },
        { id: 2, showMedal: false },
        { id: 3, showMedal: false },
        { id: 4, showMedal: false },
        { id: 5, showMedal: false },
    ]);
    const [reports, setReports] = useState([
        { id: 1, showReport: false },
        { id: 2, showReport: false },
        { id: 3, showReport: false },
        { id: 4, showReport: false },
        { id: 5, showReport: false }
    ]);
    const [date, setDate] = useState("")
    const [target, setTarget] = useState("")
    const [description, setDescription] = useState("")
    const allMedalsShown = medals.every((medal) => medal.showMedal);
    const [argument, setArgument] = useState<Option | null>(null);
    const options: Option[] = [
        { id: 1, label: 'Falta de Conformidade Legal' },
        { id: 2, label: 'Inconsistência de Dados' },
        { id: 3, label: 'Problemas de Higiene e Segurança Alimentar' },
        { id: 4, label: 'Contaminação ou Adulteração' },
        { id: 5, label: 'Problemas Ambientais' },
        { id: 6, label: 'Violações Éticas' },
        { id: 7, label: 'Informações Falsas ou Enganosas' },
        { id: 8, label: 'Problemas de Qualidade do Produto' },
        { id: 9, label: 'Outro' },
    ];
    
    // Ela identifica qual StageCard deve ser atualizado com base no cardId
    const handleMedal = (cardId: number) => {
        setMedals((prevMedals) =>
            prevMedals.map((medal) =>
                medal.id === cardId ? { ...medal, showMedal: !medal.showMedal } : medal
            )
        );
    };

    const handleReport = (stageId: number) => {
        setReports((prevReports) =>
            prevReports.map((report) =>
                report.id === stageId ? { ...report, showReport: !report.showReport } : report
            )
        )
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = parseInt(event.target.value, 10);
        const selectedOption = options.find((option) => option.id === selectedOptionId);
        setArgument(selectedOption || null);
    };

    const onSubmit = () => {
        /**
         * Os seguintes dados serão enviados:
         * Data (essa data deve ser pega do sistema do pc)
         * Email do usuário (Temos que arrumar uma maneira de extrair os dados da sessão do usuário)
         * Argumento da denúncia
         * Descrição da denúncia
         */
    }

    const updateMedalStatus = (cardId: number, status: boolean) => {
        setMedals((prevMedals) =>
            prevMedals.map((medal) =>
                medal.id === cardId ? { ...medal, showMedal: status } : medal
            )
        );
    };


    return (
        <div className="bg-preto pt-[80px] pb-5">
            <div className="flex max-sm:flex-col">
                <TitleTimeline
                    bgProduct="bg"
                    txtProduct="Nome do produto"
                />

                {/* Exibe a imagem quando todas as medalhas estiverem exibidas */}
                {allMedalsShown && (
                    <div
                        className="w-28 h-28 max-md:w-20 max-md:h-20 bg-cover flex self-center max-sm:self-start max-sm:my-5 ml-12 max-sm:ml-5"
                        style={{ backgroundImage: `url(${Medal_OF})` }}
                    />
                )}
            </div>

            <div className="text-white font-medium ml-24 max-lg:ml-5 my-12 max-sm:my-1 text-lg max-lg:text-sm max-lg:font-normal">
                <p>ID: (parametro ID)</p>
                <p>(parametro data)</p>
                <p>Endereço do fornecedor: (parametro Fornecedor)</p>
                <p>Número do lote: (parametro Lote)</p>
            </div>

            <div className="pt-16 flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    {/** ESTAGIO 1 */}
                    <Accordion sx={noBG}>
                        <StageCard
                            month="Mes"
                            day="00"
                            stageName="Produção Agrícola"
                            report={reports.find((report) => report.id === 1)?.showReport}
                            medal={medals.find((medal) => medal.id === 1)?.showMedal} // Passe o estado individual
                            Num_medal={Medal_I}
                            handleMedal={() => handleMedal(1)} // Passe o id do StageCard
                            handleReport={() => handleReport(1)}
                        />
                        <AccordionDetails sx={baseBG}>
                            <StageI
                                handleMedal={() => updateMedalStatus(1, false)} // Exemplo com cardId 1 e status true
                                handleReport={() => handleReport(1)}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/** ESTAGIO 2 */}
                    <Accordion sx={noBG}>
                        <StageCard
                            month="Mes"
                            day="00"
                            stageName="Processamento e Embalagem"
                            report={reports.find((report) => report.id === 2)?.showReport}
                            medal={medals.find((medal) => medal.id === 2)?.showMedal} // Passe o estado individual
                            Num_medal={Medal_II}
                            handleMedal={() => handleMedal(2)} // Passe o id do StageCard
                            handleReport={() => handleReport(2)}
                        />
                        <AccordionDetails sx={baseBG}>
                            <StageII
                                handleMedal={() => handleMedal(2)}
                                handleReport={() => handleReport(2)}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/** ESTAGIO 3 */}
                    <Accordion sx={noBG}>
                        <StageCard
                            month="Mes"
                            day="00"
                            stageName="Transporte e Logística"
                            report={reports.find((report) => report.id === 3)?.showReport}
                            medal={medals.find((medal) => medal.id === 3)?.showMedal} // Passe o estado individual
                            Num_medal={Medal_III}
                            handleMedal={() => handleMedal(3)} // Passe o id do StageCard
                            handleReport={() => handleReport(3)}

                        />
                        <AccordionDetails sx={baseBG}>
                            <StageIII
                                handleMedal={() => handleMedal(3)}
                                handleReport={() => handleReport(3)}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/** ESTAGIO 4 */}
                    <Accordion sx={noBG}>
                        <StageCard
                            month="Mes"
                            day="00"
                            stageName="Armazenamento e Distribuição"
                            report={reports.find((report) => report.id === 4)?.showReport}
                            medal={medals.find((medal) => medal.id === 4)?.showMedal} // Passe o estado individual
                            Num_medal={Medal_IV}
                            handleMedal={() => handleMedal(4)} // Passe o id do StageCard
                            handleReport={() => handleReport(4)}
                        />
                        <AccordionDetails sx={baseBG}>
                            <StageIV
                                handleMedal={() => handleMedal(4)}
                                handleReport={() => handleReport(4)}
                            />
                        </AccordionDetails>
                    </Accordion>

                    {/** ESTAGIO 5 */}
                    <Accordion sx={noBG}>
                        <StageCard
                            month="Mes"
                            day="00"
                            stageName="Varejo e Consumo"
                            report={reports.find((report) => report.id === 5)?.showReport}
                            medal={medals.find((medal) => medal.id === 5)?.showMedal} // Passe o estado individual
                            Num_medal={Medal_V}
                            handleMedal={() => handleMedal(5)} // Passe o id do StageCard
                            handleReport={() => handleReport(5)}
                        />
                        <AccordionDetails sx={baseBG}>
                            <StageV
                                handleMedal={() => handleMedal(5)}
                                handleReport={() => handleReport(5)}
                            />
                        </AccordionDetails>
                    </Accordion>

                    <div className="flex my-6 space-x-8">
                        <Button
                            texto='Gerar QRcode'
                            botaoCSS='bg-verde_folha font-semibold flex self-start rounded-xl py-3 px-5 text-white hover:bg-verde_palido'
                            onClick={() => { }}
                        />

                        {/**Esse botão só deve aparecer para usuários comuns */}
                        <ModalComplaint>
                            <form>
                                <label>Argumento</label>
                                <div className='bg-neutral-50 rounded-xl shadow px-6 py-4 mt-2'>
                                    <select className='bg-transparent outline-none w-full rounded-2xl' onChange={handleSelectChange}>
                                        <option value="">Selecione uma opção</option>
                                        {options.map((option) => (
                                            <option key={option.id} value={option.id.toString()}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/**
                     * Se argument foi selecionado, ele pega o valor da frase com "{argument.label}"
                     * {argument && <p>Você selecionou: {argument.label}</p>} 
                     * */}
                                <br />
                                <TextArea
                                    obrigatorio={true}
                                    onChange={evento => setDescription(evento.target.value)}
                                    label="Descrição"
                                    valor={description}
                                    campoCSS={"bg-neutral-50 rounded-xl shadow px-6 my-3"}
                                    inputCSS={inputTCSS}
                                />
                                <Button
                                    botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900'
                                    texto='Enviar denúncia'
                                />
                            </form>
                        </ModalComplaint>
                    </div>
                </div>
            </div>
            
        </div>
    )
}