import empresa from '../../assets/img/logoExample.png'

export default function InfoManagerCard(){
    return(
        <div className="text-white w-[25rem] border-2 border-slate-600 rounded-md flex p-4 space-x-4 m-5 hover:bg-cinza_escuro hover:cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-cover" style={{ backgroundImage: `url(${empresa})` }} />
            <div className='flex flex-col justify-center'>
                <p className='font-semibold text-lg pb-2'>Seeds sprout</p>
                <p>seedsprout@email.com</p>
                <p>97.206.822/0001-65</p>
            </div>
        </div>
    )
}