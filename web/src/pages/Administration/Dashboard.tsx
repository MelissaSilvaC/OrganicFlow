import React, { useState } from "react";
import ComplaintsList from "./ComplaintsList";
import AbleManager from "./AbleManager";
import FeedbacksList from "./FeedbacksList";

export default function Dashboard() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex bg-preto">
            
            {/**Menu vertical */}
            <div className="bg-cinza_escuro h-screen w-[20%] text-white">
                <ul className="font-medium text-lg pl-12 pt-24 space-y-5 hover:cursor-pointer">
                    <li
                        onClick={() => handleOptionClick("Validar gerentes")}
                        className={selectedOption === "Validar gerentes" ? "underline" : ""}
                    >
                        Validar gerentes
                    </li>
                    <li
                        onClick={() => handleOptionClick("Lista de denúncias")}
                        className={selectedOption === "Lista de denúncias" ? "underline" : ""}
                    >
                        Lista de denúncias
                    </li>
                    <li
                        onClick={() => handleOptionClick("Lista de feedbacks")}
                        className={selectedOption === "Lista de feedbacks" ? "underline" : ""}
                    >
                        Lista de feedbacks
                    </li>
                </ul>
                <div className="bg-slate-400 w-full h-0.5 my-6" />
                <ul className="font-medium text-lg pl-12 space-y-5 hover:cursor-pointer">
                    <li
                        onClick={() => handleOptionClick("Ver usuários banidos")}
                        className={selectedOption === "Ver usuários banidos" ? "underline" : ""}
                    >
                        Ver usuários banidos
                    </li>
                </ul>
            </div>

            {/**Area onde vai aparecer a interface selecionada */}
            <div className="w-full">
                {selectedOption === "Validar gerentes" && <AbleManager />}
                {selectedOption === "Lista de denúncias" && <ComplaintsList />}
                {selectedOption === "Lista de feedbacks" && <FeedbacksList />}
            </div>
        </div>
    );
}
