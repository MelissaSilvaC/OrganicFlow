import Background from '../assets/img/field.png'
import logoOF from '../assets/img/Logo/white-words-horizontal.png'
import PanelSignup from '../components/Account/Panel_Signup'
import PanelPartner from '../components/Account/Panel_Partner'
import { Link } from 'react-router-dom'
import { useState } from "react"
import ToggleButton from "../components/ToggleButton"

export default function SignupScreen() {
    const spanAtivo = "h-full w-[130px] rounded-full bg-white p-2 justify-center shadow-black shadow-2xl absolute left-0 shadow-lg shadow-gray-400 cursor-pointer"
    const spanDesativo = "h-full w-[130px] rounded-full bg-white p-2 justify-center shadow-black shadow-2xl absolute right-0 shadow-lg shadow-gray-400 cursor-pointer"

    const [isChecked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(prevState => !prevState)
    }

    return (
        <div className='w-screen h-screen bg-cover' style={{backgroundImage:`url(${Background})`}}>
            <div className='flex flex-row gap-5'>

                {/** Painel lateral */}
                <div className='flex basis-2/3 flex-col justify-center items-center bg-black bg-opacity-50 w-full h-screen '>
                    
                    <ToggleButton
                        onClick={handleCheck}
                        style={isChecked ? spanAtivo : spanDesativo}
                        label={isChecked ? 'Cadastre-se' : 'Seja Parceiro'}
                    />
                    
                    <div className='flex flex-col mt-10'>
                        {isChecked ? <PanelSignup /> : <PanelPartner />}
                    </div>

                </div>

                
                <div className='flex items-center'>
                    <Link to='/empresa/perfil'>
                        <img src={logoOF} />
                    </Link>
                </div>

            </div>
        </div>
    )
}