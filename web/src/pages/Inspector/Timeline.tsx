import TitleTimeLine from "components/Cards/TitleTimeLine";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AccordionSummary from '@mui/material/AccordionSummary';
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
        <div className="bg-preto h-full pt-[80px] pb-5">
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
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        sx={{
                                            background: '#80ab6b',
                                            height: '120px',
                                            width: '70rem',
                                            display: 'flex',
                                            padding: '0px',
                                            margin: '0px',
                                            borderRadius: '1rem 1rem 0rem 0rem',
                                        }}
                                    >
                                        <div className='bg-verde_escuro h-full w-[30%] py-[28px] text-2xl font-medium text-white flex flex-col justify-center items-center rounded-ss-2xl'>
                                            <p>Mes</p>
                                            <p>00</p>
                                        </div>
                                        <div className='w-full flex items-center ml-12 '> <p>Produção Agrícola</p> </div>
                                        <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                                        <div className='w-20' />
                                    </AccordionSummary>
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
