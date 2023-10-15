import InfoManagerCard from "components/Cards/InfoManagerCard";
import TitleComplaint from "components/Cards/Titles/TitleComplaint";
import { FiSearch } from 'react-icons/fi';

export default function AbleManager(){
    return(
        <>
            <TitleComplaint titulo="Validar gerentes" />
            <div className="text-white px-20">
                <div className="flex justify-between">
                    <p className="text-2xl pb-10">Gerentes validados</p>

                    <div>
                        <div className='w-[400px] h-11 bg-neutral-100 rounded-[50px] flex px-6'>
                            <input className='bg-transparent focus:outline-none grow' placeholder='Pesquisar...' />
                            <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                                <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <InfoManagerCard /><InfoManagerCard /><InfoManagerCard />
                    <InfoManagerCard /><InfoManagerCard /><InfoManagerCard />
                </div>
            </div>

            <div className="bg-cinza_escuro h-0.5 my-20" />

            <div className="text-white px-20 pb-28">
                <div className="flex justify-between">
                    <p className="text-2xl pb-10">Gerentes não validados</p>

                    <div>
                        <div className='w-[400px] h-11 bg-neutral-100 rounded-[50px] flex px-6'>
                            <input className='bg-transparent focus:outline-none grow' placeholder='Pesquisar...' />
                            <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                                <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-wrap">
                    <InfoManagerCard /><InfoManagerCard /><InfoManagerCard />
                    <InfoManagerCard /><InfoManagerCard /><InfoManagerCard />
                    <InfoManagerCard /><InfoManagerCard /><InfoManagerCard />
                </div>
            </div>
        </>
    )
}