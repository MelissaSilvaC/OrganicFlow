import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import Button from 'components/Items_Forms/Button';
import { TfiClose } from 'react-icons/tfi';
import { LuPencil } from 'react-icons/lu';

export default function ModalProfile({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='w-8 h-8 max-sm:w-7 max-sm:h-7 rounded-full bg-verde_folha flex justify-center' onClick={handleOpen}>
                <LuPencil className='w-5 h-5 max-sm:w-4 max-sm:h-4 flex self-center stroke-white' />
            </button>
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
                        width: 450,
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
                    {children}
                </Box>
            </ModalScreen>
        </div>
    );
}