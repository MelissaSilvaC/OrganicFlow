import fundo from '../../assets/img/tomate.jpg'

export default function TitleTimeLine(){
    return(
        <div className="bg-red-300 w-[560px] h-[130px] rounded-tr-[50px] rounded-br-[50px] bg-cover flex items-end" style={{ backgroundImage: `url(${fundo})` }}>
            <div className='w-full h-[100px] rounded-br-[49px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end' >
                <p className='text-white font-semibold text-2xl m-5 ml-14' style={{ fontVariantCaps: `all-small-caps` }}>produto</p>
            </div>
        </div>
    )
}