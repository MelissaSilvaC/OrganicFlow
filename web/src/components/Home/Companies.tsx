import { FiSearch } from 'react-icons/fi';
import Papel from '../../assets/img/Fundo/papel1.png'
import Slider from 'react-slick';
import CompanyBrand from '../Cards/ImageCards/CompanyBrand';

export default function Companies() {
    const companySettings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    return (
        <div className='bg-cover h-[25rem] px-28' style={{ backgroundImage: `url(${Papel})` }}>
            <p className='text-verde_escuro font-bold text-4xl max-lg:text-2xl text-center pt-10'>Nossos Parceiros</p>

            <div className='flex justify-end max-lg:flex-col max-lg:items-center max-lg:mt-3'>

                <div className='w-[450px] max-lg:w-[300px] h-10 bg-neutral-100 rounded-[50px] flex px-6'>
                    <input className='bg-transparent focus:outline-none grow max-lg:text-sm' placeholder='Localize uma empresa' />
                    <div className='w-8 h-8 rounded-full bg-verde_escuro flex self-center justify-center'>
                        <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                {/**Notas: arrumar a responsividade e fazer o slider só aparecer quando os cards preencherem a tela */}

                {/**PARA COMPUTADOR
                     * if(empresa < 6){
                     *  lista flex wrap
                     * 
                     * }else{
                     *  carrossel
                     * }
                     * 

                        PARA TELAS MENORES
                    if(empresa < 3){
                     *  lista flex wrap
                     * 
                     * }else{
                     *  carrossel(SLIDES TO SHOW = 2 OU 3)
                     * }
                     */}
                <Slider {...companySettings}>
                    {/* Lista dos perfis da empresa */}
                    <CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand />
                    <CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand />
                </Slider>
            </div>

        </div>
    )
}