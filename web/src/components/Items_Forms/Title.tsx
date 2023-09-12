import Details from '../../assets/img/green-detail.png'

interface Props {
    texto: string
}

export default function Title({ texto }: Props){
    return (
        <div className='flex justify-center items-center mb-2'>
            <img className='w-40 h-24' src={Details} />
            <p className='font-extrabold text-white text-5xl w-full'>{texto}</p>
            <img className='w-40 h-24' src={Details} />
        </div>
    )
}