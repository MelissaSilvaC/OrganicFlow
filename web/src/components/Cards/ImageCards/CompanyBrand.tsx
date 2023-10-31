import empresa from '../../../assets/img/logoExample.png'
import { Link } from 'react-router-dom';

export default function CompanyBrand({ photo, id, name }: { id:number, photo: string, name?: string }){
    return (
        <Link to={`/empresa/perfil/${id}`}>
        <>
            <div 
                className="w-36 h-36 max-lg:w-24 max-lg:h-24 mx-4 max-lg:mx-2 my-2 rounded-full shadow-md bg-cover hover:animate-pulse hover:cursor-pointer"
                style={{ backgroundImage: `url(${photo})`  }} 
            />
        </>
        </Link>
    )
}