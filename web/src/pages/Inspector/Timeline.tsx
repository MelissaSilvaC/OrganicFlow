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

// transform hover:shadow-2xl transition duration-300 ease-in-out

/**
 * TIME LINE
 * 
 * --Acordeão
 * É um acordeão com cada estágio da cadeia de produção
 * Ao expandir o acordeão, irá mostrar os campos preenchidos(o relatório)
 * 
 * --Com relatório e Sem relatório
 * Durante o processo de cadastro dos relatórios, vai aparecer, por meio das cores, se está abilitada(com relatório) ou desabilitada(sem)
 * Quando desabilitada, vai aparecer um botão para cadastrar o relatório
 * Quando abilitado, vai aprecer a consulta do relatório(componentes separados) 
 * 
 */

export default function TimeLine() {
    const colorBase = { background: 'white'}

    return (
        <div className="bg-preto pt-[80px] pb-5">
            <TitleTimeLine />

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
                                <Accordion sx={{ background: 'none' }}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Produção Agrícola"
                                    />
                                    <AccordionDetails sx={{ background: 'white'}}> <StageI /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ background: 'none' }}>
                                    <StageCard 
                                        month="Mes"
                                        day="00"
                                        stageName="Processamento e Embalagem"
                                    />
                                    <AccordionDetails sx={colorBase}> <StageII /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ background: 'none' }}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Transporte e Logística"
                                    />
                                    <AccordionDetails sx={colorBase}> <StageIII /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ background: 'none' }}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Armazenamento e Distribuição"
                                    />
                                    <AccordionDetails sx={colorBase}> <StageIV /> </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ background: 'none' }}>
                                    <StageCard
                                        month="Mes"
                                        day="00"
                                        stageName="Varejo e Consumo"
                                    />
                                    <AccordionDetails sx={colorBase}> <StageV /> </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </Box>
            </Container>

        </div>
        
    )
}
