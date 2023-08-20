import Background from '../assets/img/loginBg.png'
import logoOF from '../assets/img/Logo/white-words-horizontal.png'
import PanelSignup from '../components/Account/Panel_Signup'
import PanelLogin from '../components/Account/Panel_Login'
import PanelPartner from '../components/Account/Panel_Partner'

export default function AccountScreen() {
    

    return (
        <div className='w-screen h-screen bg-cover' style={{backgroundImage:`url(${Background})`}}>

            {/** Painel lateral e logo */}
            <div className='flex flex-row gap-5'>

                {/** Painel lateral */}
                <div className='flex basis-2/3 flex-col justify-center items-center bg-black bg-opacity-50 w-full h-screen '>

                    <div className='flex flex-col'>
                        {/**<PainelLogin /> */}
                        <PanelPartner />
                    </div>

                </div>

                {/** Logo */}
                <div className='flex items-center'>
                    <img src={logoOF}/>
                </div>
            </div>


        </div>
    )
}