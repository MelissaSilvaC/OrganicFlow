import fundo from '../../../assets/img/tomate.jpg'

interface ITimeline{
    bgProduct?: string,
    txtProduct?: string,
}

export default function TTimeline({bgProduct, txtProduct} : ITimeline){
    return(
        <div className="bg-gray-300 w-[560px] h-[130px] rounded-e-[50px] max-sm:rounded-e-[35px] max-lg:h-[110px] max-sm:h-[80px] max-lg:w-[350px] max-sm:w-[300px] bg-cover flex items-end" 
            style={{ backgroundImage: `url(${bgProduct})` }}
        >
            <div className='w-full h-[50%] rounded-br-[49px] max-sm:rounded-br-[34px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end' >
                <p className='text-white font-semibold text-3xl max-lg:text-xl m-5 max-sm:m-2 ml-14 max-sm:ml-7' style={{ fontVariantCaps: `all-small-caps` }}>{txtProduct}</p>
            </div>
        </div>
    )
}