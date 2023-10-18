import TitleComplaint from "components/Cards/Titles/Title-complaint";
import empresa from '../../../assets/img/logoExample.png'
import BanedUserCard from "components/Cards/InfoCards/BanedUser";

export default function BanedUserView() {
    return (
        <>
            <TitleComplaint titulo="Usuários banidos" />
            <div className="text-white px-20">

                <div className="flex flex-wrap">
                    {/**
                     * Função map preenchendo os seguintes parametros:
                     * photo
                     * name
                     * email
                     * cnpj (se for gerente)
                     * 
                     */}
                    <BanedUserCard
                        photo={empresa}
                        name="Seeds sprout"
                        email="seedsprout@email.com"
                        cnpj="97.206.822/0001-65" />
                    <BanedUserCard
                        photo={empresa}
                        name="Seeds sprout"
                        email="seedsprout@email.com"
                        cnpj="97.206.822/0001-65" />
                    <BanedUserCard
                        photo={empresa}
                        name="Fiscal"
                        email="seedsprout@email.com" />
                    <BanedUserCard
                        photo={empresa}
                        name="Fiscal"
                        email="seedsprout@email.com" />

                </div>
            </div>
        </>
    )
}