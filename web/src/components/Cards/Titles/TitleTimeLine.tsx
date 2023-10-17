import fundo from '../../../assets/img/tomate.jpg'

export default function TitleTimeLine(){
    return(
        <div 
            className="bg-gray-300 w-[560px] h-[130px] rounded-e-[50px] max-lg:h-[110px] max-lg:w-[350px] bg-cover flex items-end" 
            style={{ backgroundImage: `url(${fundo})` }}
        >
            <div className='w-full h-[50%] rounded-br-[49px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end' >
                <p className='text-white font-semibold text-2xl max-lg:text-xl m-5 ml-14' style={{ fontVariantCaps: `all-small-caps` }}>produto</p>
            </div>
        </div>
    )
}