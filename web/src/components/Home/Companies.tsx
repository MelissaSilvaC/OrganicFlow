import Papel from '../../assets/img/Fundo/papel1.png'
import Slider from 'react-slick';
import CompanyBrand from '../Cards/ImageCards/CompanyBrand';
import { useLayoutEffect, useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from 'components/SearchBar';
import CompanyI from 'assets/img/CompanyExample/3.png'
import CompanyII from 'assets/img/CompanyExample/4.png'
import CompanyIII from 'assets/img/CompanyExample/5.png'
import CompanyIV from 'assets/img/CompanyExample/6.png'
import CompanyV from 'assets/img/CompanyExample/7.png'

interface tipo {
    name: string,
    id: number,
    photo: string
}

export default function Companies() {
    const [slidesToShow, setSlidesToShow] = useState(7);
    const [empresas, setEmpresas] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const companySettings = {
        infinite: false,
        slidesToShow: slidesToShow, // Número de slides a serem mostrados com base no tamanho da tela
        slidesToScroll: 1,
    };

    const lista: tipo[] = [
        {
            name : 'B empresa',
            id : 1,
            photo : CompanyI
        }, {
            name :'M empresa',
            id : 2,
            photo: CompanyII
        }, {
            name : 'G empresa',
            id : 3,
            photo: CompanyIII
        }, {
            name : 'E empresa',
            id : 4,
            photo: CompanyIV
        }, {
            name : 'R empresa',
            id : 5,
            photo: CompanyV
        },
    ]

    useEffect(() => {
        // axios.get(`https://organicflow-server.vercel.app/empresa`)
        
        axios.get(`http://localhost:3000/empresa`)
            .then(response => {
                const empresas = response.data.map((item: any) => ({
                    id: item.user.id,
                    photo: item.user.photo,
                    name: item.user.name,
                }));
                setEmpresas(empresas);
                console.log(empresas)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
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

    const listaFiltrada = lista.filter((empresa) =>
        empresa.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const empresaFiltrada = empresas.filter((empresa) =>
        empresa.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='bg-cover h-[25rem] max-lg:h-[22rem] px-28 max-lg:px-8' style={{ backgroundImage: `url(${Papel})` }}>
            <p className='text-verde_escuro font-bold text-4xl max-lg:text-2xl text-center pt-10'>Nossos Parceiros</p>
            <SearchBar
                placeholder='Localize uma empresa'
                val={searchTerm}
                change={(e) => setSearchTerm(e.target.value)}
            />
            
            <div className='mt-10'>
                
                <Slider {...companySettings}>
                    {empresaFiltrada?.map((empresa) => (
                        <CompanyBrand
                            key={empresa.id}
                            id={empresa.id}
                            photo={empresa.photo}
                            name={empresa.name}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}