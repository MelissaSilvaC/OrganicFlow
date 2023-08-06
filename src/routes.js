import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TelaSessao from './pages/TelaSessao'
import Empresas from './pages/Empresa/Empresas'
import EmpSelecionada from './pages/Empresa/EmpresaSelecionada'

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<TelaSessao />}/>
                <Route path='/empresa/selecao' element={<EmpSelecionada />} />
                <Route path='/empresa' element={<Empresas />} />
            </Routes>
        </Router>
    )
}