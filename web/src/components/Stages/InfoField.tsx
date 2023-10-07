interface props {
    label : string
    valor : string
    estilo?: string
}

export default function InfoField({label , valor, estilo} : props){
    return(
        <div>
            <label className={estilo}>{label}</label>
            <div className="h-[40px] rounded-xl px-6 my-3 flex items-center bg-gray-100">
                <p>{valor}</p>
            </div>
        </div>
    )
}