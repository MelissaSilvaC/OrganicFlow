import fundo from '../../assets/img/Fundo/field.png'
import axios from 'axios'
import { useState, useEffect } from 'react';
import IProfile from 'types/IProfile';
import ModalProfile from 'components/Modal/UpdateProfile';
import Button from 'components/Items_Forms/Button';
import TextField from 'components/Items_Forms/TextField';

export default function ProfileScreen({ children }: IProfile) {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [photo, setPhoto] = useState<string | undefined>("");

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [cnpj, setCnpj] = useState('');
    
    const [local, setLocal] = useState('');

    useEffect(() => {
        
        const url = window.location.href;
        const id = url.split("/").pop(); // Isso assume que o ID está na última parte da URL

        axios.get('http://localhost:3000'+`/empresa/${id}`)
        .then(response => {
            const { name, email, company, cnpj, photo,local } = response.data[0];
            setNome(name);
            setEmail(email);
            setCompany(company);
            setCnpj(cnpj);
            setPhoto(photo);
            setLocal(local);
            
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
            setPhoto(URL.createObjectURL(selectedImage));
            console.log('imagem selecionada')
        }
    };

    return (
        <div className='bg-preto'>
            <div className="h-[300px] max-sm:h-[200px] bg-cover" style={{ backgroundImage: `url(${fundo})` }} />
            <div className="bg-verde_folha h-2 max-sm:h-1 " />

            <div className="h-full px-[10rem] max-sm:px-5 py-4">
                <div className='flex mt-10 items-end max-sm:items-baseline w-full max-sm:flex-col max-sm:mt-0 max-sm:justify-normal max-sm:w-auto'>

                    <div className='flex flex-col max-sm:w-28'>
                        <div className='flex justify-end'>
                            <ModalProfile>
                                <form onSubmit={onSubmit}>
                                    <div className="flex justify-center">
                                        <div className="w-44 h-44 flex rounded-[50px] border-2 border-verde_escuro bg-cover">
                                            {photo && <img src={photo} alt="Imagem Enviada" className="rounded-[50px]" />}
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-2">
                                        <label className="font-medium" >Imagem:</label>
                                        <label
                                            htmlFor='file-input'
                                            className='custom-file-upload bg-verde_escuro w-full h-[40px] rounded-sm font-semibold text-white mt-1 flex justify-center items-center cursor-pointer hover:bg-green-900'>
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
                                        onChange={evento => setLocal(evento.target.value)}
                                        valor={local}
                                        tipo='text'
                                        campoCSS='h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
                                        inputCSS={inputTCSS}
                                    />
                                    <Button botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900' texto='Salvar edição' />
                                </form>
                            </ModalProfile>
                        </div>
                        <img className="w-36 h-36 max-sm:w-24 max-sm:h-24 rounded-full" src={photo} />
                    </div>

                    <div className='ml-10 max-sm:ml-0 text-white text-lg max-sm:text-base max-sm:mt-3'>
                        <p className='font-bold text-4xl max-sm:text-2xl my-4'>{nome}</p>
                        <p>{email}</p>
                        <p>{local}</p>
                    </div>
                </div>
                <div className='pb-28 max-sm:pb-20'>
                    {children}
                </div>
            </div>
        </div>
    )
}