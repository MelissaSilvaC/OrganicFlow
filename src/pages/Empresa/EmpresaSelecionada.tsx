import Navbar from "../../components/Navbar";
import perfil from '../../assets/img/logo_basica.png'

function EmpSelecionada() {
    return (
        <Navbar>
            {/** Cabeçalho comum em todas as páginas */}

            {/** Conteúdo da empresa selecionada */}
            <div className='grid grid-cols-7 place-content-center'>

                {/** Texto qualquer */}

                {/** Barra de pesquisa */}
                

                {/** Espaço para exibir dados da empresa */}
                <div className='mt-12 grid col-start-3 col-span-3 place-content-center'>
                    <div className='bg-neutral-50 w-[1440px] h-screen rounded-tl-[10px] rounded-tr-[10px] p-12'>

                        {/** Logo, nome, email e endereço */}
                        <div className="flex">
                            <img src={perfil} alt="Perfil do site" className='w-[150px] h-[150px] mr-12 rounded-full' />
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold mb-5">NOME</p>
                                <div className="text-zinc-500 text-xl">
                                    <p>Email</p>
                                    <p>Endereço</p>
                                </div>
                            </div>
                        </div>

                        {/** Produtos */}
                        <p className="text-black text-2xl mt-28">Produtos comercializados</p>

                        {/**Lista de produtos*/}
                        <div className="mt-20 space-y-16 text-xl bg-red-200">
                            {/** Verduras */}
                            <div>
                                <p>Verduras</p>
                            </div>

                            {/** Legumes */}
                            <div>
                                <p>Legumes</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </Navbar>
    )
}

export default EmpSelecionada;