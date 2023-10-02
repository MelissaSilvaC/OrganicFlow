import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function Accordion(){
    const relatorio = 'bg-blue-200 h-[120px] w-[650px] flex transform hover:shadow-2xl transition duration-300 ease-in-out '
    const data = 'bg-blue-400 h-full w-[30%] text-2xl font-medium flex flex-col justify-center items-center '
    const texto = 'w-full flex items-center ml-12 '
    const divisoria = <div className='bg-white h-1' />
    const espaco = <div className='w-5' />
    
    return (
        <Container maxWidth="sm">
            <Box sx={{
                bgcolor: '#cfe8fc',
                height: '70vh',
                width: '50vh',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className="bg-red-400 font-montserrat flex justify-center items-center">


                    <div className="px-16">

                        <Link to='/'>
                            <section className={`${relatorio} rounded-t-2xl`}>
                                <div className={`${data} rounded-ss-2xl`}>
                                    <p>Mes</p>
                                    <p>00</p>
                                </div>
                                <div className={texto}> <p>Produção Agrícola</p> </div>
                                <div className='bg-red-200 h-full w-[30%]' />
                                {espaco}
                            </section>
                        </Link>
                        {divisoria}
                        <Link to='/'>
                            <section className={relatorio}>
                                <div className={data}>
                                    <p>Mes</p>
                                    <p>00</p>
                                </div>
                                <div className={texto}> <p>Processamento e Embalagem</p> </div>
                                <div className='bg-red-200 h-full w-[30%]' />
                                {espaco}
                            </section>
                        </Link>
                        {divisoria}
                        <Link to='/'>
                            <section className={relatorio}>
                                <div className={data}>
                                    <p>Mes</p>
                                    <p>00</p>
                                </div>
                                <div className={texto}> <p>Transporte e Logística</p> </div>
                                <div className='bg-red-200 h-full w-[30%]' />
                                {espaco}
                            </section>
                        </Link>
                        {divisoria}
                        <Link to='/'>
                            <section className={relatorio}>
                                <div className={data}>
                                    <p>Mes</p>
                                    <p>00</p>
                                </div>
                                <div className={texto}> <p>Armazenamento e Distribuição</p> </div>
                                <div className='bg-red-200 h-full w-[30%]' />
                                {espaco}
                            </section>
                        </Link>
                        {divisoria}
                        <Link to='/'>
                            <section className={`${relatorio} rounded-b-2xl`}>
                                <div className={`${data} rounded-es-2xl`}>
                                    <p>Mes</p>
                                    <p>00</p>
                                </div>
                                <div className={texto}> <p>Varejo e Consumo</p> </div>
                                <div className='bg-red-200 h-full w-[30%]' />
                                {espaco}
                            </section>
                        </Link>
                    </div>
                </div>

            </Box>
        </Container>
    )
}