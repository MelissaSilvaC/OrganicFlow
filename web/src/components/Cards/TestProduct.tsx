import IProduct from "types/IProduct";

export default function TestProduct({ image, nameProduct } : IProduct) {
    return (
        <div className="w-52 h-52 m-3 flex flex-col justify-end rounded-[50px] border-2 border-verde_escuro bg-verde_folha bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className='w-full h-[110px] rounded-b-[40px] bg-gradient-to-t from-black to-transparent flex flex-col justify-end' >
                <p className='capitalize text-white font-semibold text-lg m-5'>{nameProduct}</p>
            </div>
        </div>
    )

}