import { useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'
import IUser from 'types/IUser'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function PanelSignup() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaVerificada, setSenhaVerificada] = useState("");
    const navigate = useNavigate()

    const cadastrarDados = ({ name, email, password }: IUser) => {
        console.log(name + email + password)
        axios.post('http://localhost:3000' + '/user', {
            name: name,
            email: email,
            password: password,
        })
            .then(response => console.log(response + ' dados enviados'))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
    }

    const campoTCSS = 'h-[50px] max-lg:h-[40px] bg-neutral-50 rounded-xl max-lg:rounded-lg shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-lg:mt-2 text-lg max-lg:text-base'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] max-lg:h-[40px] rounded-xl max-lg:rounded-lg text-xl max-lg:text-base font-bold text-white mt-1 hover:bg-verde_palido'

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        console.log(nome, email, senha)

        const usuarioC: IUser = {
            name: nome,
            email: email,
            password: senha,
        }

        if (senha === senhaVerificada) {
            try {
                cadastrarDados(usuarioC);
                navigate('/sessao/login')

            } catch (erro) {
                erro && alert('Erro ao cadastrar os dados')
            }

        } else {
            alert('senhas incompatíveis')
        }

    }

    return (
        <div className='flex flex-col items-center'>
            <Title texto='Cadastre-se' />
            <div className='h-auto w-[450px] max-lg:w-[350px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
                <form className='w-full' onSubmit={handleSubmit}>
                    <TextField
                        obrigatorio={true}
                        placeholder='Nome'
                        onChange={evento => setNome(evento.target.value)}
                        valor={nome}
                        tipo='text'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />

                    <TextField
                        obrigatorio={true}
                        placeholder='E-mail'
                        onChange={evento => setEmail(evento.target.value)}
                        valor={email}
                        tipo='text'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />

                    <TextField
                        obrigatorio={true}
                        placeholder='Senha'
                        onChange={evento => setSenha(evento.target.value)}
                        valor={senha}
                        tipo='password'
                        campoCSS={campoTCSS}
                        inputCSS={inputTCSS}
                    />

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

            <div className='flex mt-4 w-full justify-center font-bold text-xl max-lg:text-base'>
                <p className='flex text-white mr-2'>Já possui conta? </p>
                <Link to='/sessao/login' className='flex text-verde_folha underline'>Entre</Link>
            </div>

        </div>
    )
}