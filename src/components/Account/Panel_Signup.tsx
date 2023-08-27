import { useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'

export default function PanelSignup() {

    {/** useStates */ }
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    {/** Estilos */ }
    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    return (
        <div>
            <Title texto='Cadastre-se'/>

            <div className='flex justify-center'>
                {/** Espaço destinado ao formulário */}
                <div className='h-auto w-[450px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
                    <form className='w-full'>
                        {/** Campo e-mail */}
                        <TextField
                            obrigatorio={true}
                            placeholder='E-mail'
                            onChange={evento => setEmail(evento.target.value)}
                            value={email}
                            type='e-mail'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />

                        {/** Campo senha */}
                        <TextField
                            obrigatorio={true}
                            placeholder='Senha'
                            onChange={evento => setSenha(evento.target.value)}
                            value={senha}
                            type='password'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />

                        {/** Campo confirmar senha */}
                        <TextField
                            obrigatorio={true}
                            placeholder='Confirmar senha'
                            onChange={evento => setSenha(evento.target.value)}
                            value={senha}
                            type='password'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />

                        <Button botaoCSS={botaoTCSS} texto='Cadastre-se' />

                        {/** Link de recuperação de senha, divisão e autenticação */}
                        <div className='space-y-2 mt-5'>
                            <div className='h-[2px] w-full bg-white opacity-70' />
                            <Button botaoCSS={botaoTCSS} texto='Logar com conta Google' />
                        </div>
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