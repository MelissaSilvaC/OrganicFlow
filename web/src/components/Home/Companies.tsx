import { FiSearch } from 'react-icons/fi';
import Papel from '../../assets/img/Fundo/papel1.png'
import Slider from 'react-slick';
import CompanyBrand from '../Cards/ImageCards/CompanyBrand';
import { useLayoutEffect, useState } from 'react';

export default function Companies() {
    const [slidesToShow, setSlidesToShow] = useState(7);

    useLayoutEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            if (windowWidth >= 1024) { // Tela grande, exibe 7 slides
                setSlidesToShow(7);
            } else if (windowWidth >= 640) { // Tablet ou notebook, exibe 5 slides
                setSlidesToShow(4);
            } else { // Celular, exibe 2 slides
                setSlidesToShow(3);
            }
        };

        handleResize(); // Chama a função quando o componente é montado

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const companySettings = {
        infinite: true,
        slidesToShow: slidesToShow, // Número de slides a serem mostrados com base no tamanho da tela
        slidesToScroll: 1,
    };

    return (
        <div className='bg-cover h-[25rem] max-lg:h-[22rem] px-28 max-lg:px-8' style={{ backgroundImage: `url(${Papel})` }}>
            <p className='text-verde_escuro font-bold text-4xl max-lg:text-2xl text-center pt-10'>Nossos Parceiros</p>

            <div className='flex justify-end max-lg:flex-col max-lg:items-center mt-5'>
                <div className='w-[450px] max-lg:w-[300px] h-10 bg-neutral-100 rounded-[50px] flex px-6'>
                    <input className='bg-transparent grow focus:outline-none max-lg:text-sm' placeholder='Localize uma empresa' />
                    <div className='w-8 h-8 rounded-full bg-verde_escuro flex self-center justify-center justify-self-end'>
                        <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <Slider {...companySettings}>
                    <CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand />
                    <CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand /><CompanyBrand />
                </Slider>
            </div>

        </div>
    )
}