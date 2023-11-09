import Background from '../../assets/img/Fundo/hotifruti.png'
import { FaRegEye } from 'react-icons/fa';
import { LuThumbsUp } from 'react-icons/lu';
import { TfiLocationPin } from 'react-icons/tfi';
import { LiaHandPointerSolid } from 'react-icons/lia';

export default function Banner() {
    return (
        <div className="bg-cover h-[40rem] max-lg:h-[30rem] flex items-center text-white" style={{ backgroundImage: `url(${Background})` }}>

            <div className='flex flex-col max-lg:items-center space-y-6 max-lg:w-full text-center w-full'>

                <div className='font-extrabold text-4xl max-lg:text-2xl space-y-2 max-lg:text-center max-lg:mb-5'>
                    <p>Traçando Caminhos</p>
                    <p>Conectando Confiança!</p>
                </div>

                <p className='font-medium text-lg opacity-70 mx-52 max-lg:hidden'>
                    Em um mundo cada vez mais consciente e preocupado com a origem dos produtos que consumimos, nasce a Organic Flow com uma missão clara e impactante: proporcionar aos consumidores acesso transparente e confiável às informações sobre a procedência dos produtos.
                </p>

                <div className='flex justify-center space-x-28 max-lg:justify-normal text-lg font-medium max-lg:space-x-5'>
                    
                    <div className='flex space-x-28 max-lg:space-x-0 max-lg:flex-col max-lg:space-y-4'>
                        <div className='flex flex-col items-center'>
                            <FaRegEye className='w-20 h-20 max-lg:w-16 max-lg:h-16 fill-verde_folha pb-3' />
                            Transparência
                        </div>
                        <div className='flex flex-col items-center'>
                            <LuThumbsUp className='w-20 h-20 max-lg:w-16 max-lg:h-16 stroke-verde_folha pb-3' />
                            Confiança
                        </div>
                    </div>

                    <div className='flex space-x-28 max-lg:space-x-0 max-lg:flex-col max-lg:space-y-4'>
                        <div className='flex flex-col items-center'>
                            <TfiLocationPin className='w-20 h-20 max-lg:w-16 max-lg:h-16 fill-verde_folha pb-3' />
                            Precisão
                        </div>
                        <div className='flex flex-col items-center'>
                            <LiaHandPointerSolid className='w-20 h-20 max-lg:w-16 max-lg:h-16 fill-verde_folha pb-3' />
                            Acessível
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
