import Background from '../assets/img/Fundo/field.png'
import logoOF from '../assets/img/Logo/white-words-horizontal.png'
import { Link } from 'react-router-dom'
import ToggleButton from "../components/Account/ToggleButton"

export default function SignupScreen() {
    return (
        <div className='h-full bg-cover' style={{backgroundImage:`url(${Background})`}}>
            <div className='h-full flex gap-5'>

                {/** Painel lateral */}
                <div className='flex flex-col basis-2/3 justify-center items-center bg-black bg-opacity-50 max-md:basis-auto'>
                    <ToggleButton/>
                </div>
                
                <div className='flex items-center max-md:hidden'>
                    <Link to='/'>
                        <img src={logoOF} />
                    </Link>
                </div>

            </div>
        </div>
    )
}