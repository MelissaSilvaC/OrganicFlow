import empresa from '../../assets/img/logo2.png'

export default function CompanyCard(){
    return(
        <div className="w-64 h-52 mx-5 flex flex-col justify-end rounded-[50px] shadow border-2 border-verde_escuro bg-verde_folha bg-cover" style={{ backgroundImage: `url(${empresa})` }}>
            {/**Texto e sombra */}
            <div className='w-full h-[130px] rounded-b-[40px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end' >
                <p className='capitalize text-white font-semibold text-xl m-6'>empresa</p>
            </div>
        </div>
    )
}