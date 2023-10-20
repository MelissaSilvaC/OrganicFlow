import rabanete from 'assets/img/rabanete.jpg'

export default function TeamCard(){
    return (
        <div className="bg-preto w-[20rem] max-lg:w-[10rem] max-lg:mx-4">
            <img src={rabanete} className='' />
            <div className='p-5'>
                <div>
                    <div className="py-4 text-verde_folha font-bold max-lg:font-semibold text-center">
                        <p className='text-xl max-lg:text-lg'>Nome do integrante</p>
                        <p className='text-base'>Cargo</p>
                    </div>
                    <p className="text-white opacity-70 text-center pb-12 max-lg:text-sm max-lg:hidden">
                        Sed quis blandit ligula. Nunc sapien arcu, egestas eget vulputate non, iaculis ut nunc. Sed molestie orci dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}