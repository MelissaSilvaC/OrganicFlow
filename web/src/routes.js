import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupScreen from './pages/SignupScreen'
import ProfileCompany from './pages/Profiles/ProfileCompany'
import ProfileInspector from './pages/Profiles/ProfileInspector'
import LoginScreen from 'pages/LoginScreen'
import ComplaintsList from 'pages/Administration/ComplaintsList'
import MUINavbar from 'components/Navbar'
import Home from 'pages/Home'
import TimelineList from 'pages/Inspector/TimelineList'
import Timeline from 'pages/Inspector/TimeLine'
import RegisterReport from 'pages/Inspector/RegisterReport'

export default function AppRouter(){
    return(
        
        <div className='bg-preto h-screen'>
            <Router>
                {/**Se aparecer uma barra horizontal na tela, foi a navbar */}

                <Routes>
                    <Route path='/' element={<MUINavbar />} >
                        <Route index element={<Home />} />
                        <Route path='empresa/perfil/:id' element={<ProfileCompany />} />
                        <Route path='fiscal/perfil' element={<ProfileInspector />} />
                        <Route path='fiscal/lista' element={<TimelineList />} />
                        <Route path='fiscal/lista/linhatempo' element={<Timeline />} />
                        <Route path='fiscal/lista/linhatempo/cadastrar' element={<RegisterReport />} />
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