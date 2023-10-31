import Papel from '../../assets/img/Fundo/papel1.png'
import Slider from 'react-slick';
import CompanyBrand from '../Cards/ImageCards/CompanyBrand';
import { useLayoutEffect, useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from 'components/SearchBar';

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
            photo:'https://images.unsplash.com/photo-1646981711308-dc9397659c74?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxldHJhJTIwYnxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            name :'M empresa',
            id : 2,
            photo: 'https://images.unsplash.com/photo-1535913590195-6b39514ba0c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxldHJhJTIwYXxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            name : 'G empresa',
            id : 3,
            photo: 'https://images.unsplash.com/photo-1545601445-9242104e5d79?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxldHJhJTIwZ3xlbnwwfHwwfHx8MA%3D%3D'
        }, {
            name : 'E empresa',
            id : 4,
            photo: 'https://images.unsplash.com/photo-1630269886275-2724319ce23a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxldHJhJTIwZXxlbnwwfHwwfHx8MA%3D%3D'
        }, {
            name : 'R empresa',
            id : 5,
            photo: 'https://images.unsplash.com/photo-1490041030694-4835d3f07bd9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxldHJhJTIwYXxlbnwwfHwwfHx8MA%3D%3D'
        },
    ]

    useEffect(() => {
        axios.get(`https://organicflow-server.vercel.app/empresa`)
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
                    {/**
                     * {listaFiltrada.map((empresa) => (
                        <CompanyBrand
                            key={empresa.id}
                            id={empresa.id}
                            photo={empresa.photo}
                            name={empresa.name}
                        />
                    ))}
                     */}
                {empresaFiltrada.map((empresa) => (
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