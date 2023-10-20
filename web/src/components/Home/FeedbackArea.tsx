import Button from 'components/Items_Forms/Button'
import Green from '../../assets/img/Fundo/greenLines.png'
import TextArea from 'components/Items_Forms/TextArea';
import { useState } from 'react';

export default function FeedbackArea(){
    const [feedback, setFeedback] = useState("")

    return(
        <div className='bg-cover py-14 px-28 max-lg:px-8 flex flex-col items-center' style={{ backgroundImage: `url(${Green})` }}>
            <p className='text-white font-bold text-4xl max-lg:text-2xl mb-8'>Entre em Contato</p>
            <div className='w-[35rem] max-lg:w-auto px-10 py-16 max-lg:px-4 max-lg:py-5 bg-zinc-200 rounded-xl'>
                <form>
                    <p className='text-center text-xl font-medium pb-4 max-lg:text-lg max-lg:px-5'>Faça a sua conta e dê um feedback a nós!</p>
                    <TextArea
                        obrigatorio={true}
                        onChange={evento => setFeedback(evento.target.value)}
                        valor={feedback}
                        campoCSS="bg-neutral-50 rounded-xl shadow px-6 my-3"
                        inputCSS='bg-transparent focus:outline-none w-full mt-2.5 max-lg:text-sm'
                    />
                    <Button
                        botaoCSS='bg-verde_escuro w-full h-[45px] max-lg:h-[40px] rounded-lg text-lg max-lg:text-base font-semibold text-white mt-1 hover:bg-green-900'
                        texto='Enviar'
                    />
                </form>
            </div>
        </div>
    )
}