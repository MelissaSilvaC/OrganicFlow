interface props {
    label : string
    valor : string
    estilo?: string
}

export default function InfoField({label , valor, estilo} : props){
    return(
        <div className="max-sm:text-sm">
            <label className={estilo}>{label}</label>
            <div className="h-[40px] max-sm:h-[35px] rounded-xl px-6 my-3 flex items-center bg-gray-100">
                <p>{valor}</p>
            </div>
        </div>
    )
}