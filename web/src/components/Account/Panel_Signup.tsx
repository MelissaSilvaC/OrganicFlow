import { useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'
import IUser from 'types/IUser'
import { useNavigate } from "react-router-dom"

export default function PanelSignup() {

    {/** useStates */ }
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const navigate = useNavigate()
    //const { cadastrarDados, erro, sucesso } = usePost()

    {/** Estilos */ }
    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuarioC: IUser = {
            email: email,
            password: senha,
        }

        if(senha === senhaVerificada){
            try {
                //cadastrarDados({ url: 'clinica', dados: clinica });
                navigate('/')
            } catch (erro) {
                erro && alert('Erro ao cadastrar os dados')
            }
        }else {
            alert('senhas incompatíveis')
        }
        
    }

    return (
        <div>
            <Title texto='Cadastre-se'/>

            <div className='flex justify-center'>
                {/** Espaço destinado ao formulário */}
                <div className='h-auto w-[450px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
                    <form className='w-full' onSubmit={handleSubmit}>
                        {/** Campo e-mail */}
                        <TextField
                            obrigatorio={true}
                            placeholder='E-mail'
                            onChange={setEmail}
                            value={email}
                            type='e-mail'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />

                        {/** Campo senha */}
                        <TextField
                            obrigatorio={true}
                            placeholder='Senha'
                            onChange={setSenha}
                            value={senha}
                            type='password'
                            campoCSS={campoTCSS}
                            inputCSS={inputTCSS}
                        />

                        {/** Campo confirmar senha */}
                        <TextField
                            obrigatorio={true}
                            placeholder='Confirmar senha'
                            onChange={setSenhaVerificada}
                            value={senhaVerificada}
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