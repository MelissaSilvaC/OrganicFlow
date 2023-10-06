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
import { StageII } from "components/Stages/StageII";
import { useState } from "react";
import Medal_I from '../../assets/img/Medals/Medal_I.png'
import Medal_II from '../../assets/img/Medals/Medal_II.png'
import Medal_III from '../../assets/img/Medals/Medal_III.png'
import Medal_IV from '../../assets/img/Medals/Medal_IV.png'
import Medal_V from '../../assets/img/Medals/Medal_V.png'
import Medal_OF from '../../assets/img/Medals/ofMedal.png'

/**
 * TIME LINE
 * 
 * --Acordeão
 * \É um acordeão com cada estágio da cadeia de produção\
 * Ao expandir o acordeão, irá mostrar os campos preenchidos(o relatório)
 * 
 * --Com relatório e Sem relatório
 * \Durante o processo de cadastro dos relatórios, vai aparecer, por meio das cores, se está abilitada(com relatório) ou desabilitada(sem)\
 * Quando desabilitada, vai aparecer o cadastro do relatório
 * Quando abilitado, vai aprecer a consulta do relatório
 * 
 */

export default function TimeLine() {
    const baseBG = { background: 'white'}
    const noBG = { background: 'none' }
    const [medal, setMedal] = useState(false)
    const [enableReport, setEnableReport] = useState(false)

    const handleMedal = () => {
        setMedal(!medal); // Inverte o valor da medalha
    }

    const handleColors = () => {
        // Aqui você pode adicionar a lógica para alterar o valor da variável 'enableReport'
        // por exemplo, toggle entre verdadeiro e falso
        setEnableReport(!enableReport);
    }

    return (
        <div className="bg-preto pt-[80px] pb-5">
            <div className="flex">
                <TitleTimeLine />
                <div
                    className="w-28 h-28 bg-cover flex self-center ml-12"
                    style={{backgroundImage:`url(${Medal_OF})`}}
                />
            </div>

            <div className="text-white font-medium ml-24 my-12">
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

                        <div className="px-24">
                            <div>
                                <Accordion sx={noBG}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Produção Agrícola"
                                        enableReport = {enableReport}
                                        medal={medal} // Passa o estado da medalha como prop
                                        Num_medal={Medal_I}
                                        //handleMedal={() => handleMedal("StageI")} 
                                        // Passa o nome do estágio como argumento
                                        
                                        //handleColors={() => handleColors("StageI")} 
                                        // Passa o nome do estágio como argumento
                                    />
                                    <AccordionDetails sx={baseBG}> <StageI handleMedal={handleMedal} handleColors={handleColors} /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={noBG}>
                                    <StageCard 
                                        month="Mes"
                                        day="00"
                                        stageName="Processamento e Embalagem"
                                        enableReport={enableReport}
                                        medal={medal}
                                        Num_medal={Medal_II}
                                        //handleMedal={() => handleMedal("StageII")}
                                        //handleColors={() => handleColors("StageII")}
                                    />
                                    <AccordionDetails sx={baseBG}> <StageII /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={noBG}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Transporte e Logística"
                                        enableReport={enableReport}
                                        medal={medal}
                                        Num_medal={Medal_III}
                                        //handleMedal={() => handleMedal("StageIII")}
                                        //handleColors={() => handleColors("StageIII")}
                                    />
                                    <AccordionDetails sx={baseBG}> <StageIII /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={noBG}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Armazenamento e Distribuição"
                                        enableReport={enableReport}
                                        medal={medal}
                                        Num_medal={Medal_IV}
                                        //handleMedal={() => handleMedal("StageIV")}
                                        //handleColors={() => handleColors("StageIV")}
                                    />
                                    <AccordionDetails sx={baseBG}> <StageIV /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={noBG}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Varejo e Consumo"
                                        enableReport={enableReport}
                                        medal={medal}
                                        Num_medal={Medal_V}
                                        //handleMedal={() => handleMedal("StageV")}
                                        //handleColors={() => handleColors("StageV")}
                                    />
                                    <AccordionDetails sx={baseBG}> <StageV /> </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>

                    </div>
                </Box>
            </Container>

        </div>
        
    )
}
