import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TelaSessao from './pages/TelaSessao'
import Empresas from './pages/Empresa/Empresas'
import EmpSelecionada from './pages/Empresa/EmpresaSelecionada'
import Sessao from './pages/Sessao'
import Card from './components/Card'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Sessao />}/>
                <Route path='/empresa/selecao' element={<EmpSelecionada />} />
                <Route path='/empresa' element={<Empresas />} />
                <Route path='/teste' element={<Card />} />
            </Routes>
        </Router>
    )
}