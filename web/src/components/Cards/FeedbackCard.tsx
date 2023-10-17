interface IFeedback {
    photo: string
    name: string
    feedbackText: string
}

/**
 * Aqui vc vai precisar puxar os dados do usuário que fez o feedback e o feedback em si
*/

export default function FeedbackCard({photo, name, feedbackText} : IFeedback){
    return(
        <div className="text-white w-[26rem] border-2 border-slate-600 rounded-md m-5 shadow-lg">
            <div className="flex px-5 py-2 bg-verde_escuro">
                <div className="w-12 h-12 rounded-full bg-cover mr-4" style={{ backgroundImage: `url(${photo})` }} />
                <p className='font-semibold text-lg pb-2 flex items-end'>{name}</p>
            </div>

            <div className="w-full h-0.5 bg-slate-600" />

            <div className="p-6 bg-zinc-800">
                <p>{feedbackText}</p>
            </div>
        </div>
    )
}