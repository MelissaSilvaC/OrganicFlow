import TitleTimeLine from "components/Cards/TitleTimeLine";
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AccordionDetails from '@mui/material/AccordionDetails';
import StageI from "components/Stages/StageI";
import StageIII from "components/Stages/StageIII";
import StageIV from "components/Stages/StageIV";
import StageV from "components/Stages/StageV";
import StageCard from "components/Cards/StageCard";
import StageII  from "components/Stages/StageII";
import { useState } from "react";
import Medal_I from '../../assets/img/Medals/Medal_I.png'
import Medal_II from '../../assets/img/Medals/Medal_II.png'
import Medal_III from '../../assets/img/Medals/Medal_III.png'
import Medal_IV from '../../assets/img/Medals/Medal_IV.png'
import Medal_V from '../../assets/img/Medals/Medal_V.png'
import Medal_OF from '../../assets/img/Medals/ofMedal.png'

export default function TimeLine() {
    const baseBG = { background: 'white' }
    const noBG = { background: 'none' }
    const [medals, setMedals] = useState([
        { id: 1, showMedal: false },
        { id: 2, showMedal: false },
        { id: 3, showMedal: false },
        { id: 4, showMedal: false },
        { id: 5, showMedal: false },
        // Adicione mais objetos conforme necessário para cada StageCard
    ]);
    const [reports, setReports] = useState([
        { id: 1, showReport: false },
        { id: 2, showReport: false },
        { id: 3, showReport: false },
        { id: 4, showReport: false },
        { id: 5, showReport: false }
    ]);
    const allMedalsShown = medals.every((medal) => medal.showMedal);

    // A função handleMedal recebe o cardId como argumento
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

    return (
        <div className="bg-preto pt-[80px] pb-5">
            <div className="flex">
                <TitleTimeLine />
                {/* Exibe a imagem quando todas as medalhas estiverem exibidas */}
                {allMedalsShown && (
                    <div className="w-28 h-28 max-md:w-20 max-md:h-20 bg-cover flex self-center ml-12"
                        style={{ backgroundImage: `url(${Medal_OF})` }}
                    />
                )}
            </div>

            <div className="text-white font-medium ml-24 max-md:ml-10 my-12 text-lg">
                <p>ID: (parametro ID)</p>
                <p>(parametro data)</p>
                <p>Endereço do fornecedor: (parametro Fornecedor)</p>
                <p>Número do lote: (parametro Lote)</p>
            </div>

            <Container maxWidth="sm">
                <Box sx={{
                    width: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div className="font-montserrat flex justify-center items-center py-16">
                        <div>
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
                                        handleMedal={() => handleMedal(1)} 
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
                        </div>
                    </div>
                </Box>
            </Container>

            
        </div>
    )
}
