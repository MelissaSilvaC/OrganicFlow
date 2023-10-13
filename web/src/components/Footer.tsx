import logo from '../assets/img/Logo/logo-letras.png'
import instagram from '../assets/img/SocialMidia/instagramIcon.png'
import facebook from '../assets/img/SocialMidia/facebookIcon.png'
import gmail from '../assets/img/SocialMidia/emailIcon.png'
import Papel from '../assets/img/Fundo/papel1.png'

export default function Footer() {
    return (
        <footer className="bg-amarelo_areia flex justify-center p-8" style={{ backgroundImage: `url(${Papel})` }}>

            <div className="w-[40%] flex flex-col justify-between">
                <img src={logo} className="w-[18rem]"/>
                <div className='text-gray-500 font-semibold flex flex-col pt-16'>
                    <p>Traçando Caminhos</p>
                    <p>Conectando Confiança</p>
                </div>
            </div>
            <div className='w-[20%]' />
            <div className="w-[20%]">
                <p className='text-verde_escuro font-extrabold text-3xl'>Informações</p>
                <p className='text-gray-600 w-64 mt-2 font-medium'>
                    Este site é resultado do nosso trabalho de conclusão de curso (TCC). 
                    Esperamos que ele possa ser útil e interessante para todos os visitantes.
                </p>
            </div>
            <div className="w-[10%] flex justify-evenly">
                <img src={instagram} className='h-14' />
                <img src={facebook} className='h-14' />
                <img src={gmail} className='h-14' />
            </div>

        </footer>
    )
}
