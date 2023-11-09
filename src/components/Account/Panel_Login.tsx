import { useContext, useState } from 'react'
import TextField from '../Items_Forms/TextField'
import Button from '../Items_Forms/Button'
import Title from '../Items_Forms/Title'
import { Link } from 'react-router-dom'
import BasicModal from 'components/Modal/RecoverPassword'
import axios from 'axios'
import api from '../../axiosUrl'
import {GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup} from 'firebase/auth';
import { useNavigate } from "react-router-dom"
//import {auth} from '../../services/firebase'
import { PanelPropsOverrides } from '@mui/x-data-grid'

const campoTCSS = 'h-[50px] max-lg:h-[40px] bg-neutral-50 rounded-xl max-lg:rounded-lg shadow px-6 my-3'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 max-lg:mt-2 text-lg max-lg:text-base'
const botaoTCSS = 'bg-verde_folha w-full h-[50px] max-lg:h-[40px] rounded-xl max-lg:rounded-lg text-xl max-lg:text-base font-bold text-white mt-1 hover:bg-verde_palido'


const [error, setError] = useState(null as any);
const [showLoading, setShowLoading] = useState(false);
const [showRecoverPasswordMessage, setShowRecoverPasswordMessage] = useState(false);


export default function PanelLogin() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate()
 
    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        api.post( '/login', {//verifica login
            email: email, //campo do email no front
            password: senha, //campo password no front
        })
            .then(
                response => {
                    console.log(email)
                    console.log(senha)
                    if (response.data.fail) {//pega o fail do json; fail===true]
                        {loginError ? setLoginError(loginError) : setLoginError(!loginError)}
                        console.log('erro: ' + response.data.error)//pega o error: do json
                    } else {
                        if (response.data.User.UserRole && response.data.User.UserRole.length === 0) {
                            // O usuário não possui nenhum UserRole
                            console.log('O usuário não possui nenhum UserRole');
                            localStorage.setItem('token', response.data.token); //armazena o token no local                            
                            localStorage.setItem('photo', response.data.User.photo)
                            localStorage.setItem('name', response.data.User.name)
                            navigate('/'); //faz o usuario retornar a página inicial
                        } 
                        localStorage.setItem('id', response.data.User.id)
                        localStorage.setItem('photo', response.data.User.photo)
                        localStorage.setItem('name', response.data.User.name)
                        localStorage.setItem('id_role', response.data.User.UserRole[0].id_role)

                        //local de pegar variavel ------------------------
                        const photoStorage = localStorage.getItem('photo');
                        const idStorage = localStorage.getItem('id');
                        const roleStorage = localStorage.getItem('id_role');
                        const nameStorage = localStorage.getItem('name');
                        // ---------------------------------

                        console.log(response.data.token)//se usuário existir
                        localStorage.setItem('token', response.data.token); //armazena o token no local
                        axios.defaults.headers["authorization"] = `Bearer ${response.data.token}`

                        navigate('/'); //faz o usuario retornar a página inicial
                    }
                }
            )
            .catch((error) => {
                console.log(error);
        });
    }

    /**
     * const authentication = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup (auth, provider)
        .then((result) =>{
            console.log(result);
        })
        .catch((error) => {
            console.log(error)
        });
    }
     */
    //erri
    const recoverPassword = () => {
        setShowLoading(true);
        //props.services.recoverPassword(
          //form.email.value
        //)
        //.then(() => {
         // setShowRecoverPasswordMessage(true);
         // setShowLoading(false);
       // })
        //.catch((error : string) => {
         // setError(error);
         // setShowLoading(false);
        //})
      }
    


     
    return (
        <div className='flex flex-col items-center'>
            <Title texto='Entre' />
            <div className='h-auto w-[450px] max-lg:w-[350px] bg-verde_folha bg-opacity-50 rounded-lg p-8'>
                <form className='w-full' onSubmit={handleSubmit}>
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
                    {loginError ? <p className='text-red-600 font-medium italic text-sm'>Dados incorretos!</p> : ''}
                    <Button botaoCSS={botaoTCSS} texto='Entrar' />
                </form>

                {/** Link de recuperação de senha, divisão e autenticação */}
                <div className='space-y-2 mt-1 max-lg:mt-3 '>
                    <BasicModal>
                        <TextField
                            obrigatorio={true}
                            placeholder='E-mail'
                            onChange={evento => setEmail(evento.target.value)}
                            valor={email}
                            tipo='e-mail'
                            campoCSS='h-[50px] max-lg:h-[40px] bg-neutral-50 rounded-xl max-lg:rounded-lg shadow px-6 my-3 border border-verde_escuro'
                            inputCSS={inputTCSS}
                        />
                        {/**Redefinir senha */}
                        <button
                            type="button"
                            className='clear'
                            data-testid="recover-password-button"
                            //disabled={!isEmailValid(form.email.value)}
                            onClick={recoverPassword}>
                            Recuperar senha
                        </button>

                        botaoCSS='bg-verde_escuro w-full h-[50px] max-lg:h-[40px] rounded-xl max-lg:rounded-lg text-xl max-lg:text-base font-bold max-lg:font-semibold text-white mt-1 hover:bg-green-900' texto='Enviar' />
                    </BasicModal>
                    {/** Ativa o popup */}
                    <div className='h-[2px] w-full bg-white opacity-70' />
                    {/** Autenticação da Google */}
                    {/**<Button botaoCSS={botaoTCSS} texto='Logar com conta Google' onClick={authentication} /> */}
                </div>
            </div>

            <div className='flex mt-4 w-full justify-center font-bold text-xl max-lg:text-base'>
                <p className='flex text-white mr-2'>Não possui conta? </p>
                <Link to='/sessao' className='flex text-verde_folha underline'>Cadastre-se</Link>
            </div>
        </div>
    )
}