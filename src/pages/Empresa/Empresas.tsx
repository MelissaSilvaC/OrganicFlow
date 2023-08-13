
import { FiSearch } from 'react-icons/fi';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

export default function Empresas(){
    return (
        <Navbar>
            {/** Cabeçalho comum em todas as páginas */}

                {/** Conteúdo da página Empresas */}
                <div className='grid grid-cols-7 place-content-center'>

                    {/** Texto qualquer */}
                    <div className='grid col-start-3 col-span-3 place-content-center'>
                        <p className='text-center text-3xl font-extrabold'>
                            Vestibulum phasellus erat nostra fusce amet elit imperdiet praesent.
                            sem quisque semper euismod taciti aenean viverra odio.
                        </p>
                    </div>

                    {/** Barra de pesquisa */}
                    <div className='grid col-start-3 col-span-3 my-12 place-content-center'>
                        <div className='w-[620px] h-[70px] bg-neutral-100 rounded-[50px] flex px-6'>
                            <FiSearch className='w-7 h-7 my-5 stroke-lime-700' />
                            <input className='bg-transparent focus:outline-none m-5 grow text-lg' placeholder='Pesquise empresas aqui...' />
                        </div>
                    </div>

                    {/** Espaço para exibir os cards de cada empresa */}
                    <div className=' grid col-start-3 col-span-3 place-content-center'>
                        <div className='bg-neutral-50 w-[1440px] rounded-xl flex flex-wrap p-10'>

                        <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
                        </div>
                    </div>

                </div>
        </Navbar>
    )
}
