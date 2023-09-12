import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo/logo-letras.png'
import perfil from '../assets/img/logo_basica.png'
import { Outlet } from 'react-router-dom'

const itemListaTCSS = 'px-4 py-3 font-bold hover:bg-verde_escuro hover:text-neutral-50 rounded-lg'

export default function Navbar(){
    const rotas = [
        { label: 'Empresas', to: '/empresas'}, 
        { label: 'Quem somos', to: '/sobre'}, 
        { label: 'Perfil empresa', to: '/empresa/perfil'},
        { label: 'Perfil fiscal', to: '/fiscal/perfil' },
        { label: 'Linha do tempo', to: '/fiscal/linhatempo' },
        { label: 'Lista de denúncias', to: '/admin/listadenuncias' },
    ];
    return (
        <>
            <div className='bg-amarelo_areia py-4 flex items-center font-montserrat'>
                <Link to='/' >
                    <img src={logo} className='w-[220px] ml-12' />
                </Link>

                <div className='flex flex-grow justify-end pt-10'>
                    <nav>
                        <ul className='flex space-x-14'>
                            {/* 
                                Laço de repetição que retorna os itens do menu
                                Leva dois parâmetros:
                                - rota: referente à lista de rotas e labels de antes
                                - index: a ordem dos itens da lista, o que vamos usar na 'key'
                             */}
                            {rotas.map((rota, index) => (
                                <Link to={rota.to}>
                                    <li key={index} className={itemListaTCSS}>
                                        {rota.label}
                                    </li>
                                </Link>
                            ))}

                        </ul>
                    </nav>
                </div>

                {/** Perfil; NOTA: o item deve ser clicável e com uma condicional de ser a possoa estar logada ou não */}
                <div className='flex ml-24 mr-14 hover:shadow-lg hover:shadow-gray-300 rounded-full'>
                    <Link to='/sessao' >
                        <img src={perfil} className='w-[60px] h-[60px] rounded-full'/>
                    </Link>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}