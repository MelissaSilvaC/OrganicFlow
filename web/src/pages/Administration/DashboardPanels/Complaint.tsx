import TitleComplaint from "components/Cards/Titles/Title-complaint";
import { useEffect, useState } from "react";
import api from '../../../axiosUrl'

export default function Complaint() {
    const [userEmail, setUserEmail] = useState("");
    const [stageName, setStageName] = useState("");
    const [report, setReport] = useState("");
    const [description, setDescription] = useState("");

    const divisor = <div className="bg-gray-500 h-0.5 w-full" />;

    const url = window.location.href;
    const idlinha = url.split("/").pop();

    useEffect(() => {
        api.get(`/denuncia/${idlinha}`)
            .then(response => {
                const denunciaData = response.data.denuncia;

                if (denunciaData) {
                    const stageN = denunciaData.stage;
                    const email = denunciaData.user?.email; // Use o operador de navegação opcional para garantir que user não seja undefined
                    const relatorio = denunciaData.argumento;
                    const descricao = denunciaData.description;

                    console.log(email);
                    setUserEmail(email || ''); // Defina um valor padrão se email for undefined
                    setStageName(stageN);
                    setReport(relatorio);
                    setDescription(descricao);
                } else {
                    console.error("Dados da denúncia não encontrados.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [idlinha]);

    return (
        <div className="bg-preto text-white h-screen">
            <TitleComplaint titulo="Denúncia" estilo="max-sm:pt-4" />
            <div className="px-[6rem] pr-[15rem] max-sm:px-5">
                <div className="mb-4 font-medium text-lg max-sm:text-base space-y-2">
                    <p>{userEmail}</p>
                    <p>{stageName}</p>
                    <p>{report}</p>
                </div>
                {divisor}
                <p className="my-8 max-sm:text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}
