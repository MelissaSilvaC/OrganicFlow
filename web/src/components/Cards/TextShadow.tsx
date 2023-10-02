interface Props{
    nome : string
}

export default function TextShadow({nome}: Props){
    return (
        <div className='w-full h-[110px] rounded-b-[40px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end'>
            <p className='capitalize text-white font-semibold text-lg m-5' style={{ fontVariantCaps: `all-small-caps` }} >{nome}</p>
        </div>
    )
}