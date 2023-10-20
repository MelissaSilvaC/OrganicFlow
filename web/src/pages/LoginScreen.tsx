import Background from '../assets/img/Fundo/loginBg.png'
import logoOF from '../assets/img/Logo/white-words-horizontal.png'
import { Link } from 'react-router-dom'
import PanelLogin from 'components/Account/Panel_Login'

export default function LoginScreen() {
    return (
        <div className='h-full bg-cover' style={{ backgroundImage: `url(${Background})` }}>
            <div className='h-full flex gap-5'>

                {/** Painel lateral */}
                <div className='flex basis-2/3 max-lg:basis-full flex-col justify-center items-center bg-black bg-opacity-50 w-full h-screen'>
                    <PanelLogin />
                </div>
                
                <div className='flex items-center max-lg:hidden'>
                    <Link to='/'>
                        <img src={logoOF} />
                    </Link>
                </div>

            </div>
        </div>
    )
}