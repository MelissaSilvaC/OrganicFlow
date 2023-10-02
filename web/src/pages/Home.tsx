import { useState } from 'react'
import Background from '../assets/img/Fundo/hotifruti.png'

export default function Home(){
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const uploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página
        if (image) {
            // Verifica se um arquivo de imagem foi selecionado
            console.log('Upload de imagem:', image);
            // Aqui você pode enviar a imagem para o servidor ou realizar outras ações
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
            console.log('passou por essa função')
        }
    };

    return(
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
            <p className="text-2xl font-extrabold text-white">Home</p>
            <form onSubmit={uploadImage} className='bg-blue-200'>
                <label>Imagem:</label>
                <input
                    type='file'
                    name='image'
                    onChange={handleImageChange}
                />
                <button type="submit" className='bg-green-200'>Enviar</button>
            </form>
            {/* Condicionalmente renderize a imagem se imageURL estiver definida */}
            {imageURL && <img src={imageURL} alt="Imagem Enviada" />}
        </div>
    )
}