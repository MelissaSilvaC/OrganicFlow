import { FiSearch } from 'react-icons/fi';
import Papel from '../../assets/img/Fundo/papel1.png'
import Slider from 'react-slick';
import CompanyBrand from '../Cards/ImageCards/CompanyBrand';
import { useLayoutEffect, useState,useEffect } from 'react';
import axios from 'axios'

export default function Companies() {
    const [slidesToShow, setSlidesToShow] = useState(7);
    const [empresas, setEmpresas] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => { 
  
          axios.get(`http://localhost:3000/empresa`)
          .then(response => {
  
              const empresas = response.data.map((item: any) => ({
                  id: item.user.id,
                  photo: item.user.photo,
                }));
  
          setEmpresas(empresas);
          console.log(empresas)
          })
          //retorna o objeto inteiro
          .catch((error) => {
              console.log(error);
          });
          // console.log('aa')
          
    }, []);

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
        infinite: false,
        slidesToShow: slidesToShow, // Número de slides a serem mostrados com base no tamanho da tela
        slidesToScroll: 1,
    };

    const filteredEmpresas = empresas.filter((empresa) => {
        /**
         * if (empresa && empresa.nome) {
        empresa.nome.toLowerCase().includes(searchTerm.toLowerCase())
        } 
         */
        
    });


    return (
        <div className='bg-cover h-[25rem] max-lg:h-[22rem] px-28 max-lg:px-8' style={{ backgroundImage: `url(${Papel})` }}>
            <p className='text-verde_escuro font-bold text-4xl max-lg:text-2xl text-center pt-10'>Nossos Parceiros</p>

            <div className='flex justify-end max-lg:flex-col max-lg:items-center mt-5'>
                <div className='w-[450px] max-lg:w-[300px] h-10 bg-neutral-100 rounded-[50px] flex px-6'>
                    <input
                        className="bg-transparent grow focus:outline-none max-lg:text-sm"
                        placeholder="Localize uma empresa"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className='w-8 h-8 rounded-full bg-verde_escuro flex self-center justify-center justify-self-end'>
                        <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <Slider {...companySettings}>
                    {filteredEmpresas.map((empresa) => (
                        <CompanyBrand
                            key={empresa.id}
                            id={empresa.id}
                            photo={empresa.photo}
                            //Nome da empresa
                        />
                    ))}
                   </Slider>
            </div>

        </div>
    )
}