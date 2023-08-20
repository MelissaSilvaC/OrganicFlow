import logo from '../assets/img/Logo/logo-letras.png'
import perfil from '../assets/img/logo_basica.png'

const itemListaTCSS = 'px-4 py-3 font-bold hover:bg-verde_escuro hover:text-neutral-50 rounded-lg'

export default function Navbar(){
    return (
        <header className='bg-amarelo_areia w-screen py-4 flex items-center font-montserrat'>   
                {/** Logo */}
                <img src={logo} className='w-[220px] ml-10' />
                
                <div className='flex flex-grow justify-end pt-10'>
                    {/** Itens da barra do menu */}
                    <nav>
                        <ul className='flex space-x-14'>
                            <li className={itemListaTCSS}>Empresas</li>
                            <li className={itemListaTCSS}>Quem somos</li>
                        </ul>
                    </nav>
                </div>

                {/** Perfil; NOTA: o item deve ser clicável e com uma condicional de ser a possoa estar logada ou não */}
                <div className='flex ml-24 mr-14'>
                    <img src={perfil} className='w-[60px] h-[60px] my-1 rounded-full' />
                </div>
        </header>
    )
}