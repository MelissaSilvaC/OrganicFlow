import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupScreen from './pages/SignupScreen'
import ProfileCompany from './pages/Profiles/ProfileCompany'
import ProfileInspector from './pages/Profiles/ProfileInspector'
import LoginScreen from 'pages/LoginScreen'
import Navbar from 'components/Navbar'
import Home from 'pages/App'
import TimelineList from 'pages/Inspector/TimelineList'
import Timeline from 'pages/Inspector/Timeline'
import Complaint from 'pages/Administration/Complaint'
import Dashboard from 'pages/Administration/Dashboard'

export default function AppRouter(){
    return(
        
        <div className='bg-preto h-screen font-montserrat'>
            <Router>
                <Routes>
                    <Route path='/' element={<Navbar />} >
                        <Route index element={<Home />} />
                        <Route path='empresa/perfil/:id' element={<ProfileCompany />} />
                        <Route path='fiscal/perfil/:id' element={<ProfileInspector />} />
                        <Route path='fiscal/lista/:id' element={<TimelineList />} />
                        <Route path='fiscal/lista/linhatempo/:id' element={<Timeline />} />
                        <Route path='admin/dashboard' element={<Dashboard />} />
                        <Route path='admin/dashboard/denuncia' element={<Complaint />} />
                    </Route>
                    
                    <Route path='/sessao' element={<SignupScreen />} />
                    <Route path='/sessao/login' element={<LoginScreen />} />
                </Routes>
            </Router>
        </div>
        
    )
}