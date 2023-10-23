interface Props{
    nome : string
}

export default function TextShadow({nome}: Props){
    return (
        <div className='w-full h-[110px] max-sm:h-[100px] rounded-b-[40px] max-sm:rounded-b-[25px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end'>
            <p className='text-white font-semibold max-sm:text-base text-lg m-5 max-sm:m-3 max-sm:self-center' style={{ fontVariantCaps: `all-small-caps` }} >{nome}</p>
        </div>
    )
}