import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// transform hover:shadow-2xl transition duration-300 ease-in-out

export default function BasicAccordion() {
    const data = 'bg-verde_escuro h-full w-[30%] text-2xl font-medium text-white flex flex-col justify-center items-center '
    const texto = 'w-full flex items-center ml-12 '
    const espaco = <div className='w-20' />

    const accordionStyle = {
        background: '#80ab6b',
        height: '120px', 
        width: '70rem', 
        display: 'flex',
        padding: '0px',
        margin: '0px',
    };

    return (
        <div>
            <Accordion sx={{ background: 'none', boxShadow: 'none'}}
            >
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
                        boxShadow: 'none', // Inicialmente, sem sombra
                    }}
                >
                    <div className={`${data} rounded-ss-2xl py-[28px]`}>
                        <p>Mes</p>
                        <p>00</p>
                    </div>
                    <div className={texto}> <p>Produção Agrícola</p> </div>
                    <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                    {espaco}
                </AccordionSummary>
                <AccordionDetails sx={{
                    background: 'white',
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={accordionStyle}
                >
                    <div className={`${data} py-[28px]`}>
                        <p>Mes</p>
                        <p>00</p>
                    </div>
                    <div className={texto}> <p>Processamento e Embalagem</p> </div>
                    <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                    {espaco}
                </AccordionSummary>
                <AccordionDetails sx={{
                    background: 'white',
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={accordionStyle}
                >
                    <div className={`${data} py-[28px]`}>
                        <p>Mes</p>
                        <p>00</p>
                    </div>
                    <div className={texto}> <p>Transporte e Logística</p> </div>
                    <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                    {espaco}
                </AccordionSummary>
                <AccordionDetails sx={{
                    background: 'white',
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={accordionStyle}
                >
                    <div className={`${data} py-[28px]`}>
                        <p>Mes</p>
                        <p>00</p>
                    </div>
                    <div className={texto}> <p>Armazenamento e Distribuição</p> </div>
                    <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                    {espaco}
                </AccordionSummary>
                <AccordionDetails sx={{
                    background: 'white',
                }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </p>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ background: 'none', boxShadow: 'none' }}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={accordionStyle}
            >
                    <div className={`${data} py-[28px]`}>
                    <p>Mes</p>
                    <p>00</p>
                </div>
                    <div className={texto}> <p>Varejo e Consumo</p> </div>
                <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
                {espaco}
            </AccordionSummary>
            <AccordionDetails sx={{background: 'white'}}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}