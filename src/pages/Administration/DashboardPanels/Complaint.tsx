import TitleComplaint from "components/Cards/Titles/Title-complaint";
import { useState } from "react";

export default function Complaint() {
    const divisor = <div className="bg-gray-500 h-0.5 w-full" />

    return (
        <div className="bg-preto text-white h-screen">
            <TitleComplaint titulo="Denúncia" estilo="max-sm:pt-4"/>
            <div className="px-[6rem] pr-[15rem] max-sm:px-5">
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
