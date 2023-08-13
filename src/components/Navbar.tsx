import logo from '../assets/img/logo colorida c. letras.png'
import perfil from '../assets/img/logo_basica.png'
import ImagemFundo from './ImagemFundo'

//Branco: neutral-50
//Verde claro: lime-700
//Verde escuro: green-950

const itemListaTCSS = 'px-5 pb-4 pt-12 self-end font-bold text-sm hover:pt-[100px] hover:bg-green-950 hover:text-neutral-50'

export default function Navbar({children}:{children?: React.ReactNode}) {
    return (
        <ImagemFundo>
            {/** Inserindo o código dentro das tags da imagem de fundo*/}
            
            {/** Barra de navegação */}
            <div className='absolute top-0 w-screen grid grid-cols-4 gap-3 font-montserrat'>
                {/** Logo */}
                <div> 
                    <img src={logo} alt="logo do OrganicFlow" className=' w-60 h-50 relative'/> 
                </div>

                {/** Itens da barra do menu */}
                <nav className='grid col-span-2 place-content-end'>
                    <ul className='flex space-x-[60px] justify-center'>
                        <li className={itemListaTCSS}>RASTREABILIDADE</li>
                        <li className={itemListaTCSS}>EMPRESAS</li>
                        <li className={itemListaTCSS}>QUEM SOMOS</li>
                    </ul>
                </nav>

                {/** Perfil; NOTA: o item deve ser clicável e com uma condicional de ser a possoa estar logada ou não */}
                <div className='grid place-content-end'>
                    <img src={perfil} alt="Perfil do site" className='w-14 h-14 mr-20 my-10 rounded-full relative' />
                </div>
            </div>

            {/** local onde vamos inserir os conteúdo de cada página */}
            <div className='my-20 absolute top-32'>
                <div>{children}</div>
            </div>
        </ImagemFundo>
    )
}
