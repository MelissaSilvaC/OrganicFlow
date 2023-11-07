import TitleComplaint from "components/Cards/Titles/Title-complaint";
import Button from "components/Items_Forms/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Complaint() {
    const divisor = <div className="bg-gray-500 h-0.5 w-full" />
    const [selectedOption, setSelectedOption] = useState("Lista de denúncias")

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="bg-preto text-white h-screen">
            <Link to={"/admin/dashboard"}>
                <div className="m-5 mt-8 max-sm:m-3 max-sm:mt-6">
                    <MdArrowBackIosNew className="w-8 h-8 max-sm:w-4 max-sm:h-4 fill-gray-400 hover:fill-gray-50" />
                </div>
            </Link>

            <TitleComplaint titulo="Denúncia" estilo="max-sm:pt-4"/>

            <div className="px-[8rem] pr-[15rem] max-sm:px-3">
                <div className="mb-4 font-medium text-lg max-sm:text-base space-y-2">
                    <p>usuario@email.com</p>
                    <p>Nome do Estágio</p>
                    <p>Relatório fraudulento</p>
                </div>
                {divisor}
                <p className="my-8 max-sm:text-sm">
                    Vestibulum quis rhoncus nunc. Donec vitae molestie tellus. Morbi laoreet, sapien scelerisque sollicitudin dictum, lorem metus euismod metus, vitae iaculis erat ex vitae enim. Aliquam dictum nulla in felis sodales, eget luctus ipsum faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ut justo vitae libero rhoncus sollicitudin. Maecenas tincidunt faucibus sollicitudin. Fusce lobortis suscipit lectus, eu ultricies lectus.
                </p>
            </div>
        </div>
    );
}
