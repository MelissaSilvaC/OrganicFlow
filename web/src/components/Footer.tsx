import logo from '../assets/img/Logo/logo-letras.png'
import instagram from '../assets/img/SocialMidia/instagramIcon.png'
import facebook from '../assets/img/SocialMidia/facebookIcon.png'
import gmail from '../assets/img/SocialMidia/emailIcon.png'
import Papel from '../assets/img/Fundo/papel1.png'

export default function Footer() {
    return (
        <footer className="bg-amarelo_areia flex max-lg:flex-col max-lg:space-y-6 justify-center p-8 max-lg:items-center" style={{ backgroundImage: `url(${Papel})` }}>
            <div className="w-[40%] max-lg:w-auto flex flex-col justify-between">
                <img src={logo} className="w-[12rem]"/>
                <div className='text-gray-500 font-semibold flex flex-col pt-10 max-lg:hidden'>
                    <p>Traçando Caminhos</p>
                    <p>Conectando Confiança</p>
                </div>
            </div>
            <div className='w-[20%]' />
            <div className="w-[20%] max-lg:w-auto max-lg:text-center">
                <p className='text-verde_escuro font-extrabold text-2xl max-lg:text-xl'>Informações</p>
                <p className='text-gray-600 w-64 mt-2 font-medium text-sm'>
                    Este site é resultado do nosso trabalho de conclusão de curso (TCC). 
                    Esperamos que ele possa ser útil e interessante para todos os visitantes.
                </p>
            </div>

        </footer>
    )
}
