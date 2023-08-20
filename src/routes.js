import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AccountScreen from './pages/AccountScreen'
import Companies from './pages/Company/Companies'
import PopupPassword from './components/Account/PopupPassword'
import ProfileCompany from './pages/ProfileScreen'
import Navbar from './components/Navbar'
import New_Navbar from './components/Float_Navbar'

export default function AppRouter(){
    return(
        <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={<AccountScreen />}/>
                    
                    <Route path='/perfil' element={<ProfileCompany />} />
                    <Route path='/empresa' element={<Companies />} />
                    <Route path='/teste' element={<New_Navbar />} />
                </Routes>
        </Router>
    )
}