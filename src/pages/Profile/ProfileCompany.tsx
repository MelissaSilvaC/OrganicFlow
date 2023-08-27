import Navbar from "components/Navbar";
import ProductCard from "../../components/Cards/ProductCard";
import ProfileScreen from "../ProfileScreen";
import { GrAddCircle } from 'react-icons/gr';

export default function ProfileCompany(){
    return (
        <div>
            <ProfileScreen>
                <div className="flex m-24 flex-wrap">
                    <div className="w-48 h-48 m-5 flex flex-col justify-center items-center rounded-[50px] border-4 border-verde_escuro bg-verde_palido">
                        <GrAddCircle className='w-24 h-24' />
                    </div>
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                        <ProductCard /><ProductCard /><ProductCard /><ProductCard />
                </div>
            </ProfileScreen>
        </div>
    )
}