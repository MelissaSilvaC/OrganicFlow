import * as React from 'react';
import Box from '@mui/material/Box';
import ModalScreen from '@mui/material/Modal';
import { TfiClose } from 'react-icons/tfi';
import { MdReportGmailerrorred } from 'react-icons/md';

export default function ModalComplaint({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button 
            onClick={handleOpen}
                className="text-red-600 font-semibold max-sm:font-medium flex self-start rounded-xl p-3 max-sm:p-2 border-2 max-sm:border border-red-600 hover:animate-pulse">
                <MdReportGmailerrorred className='w-6 h-6 stroke-red-600 mr-2' />
                Denunciar
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
                    {children}
                </Box>
            </ModalScreen>
        </div>
    );
}