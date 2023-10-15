import empresa from '../../assets/img/logoExample.png'

export default function FeedbackCard(){
    return(
        <div className="text-white w-[28rem] border-2 border-slate-600 rounded-md m-5">
            <div className="flex px-5 py-2 bg-verde_escuro">
                <div className="w-12 h-12 rounded-full bg-cover mr-4" style={{ backgroundImage: `url(${empresa})` }} />
                <p className='font-semibold text-lg pb-2 flex items-end'>Seeds sprout</p>
            </div>

            <div className="w-full h-0.5 bg-slate-600" />

            <div className="p-6 bg-zinc-800">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero, 
                </p>
            </div>
        </div>
    )
}