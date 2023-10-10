import axios from "axios";
import TitleTimeLine from "components/Cards/TitleTimeLine";
import Button from "components/Items_Forms/Button";
import TextField from "components/Items_Forms/TextField";
import ModalTimeline from "components/Modal/RegisterTimeline";
import CustomPaginationActionsTable from "components/Table/TimelinesTable";
import { useState } from "react";

export default function TimelineList() {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5 text-lg'
    const fieldTCSS = 'h-[50px] bg-neutral-50 rounded-xl shadow px-6 my-3 border border-verde_escuro'
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [local, setLocal] = useState("")
    const [especie, setEspecie] = useState("")
    const [dataCultivo, setDataCultivo] = useState("")
    const [lote, setLote] = useState("")

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {

            /**axios.post('http://localhost:3001' + '/produto', {
                nome: nameProduct,
                photo: URL.createObjectURL(image),
            })
                .then(response => console.log(response))
                .catch((error) => {
                    console.log(error);
                });


            setImage(null);
            setNameProduct(''); */

            console.log('A imagem e os outros dados foram submetidos')
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
        }
    };

    return (
        <section className="bg-preto pt-[80px] pb-5">
            <TitleTimeLine />

            <div className="py-28">
                {/**Tabela */}
                <div className="px-28">
                    <CustomPaginationActionsTable />
                    <div className="flex mt-8">
                        <Button
                            texto='Escanear linha do tempo'
                            botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold text-white px-5 mr-6 shadow hover:bg-verde_palido'
                            onClick={() => { }}
                        />
                        <ModalTimeline>
                            <form onSubmit={onSubmit}>
                                {/* Renderiza a imagem se imageURL estiver definida */}
                                <div className="flex justify-center">
                                    <div className="w-48 h-40 rounded-[35px] border-2 border-verde_escuro bg-cover" style={{ backgroundImage: `url(${imageURL})` }}>
                                        {/**{imageURL && <img src={imageURL} alt="Imagem Enviada" className="rounded-[35px]" />} */}
                                    </div>
                                </div>
                                {/* Label e botão */}
                                <div className="flex flex-col my-2">
                                    <label className="font-medium" >Imagem:</label>
                                    <label
                                        htmlFor='file-input'
                                        className='custom-file-upload bg-verde_escuro w-full h-[40px] rounded-lg font-semibold text-white mt-1 flex justify-center items-center cursor-pointer hover:bg-green-900'>
                                        Selecione um arquivo
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
                                {/**Espécie do alimento */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Nome da espécie do alimento'
                                    onChange={evento => setEspecie(evento.target.value)}
                                    valor={especie}
                                    tipo='text'
                                    campoCSS={fieldTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/**Data do cultivo */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Data do cultivo'
                                    onChange={evento => setDataCultivo(evento.target.value)}
                                    valor={dataCultivo}
                                    tipo='date'
                                    campoCSS={fieldTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/**Local do cultivo */}
                                <TextField
                                    obrigatorio={true}
                                    placeholder='Local do cultivo'
                                    onChange={evento => setLocal(evento.target.value)}
                                    valor={local}
                                    tipo='text'
                                    campoCSS={fieldTCSS}
                                    inputCSS={inputTCSS}
                                />

                                {/**Número do lote */}
                                <TextField
                                    obrigatorio={false}
                                    placeholder='Número do lote'
                                    onChange={evento => setLote(evento.target.value)}
                                    valor={lote}
                                    tipo='text'
                                    campoCSS={fieldTCSS}
                                    inputCSS={inputTCSS}
                                />
                                <Button 
                                    botaoCSS='bg-verde_escuro w-full h-[50px] rounded-xl text-xl font-bold text-white mt-1 hover:bg-green-900' 
                                    texto='Enviar' 
                                />
                            </form>
                        </ModalTimeline>
                    </div>
                </div>
            </div>
        </section>
    )
}