import logoEmpresa from '../../assets/img/logoExample.png'
import { FiSearch } from 'react-icons/fi';
import { FiFilter } from 'react-icons/fi';
import fundo from '../../assets/img/Fundo/field.png'
import axios from 'axios'
import { useState, useEffect } from 'react';
import ModalProfile from 'components/Modal/UpdateProfile';
import TextField from 'components/Items_Forms/TextField';
import Button from 'components/Items_Forms/Button';

//Algo para editar o perfil
export default function ProfileScreen({ children }: { children?: React.ReactNode }) {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [company, setCompany] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [medalha, setMedalha] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001' + '/empresa/:id')
            .then(response => {
                /**
                 * const { name, email, company, cnpj, photo, medalha } = response.data;
                setNome(name);
                setEmail(email);
                setCompany(company);
                setCnpj(cnpj);
                setPhoto(photo);
                setMedalha(medalha);

                console.log(name)
                 */
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
            console.log('imagem editada')
        } else {
            console.log('Nenhuma imagem selecionada.');
        }
    }

    //ESSA FUNÇÃO É PARA SABER SE O INPUT SELECIONOU A IMAGEM
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0]; // Obtenha o primeiro arquivo selecionado
        if (selectedImage) {
            setImage(selectedImage); // Atualize o estado com o objeto File
            setImageURL(URL.createObjectURL(selectedImage));
            console.log('imagem selecionada')
        }
    };

    return (
        <div className='bg-preto'>
            <div className="h-[300px] max-md:h-[250px] bg-cover" style={{ backgroundImage: `url(${fundo})` }} />
            <div className="bg-verde_folha h-2" />

            <div className="h-full px-[10rem] max-lg:px-[4rem]">
                <div className='flex mt-10 justify-between w-full max-lg:flex-col'>
                    <div className='flex'>
                        {/**Perfil e informações */}
                        <div className='flex flex-col max-md:self-center'>
                            <div className='flex justify-end'>
                                <ModalProfile>
                                    <form onSubmit={onSubmit}>
                                        {/* Renderiza a imagem se imageURL estiver definida */}
                                        <div className="flex justify-center">
                                            <div className="w-44 h-44 flex rounded-[50px] border-2 border-verde_escuro bg-cover">
                                                {imageURL && <img src={imageURL} alt="Imagem Enviada" className="rounded-[50px]" />}
                                            </div>
                                        </div>
                                        {/* Label e botão */}
                                        <div className="flex flex-col my-2">
                                            <label className="font-medium" >Imagem:</label>
                                            <label
                                                htmlFor='file-input'
                                                className='custom-file-upload bg-verde_escuro w-full h-[40px] rounded-lg font-semibold text-white mt-1 flex justify-center items-center cursor-pointer hover:bg-green-900'>
                                                Selecione uma imagem
                                            </label>
                                        </div>

                                        <input
                                            required
                                            type='file'
                                            name='image'
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }} // Oculta o campo de entrada de arquivo
                                            id='file-input' // Adiciona um id para referência ao label
                                        />

                                        <TextField
                                            obrigatorio={true}
                                            placeholder='Nome do usuário ou empresa'
                                            onChange={evento => setNome(evento.target.value)}
                                            valor={nome}
                                            tipo='text'
                                            campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                            inputCSS={inputTCSS}
                                        />
                                        {/** SE FOR PERFIL DE EMPRESA */}
                                        <TextField
                                            obrigatorio={true}
                                            placeholder='Endereço da empresa'
                                            onChange={evento => setAdress(evento.target.value)}
                                            valor={adress}
                                            tipo='text'
                                            campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                            inputCSS={inputTCSS}
                                        />
                                        <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900' texto='Salvar edição' />
                                    </form>
                                </ModalProfile>
                            </div>
                            <img className="w-36 h-36 rounded-full" src={logoEmpresa} />
                        </div>
                        <div className='ml-10 text-white max-md:mt-2'>
                            <p className='font-bold text-4xl max-md:text-3xl my-4'>Nome</p>
                            <p className='text-lg'>email@email</p>
                            <p className='text-lg'>Rua plantao, 123 - Penha - São Paulo - SP</p>
                        </div>
                    </div>

                    {/**Barra de pesquisa*/}
                    <div className='flex justify-end max-md:mt-10 max-lg:justify-center'>
                        <div className='w-[500px] max-md:w-full max-md:ml-10 h-12 bg-neutral-100 rounded-[50px] flex px-6'>
                            <input className='bg-transparent focus:outline-none grow' placeholder='Localize um produto' />
                            <div className='w-8 h-8 rounded-full bg-verde_folha flex self-center justify-center'>
                                <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pb-28'>
                    {children}
                </div>
            </div>
        </div>
    )
}