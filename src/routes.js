import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupScreen from './pages/SignupScreen';
import ProfileCompany from './pages/Profiles/ProfileCompany';
import ProfileInspector from './pages/Profiles/ProfileInspector';
import LoginScreen from 'pages/LoginScreen';
import Navbar from 'components/Navbar';
import Home from 'pages/App';
import TimelineList from 'pages/Inspector/TimelineList';
import Timeline from 'pages/Inspector/Timeline';
import Complaint from 'pages/Administration/DashboardPanels/Complaint';
import Dashboard from 'pages/Administration/Dashboard';
import PrivateRoute from './auth';
import TimelinesTable from 'components/TimelinesTable';
import AbleManager from 'pages/Administration/DashboardPanels/AbleManager';
import ComplaintsList from 'pages/Administration/DashboardPanels/ComplaintsList';
import BanedUserView from 'pages/Administration/DashboardPanels/BanedUserView';

export default function AppRouter() {
  return (
      <div className='bg-preto h-screen font-montserrat'>
          <Router>
              <Routes>
                <Route element={<PrivateRoute />} >

                  <Route path='admin/dashboard' element={<Dashboard />}>
                    <Route index element={<AbleManager/>}/>
                    <Route path='admin/dashboard/lista-denuncias' element={<ComplaintsList/>} />
                    <Route path='admin/dashboard/lista-denuncias/denuncia' element={<Complaint />} />
                    <Route path='admin/dashboard/lista-banidos' element={<BanedUserView />} />
                  </Route>

                  <Route path='fiscal/perfil/:id' element={<ProfileInspector />} />   
                  <Route path=':name/perfil/:id' element={<ProfileCompany />} />
                </Route>

                <Route path='/' element={<Navbar />}>
                  <Route index element={<Home />} />
                    <Route path=':name/:id' element={<ProfileCompany />} />

                    <Route path=':name/lista/:id' element={<TimelineList />}>
                      <Route index element={<TimelinesTable />} />
                      <Route path=':name/lista/linha/:id' element={<Timeline />} />
                    </Route>
               </Route>

                <Route path='/sessao' element={<SignupScreen />} />
                <Route path='/sessao/login' element={<LoginScreen />} />
              </Routes>
          </Router>
      </div>
  );
}
