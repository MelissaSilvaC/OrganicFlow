import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupScreen from './pages/SignupScreen'
import ProfileCompany from './pages/Profiles/ProfileCompany'
import ProfileInspector from './pages/Profiles/ProfileInspector'
import LoginScreen from 'pages/LoginScreen'
import ComplaintsList from 'pages/Administration/ComplaintsList'
import Navbar from 'components/Navbar'
import Home from 'pages/App'
import Teste from 'pages/teste'
import TimelineList from 'pages/Inspector/TimelineList'
import Timeline from 'pages/Inspector/TimeLine'
import Complaint from 'pages/Administration/Complaint'
import Footer from 'components/Footer'

export default function AppRouter(){
    return(
        
        <div className='bg-preto h-screen font-montserrat'>
            <Router>
                {/**Se aparecer uma barra horizontal na tela, foi a navbar */}
                {/**ARRUMAR FOOTER APARECENDO NA TELA DE LOGIN/CADASTRO */}
                <Routes>
                    <Route path='/' element={<Navbar />} >
                        <Route index element={<Home />} />
                        <Route path='/teste' element={<Teste />} />
                        <Route path='empresa/perfil/:id' element={<ProfileCompany />} />
                        <Route path='fiscal/perfil' element={<ProfileInspector />} />
                        <Route path='fiscal/lista' element={<TimelineList />} />
                        <Route path='fiscal/lista/linhatempo' element={<Timeline />} />
                        <Route path='admin/listadenuncias' element={<ComplaintsList />} />
                        <Route path='admin/listadenuncias/denuncia' element={<Complaint />} />

                        {/**<Route path='*' element={<Footer />} /> */}
                    </Route>
                    
                    <Route path='/sessao' element={<SignupScreen />} />
                    <Route path='/sessao/login' element={<LoginScreen />} />
                </Routes>
                <Footer />
            </Router>
        </div>
        
    )
}