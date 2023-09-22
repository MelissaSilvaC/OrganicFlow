import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { GrAddCircle } from 'react-icons/gr';

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

export default function ModalProduct({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    var ButtonCSS = "w-48 h-48 m-5 flex flex-col justify-center items-center rounded-[50px] border-4 border-verde_escuro bg-verde_palido"

    return (
        <div>
            <button onClick={handleOpen} className={ButtonCSS} >
                <GrAddCircle className='w-24 h-24' />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
