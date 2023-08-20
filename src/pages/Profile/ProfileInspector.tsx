import CompanyCard from "../../components/CompanyCard";
import ProductCard from "../../components/ProductCard";
import ProfileScreen from "../ProfileScreen";

export default function ProfileInspector(){
    return (
        <ProfileScreen>
            <CompanyCard/>
            <ProductCard/>
        </ProfileScreen>
    )
}