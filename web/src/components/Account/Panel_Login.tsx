import { useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'
import BasicModal from 'components/Modal/RecoverPassword'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function PanelLogin() {
    {/** useStates */ }
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

    axios.post('http://localhost:3001'+'/login',{//verifica login
        email: email, //campo do email no front
        password: senha, //campo password no front
      })
      .then(
          response => {
              if (response.data.fail) {//pega o fail do json; fail===true]
                  console.log('email e senha incorretos')
                  console.log('erro: '+ response.data.error)//pega o error: do json
                  let error = response.data.error
              } else {
                console.log(response.data.token)//se usuário existir
                  localStorage.setItem('token', response.data.token); //armazena o token no local
                   axios.defaults.headers[
                     "authorization"
                   ]=`Bearer ${response.data.token}`
                   
                  navigate('/');//faz o usuario retornar a página inicial
                  
              }
          } 
        )
      .catch((error) => {
        console.log(error);
      });
    
    {/** Estilos */ }
    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const botaoTCSS = 'bg-verde_folha w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1'

    return (
        <div>
            <Title texto='Entre' />
            
            <div className='h-auto w-[450px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
                <form className='w-full'>
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

                    <Button botaoCSS={botaoTCSS} texto='Entrar' />
                </form>

                {/** Link de recuperação de senha, divisão e autenticação */}
                <div className='space-y-2 mt-1'>
                    <BasicModal>
                        <TextField
                            obrigatorio={true}
                            placeholder='E-mail'
                            onChange={evento => setEmail(evento.target.value)}
                            valor={email}
                            tipo='e-mail'
                            campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                            inputCSS={inputTCSS}
                        />
                        <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1' texto='Enviar' />
                    </BasicModal>
                    {/** Ativa o popup */}


                    <div className='h-[2px] w-full bg-white opacity-70' />
                    {/** Autenticação da Google */}
                    <Button botaoCSS={botaoTCSS} texto='Logar com conta Google' />
                </div>

            </div>

            <div className='flex mt-4 w-full justify-center font-bold text-xl'>
                <p className='flex text-white mr-2'>Não possui conta? </p>
                <Link to='/sessao' className='flex text-verde_folha underline'>Cadastre-se</Link>
            </div>
        </div>
    )
}