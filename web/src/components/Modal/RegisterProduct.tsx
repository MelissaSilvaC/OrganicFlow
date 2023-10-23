import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import { GrAddCircle } from 'react-icons/gr';
import { TfiClose } from 'react-icons/tfi'

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

    return (
        <div>
            <button onClick={handleOpen} className="w-40 h-40 max-sm:w-24 max-sm:h-24 m-5 max-sm:m-2.5 flex flex-col justify-center items-center rounded-[50px] max-sm:rounded-full border-4 max-sm:border-2 border-verde_escuro bg-verde_palido transform hover:shadow-2xl hover:bg-lime-600 transition duration-300 ease-in-out" >
                <GrAddCircle className='w-20 h-20 max-sm:w-12 max-sm:h-12' />
            </button>
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
