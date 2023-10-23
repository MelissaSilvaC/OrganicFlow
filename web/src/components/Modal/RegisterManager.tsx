import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import Button from 'components/Items_Forms/Button';
import { TfiClose } from 'react-icons/tfi';
import { LuPencil } from 'react-icons/lu';

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

export default function ModalManager({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                texto='Cadastrar fiscal'
                botaoCSS='bg-zinc-500 h-[40px] rounded font-semibold max-sm:font-medium text-white px-10 max-sm:px-6 py-6 max-sm:py-4 shadow flex items-center'
            />
            {/**botaoCSS='bg-zinc-500 h-[40px] rounded font-semibold text-white px-10 py-6 shadow flex items-center' */}

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