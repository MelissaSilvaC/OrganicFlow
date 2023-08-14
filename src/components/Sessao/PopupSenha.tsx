import { useState } from 'react'
import logoColorida from '../../assets/img/logo colorida c. letras.png'
import Campo from '../Itens de formulario/Campo'
import Botao from '../Itens de formulario/Botao'

export default function PopupSenha() {
    {/** useStates */ }
    const [ReEmail, setReEmail] = useState("")

    {/** Estilos */ }
    const campoTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border-2 border-verde_escuro'
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'


    const botaoTCSS = 'bg-verde_escuro w-2/3 h-[40px] rounded-xl text-xl font-bold text-white mt-1 mx-20'


    return (
        <div className="bg-black bg-opacity-50 absolute w-screen h-screen flex items-center justify-center">
            {/** items-center justify-center */}

            <div className="flex flex-col w-[500px] h-[350px] bg-neutral-50 rounded-2xl px-8 py-4">

                <div className='flex justify-center items-center '>
                    <img className='flex w-[60%] h-[100%]' src={logoColorida} />
                </div>

                {/** Campo recuperar e-mail */}
                <Campo
                    obrigatorio={true}
                    placeholder='E-mail'
                    onChange={evento => setReEmail(evento.target.value)}
                    value={ReEmail}
                    type='e-mail'
                    campoCSS={campoTCSS}
                    inputCSS={inputTCSS}
                />
                <Botao botaoCSS={botaoTCSS} texto='Enviar' />

                
                <a className='text-verde_escuro underline font-bold mt-5 mb-2'>Precisa de ajuda?</a>
            </div>
        </div>
    )
}