import { FiSearch } from 'react-icons/fi';

interface Props {
    val : string
    change: (e: any) => void
    placeholder : string
}

export default function SearchBar({ val, change, placeholder } : Props){
    return (
        <div className='flex justify-end max-lg:flex-col max-lg:items-center mt-5 text-black'>
            <div className='w-[450px] max-lg:w-[300px] h-10 bg-neutral-100 rounded-[50px] flex px-6'>
                <input
                    className="bg-transparent grow focus:outline-none max-lg:text-sm"
                    placeholder={placeholder}
                    value={val}
                    onChange={change}
                />
                <div className='w-8 h-8 rounded-full bg-verde_escuro flex self-center justify-center justify-self-end'>
                    <FiSearch className='w-5 h-5 flex self-center stroke-white' />
                </div>
            </div>
        </div>
    )
}