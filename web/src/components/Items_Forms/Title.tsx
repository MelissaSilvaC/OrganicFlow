import Details from '../../assets/img/green-detail.png'

interface Props {
    texto: string
}

export default function Title({ texto }: Props){
    return (
        <div className='flex justify-center w-full px-28 items-center mb-4'>
            <img className='w-24 h-12 max-lg:w-16 max-lg:h-8' src={Details} />
            <p className='px-5 font-extrabold max-lg:font-bold text-white text-4xl max-lg:text-2xl text-center'>{texto}</p>
            <img className='w-24 h-12 max-lg:w-16 max-lg:h-8' src={Details} />
        </div>
    )
}