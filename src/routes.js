import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TelaSessao from './pages/TelaSessao'
import Empresas from './pages/Empresa/Empresas'
import EmpSelecionada from './pages/Empresa/EmpresaSelecionada'
import PopupSenha from './components/Sessao/PopupSenha'
import EmpSelecionadaJu from './pages/Empresa/EmpSelecionadaJu'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<TelaSessao />}/>
                <Route path='/empresa/selecao' element={<EmpSelecionadaJu />} />
                <Route path='/empresa' element={<Empresas />} />
                <Route path='/teste' element={<PopupSenha />} />
            </Routes>
        </Router>
    )
}