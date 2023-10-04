import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from 'components/Items_Forms/Button';
import TextField from 'components/Items_Forms/TextField';
import { useState } from 'react';

export default function RegisterReport(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const [nomeComercial, setNomeComercial] = useState("")
    const [cnpj, setCnpj] = useState("")

    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    return(
        <div className='bg-preto py-28'>
            <Container maxWidth="sm">
                <Box sx={{
                    bgcolor: '#cfe8fc',
                    height: '70vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div className="bg-red-300 font-montserrat flex flex-col justify-center items-center py-4">
                        
                        <div className='w-full h-52 bg-yellow-200'>Bloco</div>

                        <div className="px-24">
                            <form className='w-full'>
                                {/** Campo Nome */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Nome comercial'
                                    onChange={evento => setNomeComercial(evento.target.value)}
                                    valor={nomeComercial}
                                    tipo='text'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/** Campo CNPJ */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='CNPJ'
                                    onChange={evento => setCnpj(evento.target.value)}
                                    valor={cnpj}
                                    tipo='text'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/** Campo e-mail */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='E-mail'
                                    onChange={evento => setEmail(evento.target.value)}
                                    valor={email}
                                    tipo='e-mail'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/** Campo senha */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Senha'
                                    onChange={evento => setSenha(evento.target.value)}
                                    valor={senha}
                                    tipo='password'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/** Campo confirmar senha */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Confirmar senha'
                                    onChange={evento => setSenhaVerificada(evento.target.value)}
                                    valor={senhaVerificada}
                                    tipo='password'
                                    campoCSS={campoTCSS}
                                    inputCSS={inputTCSS}
                                />

                                <Button botaoCSS={botaoTCSS} texto='Cadastre-se' />
                            </form>
                        </div>
                    </div>

                </Box>
            </Container>
        </div>
    )
}