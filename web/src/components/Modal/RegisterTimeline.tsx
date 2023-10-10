import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import Button from 'components/Items_Forms/Button';
import { TfiClose } from 'react-icons/tfi';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export default function ModalTimeline({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                texto='Cadastrar linha do tempo'
                botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold text-white px-5 shadow hover:bg-verde_palido'
            />
            <ModalScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex justify-end'>
                        <button onClick={handleClose}>
                            <TfiClose className='w-8 h-8 fill-gray-300' />
                        </button>
                    </div>
                    {children}
                </Box>
            </ModalScreen>
        </div>
    );
}