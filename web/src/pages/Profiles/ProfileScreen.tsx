import fundo from '../../assets/img/Fundo/field.png'
import { useState, useEffect } from 'react';
import IProfile from 'types/IProfile';
import ModalProfile from 'components/Modal/UpdateProfile';
import Button from 'components/Items_Forms/Button';
import TextField from 'components/Items_Forms/TextField';
import Placeholder from 'assets/img/placeholder.png'
import api from '../../axiosUrl'

export default function ProfileScreen({ children }: IProfile) {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const [image, setImage] = useState<File | null>(null)
    const [photo, setPhoto] = useState<string | undefined>("");

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [cnpj, setCnpj] = useState('');

    const [local, setLocal] = useState('');
    const url = window.location.href;
    const id = url.split("/").pop(); // Isso assume que o ID está na última parte da URL
    const idStorage = localStorage.getItem('id');
    const roleStorage = localStorage.getItem('id_role');
    let perfil = true
    let adm = false
    if (id != idStorage) { perfil = false }
    if (roleStorage === "1"){ adm = true}

    useEffect(() => {

        api.get(`/empresa/${id}`)
            .then(response => {
                const { name, email, company, cnpj, photo, local } = response.data[0];
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

    //ESSA FUNÇÃO É PARA SABER SE O INPUT SELECIONOU A IMAGEM
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0]; // Obtenha o primeiro arquivo selecionado
        if (selectedImage) {
            setImage(selectedImage); // Atualize o estado com o objeto File
            setPhoto(URL.createObjectURL(selectedImage));
            console.log('imagem selecionada')
        }
    };

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        
        const formData = new FormData(); // Crie um objeto FormData para enviar a imagem
        if (image) {
            
            formData.append('file', image); // Adicione a imagem ao FormData
            formData.append('file', local); // Adicione a imagem ao FormData
            formData.append('file', nome); // Adicione a imagem ao FormData


            api.put('/user/' + id,formData, {//verifica login
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.error('Erro ao buscar dados:', error);
                });

            
        } else {
            api.put('/user/' + id, {//verifica login
            local: local,
            name: nome,
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
        }
    }

    return (
        <div className='bg-preto'>
            <div className="h-[300px] max-sm:h-[200px] bg-cover" style={{ backgroundImage: `url(${fundo})` }} />
            <div className="bg-verde_folha h-2 max-sm:h-1 " />

            <div className="h-full px-[10rem] max-sm:px-5 py-4">
                <div className='flex mt-10 items-end max-sm:items-baseline w-full max-sm:flex-col max-sm:mt-0 max-sm:justify-normal max-sm:w-auto'>

                    <div className='flex flex-col max-sm:w-28'>
                        <div className='flex justify-end'>
                            {perfil ?
                                <ModalProfile>
                                    <form onSubmit={onSubmit}>
                                        <div className="flex justify-center">
                                            <div className="w-44 h-44 max-sm:w-28 max-sm:h-28 rounded-full border-2 border-verde_escuro bg-cover">
                                                {photo ? <img src={photo} alt="Imagem Enviada" className="rounded-[50px]" /> : <img src={Placeholder} alt="Imagem Enviada" className="rounded-[50px]" />}
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
                                        <Button botaoCSS='bg-verde_escuro w-full max-lg:rounded-lg rounded-xl text-xl max-lg:text-base font-semibold text-white mt-1 hover:bg-green-900 h-[50px] max-lg:h-[40px]' texto='Salvar edição' />
                                    </form>
                                </ModalProfile>
                                : ""
                            }
                        </div>
                        <img className="w-36 h-36 max-sm:w-24 max-sm:h-24 rounded-full" src={photo ? photo : Placeholder} />
                    </div>

                    <div className='ml-10 max-sm:ml-0 text-white text-lg max-sm:text-base max-sm:mt-3 '>
                        <div className='flex space-x-12'>
                            <p className='font-bold text-4xl max-sm:text-2xl my-4'>{nome}</p>
                            {adm ? 
                                <Button
                                    texto="Banir usuário"
                                    botaoCSS='text-red-600 font-semibold max-sm:font-medium flex self-start rounded-xl p-2 px-5 mt-3 border-2 max-sm:border border-red-600 hover:animate-pulse'
                                    onClick={() => {
                                        api.put('/ban/6')
                                            .then(response => {
                                                console.log('Banimento desfeito com sucesso', response);
                                                // Aqui você pode adicionar código para atualizar o estado ou realizar outras ações após o sucesso da requisição.
                                            })
                                            .catch(error => {
                                                console.error('Erro ao desfazer banimento:', error);
                                                // Aqui você pode adicionar código para lidar com erros, se necessário.
                                            });
                                    }}
                                />
                                : ""
                            }
                        </div>
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