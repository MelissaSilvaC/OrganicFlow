import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';

const style = {
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
};

export default function ModalRecoverPassword({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <a onClick={ handleOpen } className='text-white text-lg opacity-70 mt-2 underline cursor-pointer'> Esqueceu a senha? </a>
            <ModalScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </ModalScreen>
        </div>
    );
}
