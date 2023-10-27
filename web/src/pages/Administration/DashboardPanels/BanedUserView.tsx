import TitleComplaint from "components/Cards/Titles/Title-complaint";
import empresa from '../../../assets/img/logoExample.png'
import BanedUserCard from "components/Cards/InfoCards/BanedUser";

export default function BanedUserView() {
    return (
        <>
            <TitleComplaint titulo="Usuários banidos" estilo="max-sm:pt-0" />
            <div className="text-white px-20 max-sm:px-2">

                <div className="flex flex-wrap max-sm:pb-14">
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