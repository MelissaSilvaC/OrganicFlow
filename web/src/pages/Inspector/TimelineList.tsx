import TitleTimeline from "components/Cards/Titles/Title-timeline";
import Button from "components/Items_Forms/Button";
import CustomPaginationActionsTable from "components/Table/TimelinesTable";
import { useState } from "react";

export default function TimelineList() {
    const [image, setImage] = useState<File | null>(null)
    const [imageURL, setImageURL] = useState<string | null>(null);

    //ESSA FUNÇÃO É PARA SABER SE A IMAGEM FOI SUBMETIDA
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
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
            <TitleTimeline />

            <div className="py-28 max-lg:py-10">
                {/**Tabela */}
                <div className="px-28 max-lg:px-4">
                    <CustomPaginationActionsTable />
                    <div className="flex mt-8 max-lg:flex max-lg:flex-wrap max-lg:space-y-5 max-sm:text-sm">
                        <Button
                            texto='Escanear linha do tempo'
                            botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 mr-6 shadow hover:bg-verde_palido'
                            onClick={() => {}}
                        />

                        <Button
                            texto='Cadastrar linha do tempo'
                            botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 shadow hover:bg-verde_palido'
                            onClick={() => { }}
                        />

                        <Button
                            texto='Deletar produto'
                            botaoCSS='ml-12 max-lg:ml-0 text-red-600 h-[40px] rounded-lg font-semibold max-lg:font-medium px-5 mr-6 shadow border-2 border-red-600 hover:animate-pulse'
                            onClick={() => { alert('Tem certeza? Esta ação vai deletar TODAS as linhas do tempo relacionada a esse produto') }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}