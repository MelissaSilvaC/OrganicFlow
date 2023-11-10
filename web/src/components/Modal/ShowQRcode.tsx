import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import { TfiClose } from 'react-icons/tfi'
import Button from 'components/Items_Forms/Button';
import {useState} from 'react'
import api from '../../axiosUrl'

export default function ModalProduct({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const url = window.location.href;
    const idlinha = url.split("/").pop(); 
    const partes = url.split("/");
    const segundoNumero = partes[4];
    const [qrcode, setQrcode] = useState("")
    console.log(segundoNumero)

    const gerarQrcode=()=>{
        api.put(`lista/${segundoNumero}/linha/${idlinha}`)
            .then(response => {
                const qrcode= response.data.qrcode

                setQrcode(qrcode)
                console.log(qrcode)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
        // console.log('aa')
    
    }
    
    const handleSalvarQRCode = () => {
        const base64Image = qrcode
        const downloadLink = document.createElement('a');
        downloadLink.href = base64Image;
        downloadLink.download = 'qrcode.png'; // Nome do arquivo a ser baixado

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <div>
            <Button
                texto='Gerar QRcode'
                botaoCSS='bg-verde_folha font-semibold max-sm:font-normal flex self-start rounded-xl py-3 max-sm:py-2 px-5 text-white hover:bg-verde_palido'
                onClick={() => {
                     handleOpen()
                        gerarQrcode()
                    }
                }
            />
            <ModalScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    [`@media (min-width: 640px)`]: {
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        borderRadius: '10px',
                        boxShadow: 24,
                        p: 4,
                    },
                    [`@media (max-width: 640px)`]: {
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 350,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        borderRadius: '10px',
                        boxShadow: 24,
                        p: 4,
                    }
                }}>
                    <div className='flex justify-end'>
                        <button onClick={handleClose}>
                            <TfiClose className='w-8 h-8 max-sm:w-6 max-sm:h-6 fill-gray-300' />
                        </button>
                    </div>
                    <div className='flex flex-col items-center mb-5'>
                        <img src={qrcode}/>
                    </div>
                    <Button
                    onClick={handleSalvarQRCode}
                    botaoCSS='bg-verde_escuro w-full max-lg:rounded-lg rounded-xl text-xl max-lg:text-base font-semibold text-white mt-1 hover:bg-green-900 h-[50px] max-lg:h-[40px]'
                    texto='Salvar QRcode'
                />
                </Box>
            </ModalScreen>
        </div>
    );
}
