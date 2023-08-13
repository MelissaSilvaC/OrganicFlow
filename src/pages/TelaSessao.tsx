import fundoSessao from '../assets/img/fundo_login.jpg'
import logoBranca from '../assets/img/logo branca c. letras.png'
import Empresas from './Empresa/Empresas'

export default function TelaSessao() {

    const labelTCSS = 'text-neutral-50 text-xl font-bold'
    const campoTCSS = 'w-full h-[50px] bg-zinc-300 rounded-[15px] shadow px-6'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'

    return (
        <div>
            <div className='bg-cover w-screen h-screen relative' style={{backgroundImage: `url(${fundoSessao})`}}>

                <img src={logoBranca} alt="logo do OrganicFlow" className=' w-60 h-50' />

                <div className='flex justify-center'>

                    {/** painel com formulário do login, cadastro, e recuperação de senha */}

                    {/** LOGIN */}
                    <form>
                        <div className="w-[453px] h-auto px-5 py-5 pb-10 bg-neutral-100 bg-opacity-30 rounded-[25px] flex flex-col space-y-9" >

                            <div>
                                <p className="text-3xl text-center text-white font-extrabold"> Bem vindo de volta!</p>
                                <p className="text-xl text-center text-white font-medium m-1">Faça login na sua conta</p>
                            </div>

                            {/** Campo e-mail */}
                            <div className='flex flex-col'>
                                <label className={labelTCSS}>E-mail</label>
                                <div className={campoTCSS}>
                                    <input className={inputTCSS} />
                                </div>
                            </div>

                            {/** Campo senha */}
                            <div className='flex flex-col'>
                                <label className={labelTCSS}>Senha</label>
                                <div className={campoTCSS}>
                                    <input className={inputTCSS} />
                                </div>
                            </div>

                            {/** Divisão e link */}
                            <div>
                                <div className="w-[404px] h-[0px] border border-white mb-1"></div>
                                <div className="text-neutral-50 text-sm font-medium">
                                    Não tem uma conta? <a href="#" className="hover:underline hover:cursor-pointer font-bold">Cadastre-se</a>
                                </div>
                            </div>


                            {/** Botão */}
                            <div>
                                <button className='w-full h-[52px] bg-lime-700 rounded-[18px] shadow text-white text-xl font-bold hover:cursor-pointer hover:bg-lime-800'>
                                    Entrar
                                </button>
                            </div>

                        </div>
                    </form>

                </div>

                <div className='w-screen h-[350px] absolute bottom-0 bg-gradient-to-t from-black to-transparent' />
            </div>
        </div>
    )
}
