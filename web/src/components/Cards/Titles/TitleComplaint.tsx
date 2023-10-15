interface props{
    titulo: string
}

export default function TitleComplaint({titulo} : props){
    return(
        <div className="pt-14 pb-24">
            <div className="bg-verde_palido h-[120px] pl-16 pb-5 flex items-end">
                <p className="text-white text-3xl font-extrabold">{titulo}</p>
            </div>
        </div>
    )
}