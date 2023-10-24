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
    // Função para definir o item selecionado
    //const handleSelectedItem = (item) => {
    //    setSelectedItem(item);
    //};

    return (
        <div className="flex bg-preto">
            {/**Menu vertical */}
            <div className="bg-cinza_escuro w-[20%] text-white max-sm:hidden">
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
                        onClick={() => handleOptionClick("Ver usuários banidos")}
                        className={selectedOption === "Ver usuários banidos" ? "underline" : ""}
                    >
                        Ver usuários banidos
                    </li>
                </ul>
                <div className="h-screen" />
            </div>

            {/**Area onde vai aparecer a interface selecionada */}
            <div className="w-[80%] max-sm:w-auto">
                {selectedOption === "Validar gerentes" && <AbleManager />}

                {selectedOption === "Lista de denúncias" && 
                    <div className="pb-28">
                        <TitleComplaint titulo="Denúncias" />
                        <div className="px-16">
                            <div className="bg-gray-200">
                                <ComplaintsList />
                            </div>
                        </div>
                    </div>
                }
                {/**
                 * {selectedItem && <ComplaintsList item={selectedItem} />}
                {selectedItem && <Complaint item={selectedItem} />}
                 */}
                {selectedOption === "Ver usuários banidos" && <BanedUserView />}
            </div>
        </div>
    );
}
