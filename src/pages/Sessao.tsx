import logoBranca from '../assets/img/logo branca c. letras.png'
import fundoSessao from '../assets/img/fundo_login.jpg'

const campoTCSS = 'h-[50px] bg-zinc-300 rounded-lg shadow px-6'
const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'

export default function Sessao() {
    return (
        <div>
            <div className='bg-cover w-screen h-screen relative' style={{ backgroundImage: `url(${fundoSessao})` }}>

                {/** Painel lateral com o formulário de login/cadastro */}
                <div className='flex flex-row gap-5'>

                    {/** Forms de login */}
                    <div className='flex basis-1/2 flex-col justify-center items-center bg-black opacity-75 h-screen'>

                        {/** Título e imagens vetorizas */}
                        <div>
                            <p className='font-extrabold text-white text-5xl'>Entre</p>
                        </div>

                        {/** Espaço destinado ao formulário */}
                        <div className='h-[500px] w-[500px] flex justify-center bg-lime-800 rounded-xl'>
                            <form className='w-full'>
                                {/** #4C8F36 */}
                                {/** Campos */}
                                <div>

                                    <div className={campoTCSS}>
                                        <input className={inputTCSS} placeholder='Digite o seu e-mail' />
                                    </div>

                                    <div className={campoTCSS}>
                                        <input className={inputTCSS} />
                                    </div>

                                    <button className='bg-blue-200 w-full h-[50px] rounded-lg'>Entrar</button>
                                    <a href='' className=''>Esqueceu a senha?</a>
                                    <div></div>
                                    <button></button>
                                </div>
                            </form>
                        </div>

                        {/** Link de cadastro */}
                        <div>
                            <p>     <a></a>       </p>
                        </div>
                    </div>


                    {/** Logo */}
                    <div className='basis-2/3'>
                        <img src={logoBranca} className='h-[100px] w-[200px]' />
                    </div>


                </div>

                <div className='w-screen h-[350px] absolute bottom-0 bg-gradient-to-t from-black to-transparent' />
            </div>
        </div>
    )
}
