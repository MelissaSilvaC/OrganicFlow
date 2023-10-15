import Background from '../assets/img/Fundo/hotifruti.png'
import { FaRegEye } from 'react-icons/fa';
import { LuThumbsUp } from 'react-icons/lu';
import { TfiLocationPin } from 'react-icons/tfi';
import { LiaHandPointerSolid } from 'react-icons/lia';

export default function Banner(){
    return (
        <div className="bg-cover h-[40rem] flex items-center" style={{ backgroundImage: `url(${Background})` }}>
            <div className='text-white flex flex-col text-center space-y-6'>
                <div className='font-extrabold text-4xl space-y-2'>
                    <p>Traçando Caminhos</p>
                    <p>Conectando Confiança!</p>
                </div>
                <p className='font-medium text-lg opacity-70 mx-52 max-lg:hidden'>
                    Em um mundo cada vez mais consciente e preocupado com a origem dos produtos que consumimos, nasce a Organic Flow com uma missão clara e impactante: proporcionar aos consumidores acesso transparente e confiável às informações sobre a procedência dos produtos.
                </p>
                <div className='font-semibold text-lg space-x-6 pb-10'>
                    <button className='bg-verde_escuro px-4 py-2 rounded-lg hover:bg-green-900'>Junte-se a Nós</button>
                    <button className='bg-verde_folha px-4 py-2 rounded-lg hover:bg-verde_palido'>Saiba mais</button>
                </div>
                <div className='flex justify-evenly text-lg font-medium'>
                    <div className='flex flex-col items-center'>
                        <FaRegEye className='w-20 h-20 fill-verde_folha pb-3' />
                        Transparência
                    </div>
                    <div className='flex flex-col items-center'>
                        <LuThumbsUp className='w-20 h-20 stroke-verde_folha pb-3' />
                        Confiança
                    </div>
                    <div className='flex flex-col items-center'>
                        <TfiLocationPin className='w-20 h-20 fill-verde_folha pb-3' />
                        Precisão
                    </div>
                    <div className='flex flex-col items-center'>
                        <LiaHandPointerSolid className='w-20 h-20 fill-verde_folha pb-3' />
                        Acessível
                    </div>
                </div>
            </div>
        </div>
    )
}