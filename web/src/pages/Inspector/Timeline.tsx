import TitleTimeline from "components/Cards/Titles/Title-timeline";
import StageI from "components/Stages/StageI";
import StageIII from "components/Stages/StageIII";
import StageIV from "components/Stages/StageIV";
import StageV from "components/Stages/StageV";
import StageII from "components/Stages/StageII";
import { useState } from "react";
import Medal_OF from '../../assets/img/Medals/ofMedal.png'
import ModalComplaint from "components/Modal/RegisterComplaint";
import ModalQRcode from "components/Modal/ShowQRcode";
import TextArea from "components/Items_Forms/TextArea";
import Button from "components/Items_Forms/Button";

import api from '../../axiosUrl'

interface Option {
    id: number;
    label: string;
}

export default function Timeline() {
    const inputTCSS = 'bg-transparent focus:outline-none w-full mt-2.5'
    const [date, setDate] = useState("")
    const [target, setTarget] = useState("")
    const [description, setDescription] = useState("")
    const [stageOpt, setStageOpt] = useState<Option | null>(null);
    const [argument, setArgument] = useState<Option | null>(null);
    let selectedLabel : string | null
    let selectedArgLabel: string | null
    const options: Option[] = [
        { id: 1, label: 'Falta de Conformidade Legal' },
        { id: 2, label: 'Inconsistência de Dados' },
        { id: 3, label: 'Problemas de Higiene e Segurança Alimentar' },
        { id: 4, label: 'Contaminação ou Adulteração' },
        { id: 5, label: 'Problemas Ambientais' },
        { id: 6, label: 'Violações Éticas' },
        { id: 7, label: 'Informações Falsas ou Enganosas' },
        { id: 8, label: 'Problemas de Qualidade do Produto' },
        { id: 9, label: 'Outro' },
    ];
    const stgOption: Option[] = [
        { id: 1, label: 'Produção Agrícola' },
        { id: 2, label: 'Processamento e Embalagem' },
        { id: 3, label: 'Transporte e Logística' },
        { id: 4, label: 'Armazenamento e Distribuição' },
        { id: 5, label: 'Varejo e Consumo' },
    ]

    const idStorage = localStorage.getItem('id');
    let comum = false
    let fiscal = false
    if (idStorage == '1') { 
    } else if (idStorage == '2'){
        fiscal = true
    } else if (idStorage == '3'){
    }else {
        comum = true
    }

    // const denunciar = ()=>{
    //     axios.post('https://organicflow-server.vercel.app'+'/denuncia',{
    //         alvo:"Empresa",
    //         description:"empresa abusiva"
    //     })
    //     .then(response => console.log(response))//se for sucedido 
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    const handleSelectArgument = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = parseInt(event.target.value, 10);
        const selectedOption = options.find((option) => option.id === selectedOptionId);
        setArgument(selectedOption || null);
        selectedArgLabel = selectedOption?.label || null; 
        console.log(selectedArgLabel);
    };

    const handleSelectStage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = parseInt(event.target.value, 10);
        const selectedOption = stgOption.find((option) => option.id === selectedOptionId);
        selectedLabel = selectedOption?.label || null; // Aqui está a label selecionada
        console.log(selectedLabel);
        
    };

    const url = window.location.href;
    const idlinha = url.split("/").pop(); 

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        api.post('/denuncia',{
            argumento:selectedArgLabel,
            description:description,
            stage:selectedLabel,
            id_linha:idlinha
        })
        .then(response => console.log(response))//se for sucedido 
        .catch((error) => { 
            console.log(error);
        });
    }


    return (
        <div className="bg-preto pt-[80px] pb-5">
            <div className="flex max-sm:flex-col">
                <TitleTimeline 
                    bgProduct="bg" 
                    txtProduct="Nome do produto"
                />
                {/* Exibe a imagem quando todas as medalhas estiverem exibidas 
                {allMedalsShown && (
                    <div className="w-28 h-28 max-md:w-20 max-md:h-20 bg-cover flex self-center max-sm:self-start max-sm:my-5 ml-12 max-sm:ml-5"
                        style={{ backgroundImage: `url(${Medal_OF})` }}
                    />
                )}
                */}
            </div>

            <div className="pt-20 max-lg:pt-8 flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <StageI/>
                    <StageII/>
                    <StageIII/>
                    <StageIV/>
                    <StageV/>

                    <div className="flex my-6 space-x-8 max-sm:space-x-4">
                        {/**Esse botão só deve aparecer para fiscais */}
                        {fiscal ? <ModalQRcode /> : ''}
                        {/**Esse botão só deve aparecer para usuários comuns */}
                        {comum ?
                            <ModalComplaint>
                                <form onSubmit={onSubmit}>
                                    <label>Argumento</label>
                                    <div className='bg-neutral-50 rounded-xl shadow px-6 py-4 mt-2'>
                                        <select className='bg-transparent outline-none w-full rounded-2xl' onChange={handleSelectArgument}>
                                            <option value="">Selecione uma opção</option>
                                            {options.map((option) => (
                                                <option key={option.id} value={option.id.toString()}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <br />
                                    <label>Em que estágio a denúncia se dirige</label>
                                    <div className='bg-neutral-50 rounded-xl shadow px-6 py-4 mt-2'>
                                        <select className='bg-transparent outline-none w-full rounded-2xl' onChange={handleSelectStage}>
                                            <option value="">Selecione uma opção</option>
                                            {stgOption.map((option) => (
                                                <option key={option.id} value={option.id.toString()}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <br />
                                    <TextArea
                                        obrigatorio={true}
                                        onChange={evento => setDescription(evento.target.value)}
                                        label="Descrição"
                                        valor={description}
                                        campoCSS={"bg-neutral-50 rounded-xl shadow px-6 my-3"}
                                        inputCSS={inputTCSS}
                                    />
                                    
                                        <Button
                                            botaoCSS='bg-verde_escuro w-full max-lg:rounded-lg rounded-xl text-xl max-lg:text-base font-semibold text-white mt-1 hover:bg-green-900 h-[50px] max-lg:h-[40px]'
                                            texto='Enviar denúncia'
                                        />
                                </form>
                            </ModalComplaint>
                            : ""
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}