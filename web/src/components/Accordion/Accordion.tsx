import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import BasicAccordion from './MUIAccordion';

export default function Accordion(){
    const relatorio = 'bg-blue-200 h-[120px] w-[650px] flex transform hover:shadow-2xl transition duration-300 ease-in-out '
    const data = 'bg-blue-400 h-full w-[30%] text-2xl font-medium flex flex-col justify-center items-center '
    const texto = 'w-full flex items-center ml-12 '
    const divisoria = <div className='bg-white h-1' />
    const espaco = <div className='w-5' />
    
    return (
        <Container maxWidth="sm">
            <Box sx={{
                width: '50vh',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className="font-montserrat flex justify-center items-center py-16">

                    <div className="px-24">
                        <BasicAccordion />
                    </div>
                </div>

            </Box>
        </Container>
    )
}