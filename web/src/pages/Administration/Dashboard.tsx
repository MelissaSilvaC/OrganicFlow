import React, { useState } from "react";
import ComplaintsList from "./DashboardPanels/ComplaintsList";
import AbleManager from "./DashboardPanels/AbleManager";
import BanedUserView from "./DashboardPanels/BanedUserView";
import Complaint from "./Complaint";
import TitleComplaint from "components/Cards/Titles/Title-complaint";

export default function Dashboard() {
    const [selectedOption, setSelectedOption] = useState("Validar gerentes")
    const [selectedItem, setSelectedItem] = useState(false)
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex max-sm:flex-col bg-preto">
            {/**Menu vertical */}
            <div className="bg-cinza_escuro w-[20%] max-sm:w-auto text-white max-sm:flex max-sm:flex-col">
                <ul className="font-medium text-lg pl-12 pt-24 max-sm:p-5 space-y-5 hover:cursor-pointer">
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
                        onClick={() => handleOptionClick("Ver usuários banidos")}
                        className={selectedOption === "Ver usuários banidos" ? "underline" : ""}
                    >
                        Ver usuários banidos
                    </li>
                </ul>
                <div className="h-screen max-sm:h-0" />
            </div>

            {/**Area onde vai aparecer a interface selecionada */}
            <div className="w-[80%] max-sm:w-full">
                {selectedOption === "Validar gerentes" && <AbleManager />}

                {selectedOption === "Lista de denúncias" && 
                    <div className="pb-28 max-sm:h-screen">
                        <TitleComplaint titulo="Denúncias" />
                        <div className="px-16 max-sm:px-2">
                            <div className="bg-gray-200">
                                <ComplaintsList />
                            </div>
                        </div>
                    </div>
                }
                {selectedOption === "Ver usuários banidos" && <BanedUserView />}
            </div>
        </div>
    );
}
