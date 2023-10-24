import TitleComplaint from "components/Cards/Titles/Title-complaint";
import Button from "components/Items_Forms/Button";
import { useState } from "react";

export default function Complaint() {
    const divisor = <div className="bg-gray-500 h-0.5 w-full" />
    const buttonCSS = 'bg-verde_folha h-[40px] rounded-lg font-semibold text-white px-5 mr-6 shadow hover:bg-verde_palido'
    const [selectedOption, setSelectedOption] = useState("Lista de denúncias")

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="bg-preto text-white">
            <TitleComplaint titulo="Denúncia" />
            <div className="px-[8rem] pr-[15rem]">
                <div className="mb-4 font-medium text-lg space-y-2">
                    <p>Data/Data/Data</p>
                    <p>usuario@email.com</p>
                    <p>Relatório fraudulento</p>
                </div>
                {divisor}
                <p className="my-8">
                    Vestibulum quis rhoncus nunc. Donec vitae molestie tellus. Morbi laoreet, sapien scelerisque sollicitudin dictum, lorem metus euismod metus, vitae iaculis erat ex vitae enim. Aliquam dictum nulla in felis sodales, eget luctus ipsum faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ut justo vitae libero rhoncus sollicitudin. Maecenas tincidunt faucibus sollicitudin. Fusce lobortis suscipit lectus, eu ultricies lectus.
                </p>

                <div className="flex mt-10">
                    <Button texto="Banir usuário" botaoCSS={buttonCSS} onClick={() => { }} />
                    <Button texto="Suspender relatório" botaoCSS={buttonCSS} onClick={() => { }} />
                </div>
            </div>
        </div>
    );
}
