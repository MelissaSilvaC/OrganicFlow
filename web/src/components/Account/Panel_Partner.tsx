import { useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'

export default function PanelPartner() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const [nomeComercial, setNomeComercial] = useState("")
    const [cnpj, setCnpj] = useState("")

    {/**
     * axios.post('http://localhost:3000' + '/user', {
        email: email,
        password: senha,
        company: nomeComercial
        //cnpj:cnpj
    })
            .then(response => console.log(response + ' dados enviados'))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
      */}
      
    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    return (
        <div>
            {/** Título e imagens vetorizas */}
            <Title texto='Seja parceiro'/>

            <div className='flex justify-center'>
                {/** Espaço destinado ao formulário */}
                <div className='h-auto w-[450px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
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

            <div className='flex mt-4 w-full justify-center font-bold text-xl'>
                <p className='flex text-white mr-2'>Já possui conta? </p>
                <Link to='/sessao/login' className='flex text-verde_folha underline'>Entre</Link>
            </div>

        </div>
    )
}