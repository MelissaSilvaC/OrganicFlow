interface ITeam{
    photo : string
    name : string,
    role : string,
    description?: string,
}
//<img src={photo} />
export default function TeamCard({photo, name, role, description} : ITeam){
    return (
        <div className="bg-preto w-[20rem] max-lg:w-[10rem] max-lg:mx-4">
            <div className="bg-red-200 h-[15rem] max-lg:h-[10rem] w-full bg-cover" style={{ backgroundImage: `url(${photo})` }}/>
            <div className='p-5'>
                <div>
                    <div className="py-4 text-verde_folha font-bold max-lg:font-semibold text-center">
                        <p className='text-xl max-lg:text-lg'>{name}</p>
                        <p className='text-base'>{role}</p>
                    </div>
                    <p className="text-white opacity-70 text-center pb-12 max-lg:text-sm max-lg:hidden">{description}</p>
                </div>
            </div>
        </div>
    )
}