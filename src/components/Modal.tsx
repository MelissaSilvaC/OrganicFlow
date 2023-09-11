import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from './Items_Forms/TextField';
import Button from '../../src/components/Items_Forms/Button';

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

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("")
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    return (
        <div>
            <a onClick={ handleOpen } className='text-white text-lg opacity-70 mt-2 underline cursor-pointer'> Esqueceu a senha? </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        obrigatorio={true}
                        placeholder='E-mail'
                        onChange={evento => setEmail(evento.target.value)}
                        value={email}
                        type='e-mail'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />
                    <Button botaoCSS={botaoTCSS} texto='Enviar' />
                </Box>
            </Modal>
        </div>
    );
}
