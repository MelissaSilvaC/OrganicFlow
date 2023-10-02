import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupScreen from './pages/SignupScreen'
import Companies from './pages/Company/Companies'
import ProfileCompany from './pages/Company/ProfileCompany'
import ProfileInspector from './pages/Inspector/ProfileInspector'
import LoginScreen from 'pages/LoginScreen'
import AboutUs from 'pages/AboutUs'
import ComplaintsList from 'pages/Administration/ComplaintsList'
import MUINavbar from 'components/navbar/MUINavbar'
import Home from 'pages/Home'
import TimelineList from 'pages/Inspector/TimelineList'
import Timeline from 'pages/Inspector/TimeLine'

export default function AppRouter(){
    return(
        
        <div className='bg-preto'>
            <Router>
                {/**Se aparecer uma barra horizontal na tela, foi a navbar */}

                <Routes>
                    <Route path='/' element={<MUINavbar />} >
                        <Route index element={<Home />} />
                        <Route path='sobre' element={<AboutUs />} />
                        <Route path='empresas' element={<Companies />} />
                        <Route path='empresa/perfil' element={<ProfileCompany />} />
                        <Route path='fiscal/perfil' element={<ProfileInspector />} />
                        <Route path='fiscal/lista' element={<TimelineList />} />
                        <Route path='fiscal/lista/linhatempo' element={<Timeline />} />
                        <Route path='admin/listadenuncias' element={<ComplaintsList />} />
                    </Route>

                    <Route path='/sessao' element={<SignupScreen />} />
                    <Route path='/sessao/login' element={<LoginScreen />} />


                    {/**
                    * <Route path='/sessao' element={<AccountScreen />} />
                    <Route path='/teste' element={<New_Navbar />} />
                */}

                </Routes>
            </Router>
        </div>
        
    )
}