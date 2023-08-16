import logoEmpresa from '../../assets/img/logo2.png'
import { FiSearch } from 'react-icons/fi';

export default function EmpSelecionadaJu() {
    return (
        <div>
            {/**Imagem de fundo*/}
            <div className="bg-red-200 w-screen h-[300px]">
                
            </div>

            {/** Tela do perfil da empresa */}
            <div className="bg-gray-400 w-screen h-[650px]">

                {/** Perfil, informações sobre o perfil, barra de pesquisa e filtros */}
                <div>
                    <div className="bg-verde_folha h-2 w-screen"/>

                    <div className='px-14'>
                        {/** Perfil, nome, bio */}
                        <div className='relative'>
                            <img className="w-36 h-36 rounded-full top-[-55px] absolute" src={logoEmpresa} />
                        </div>

                        <div className='flex flex-col ml-[170px]'>
                            <p className='font-bold text-5xl text-white my-4'>Plantinha</p>
                            
                            <p className='w-[500px] font-medium text-lg text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque modi aspernatur quisquam nam labore eveniet eligendi delectus voluptatum a doloribus dolor, facilis odit cumque. Mollitia, voluptas perferendis? Dolores, praesentium.</p>
                        </div>


                        {/**Barra de pesquisa e filtros */}
                        <div>
                            
                            {/** Barra de pesquisa */}
                            <div className=''>
                                <div className='w-[620px] h-[70px] bg-neutral-100 rounded-[50px] flex px-6'>
                                    <FiSearch className='w-7 h-7 my-5 stroke-verde_folha' />
                                    <input className='bg-transparent focus:outline-none m-5 grow text-lg' placeholder='Pesquise empresas aqui...' />
                                </div>
                            </div>


                        </div>

                    </div>


                </div>

                {/** Cards dos alimentos */}
                <div></div>
            </div>


        </div>
    )
}