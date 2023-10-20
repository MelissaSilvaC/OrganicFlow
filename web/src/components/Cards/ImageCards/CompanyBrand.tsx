import empresa from '../../../assets/img/logoExample.png'

export default function CompanyBrand(){
    return (
        <>
            <div className="w-36 h-36 max-lg:w-24 max-lg:h-24 mx-4 max-lg:mx-2 my-2 rounded-full shadow-md bg-cover hover:animate-pulse hover:cursor-pointer"
                style={{ backgroundImage: `url(${empresa})` }} 
            />
        </>
    )
}