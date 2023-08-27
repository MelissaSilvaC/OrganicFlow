import logoEmpresa from '../assets/img/logo2.png'
import { FiSearch } from 'react-icons/fi';
import { FiFilter } from 'react-icons/fi';
import fundo from '../assets/img/field.png'

export default function ProfileScreen({ children }: { children?: React.ReactNode }) {
    return (
        <div className='h-screen'>
            <div className="bg-red-200 h-[300px] bg-cover" style={{ backgroundImage: `url(${fundo})` }} />
            {/** Tela do perfil da empresa */}
            <div className="bg-preto">
                <div className="bg-verde_folha h-2" />

                {/** Perfil, bio, barra de pesquisa e filtros */}
                <div className='px-24 flex'>
                    {/** Perfil, nome, bio */}
                    <div className='flex flex-col'>
                        <div className='relative'>
                            <img className="w-36 h-36 rounded-full top-[-55px] absolute" src={logoEmpresa} />
                        </div>
                        <div className='flex flex-col ml-[170px]'>
                            <p className='font-bold text-5xl text-white my-4'>Plantinha</p>
                            <p className='text-lg text-white'>plantinha@gmail.com</p>
                            <p className='text-lg text-white pb-5'>Rua plantao, 123 - Penha/São Paulo - SP</p>
                            <p className='font-light w-[500px] text-md text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque modi aspernatur quisquam nam labore eveniet eligendi delectus voluptatum a doloribus dolor, facilis odit cumque. Mollitia, voluptas perferendis? Dolores, praesentium.</p>
                        </div>
                    </div>

                    {/**Barra de pesquisa*/}
                    <div className='flex justify-end w-full mt-4'>
                        <div className='w-[500px] h-11 bg-neutral-100 rounded-[50px] flex px-6'>
                            <input className='bg-transparent focus:outline-none grow' placeholder='Localize um produto' />
                            <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                                <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                            </div>
                        </div>
                        <FiFilter className='w-8 h-8 ml-5 stroke-white' />
                    </div>
                </div>

                {/** Conteúdo do perfil fiscal/empresa */}
                <div className='h-screen'>
                    {children}

                    {/** 
                     * Aqui vai ter um if/else:
                     * 
                     * Se o botão clicado levou para a rota /telaLogin/cadastro: Tela de cadastro
                     * Dentro da tela de cadastro temos o cadastro comum e e o cadastro de pessoa jurídica
                     * 
                     * Se o botão clicado levou para a rota /telaLogin/login: Tela de login
                     * Se esquecer a senha, abre o popup
                     * 
                    */}

                </div>
            </div>


        </div>
    )
}