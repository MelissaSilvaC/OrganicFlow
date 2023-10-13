import Button from 'components/Items_Forms/Button'
import { useNavigate } from 'react-router-dom'
import Companies from 'components/Companies';
import Banner from 'components/Banner';
import AboutUs from 'components/AboutUs';
import Papel from '../assets/img/Fundo/papel1.png'
import TeamCard from 'components/Cards/TeamCard';

export default function App() {
  const navigate = useNavigate()
  const botaoTCSS = 'bg-verde_folha w-[30%] h-[50px] rounded-xl text-xl font-bold text-white my-5 hover:bg-verde_palido'

  return (
    <div className='bg-preto'>
      <Banner />
      <Companies />
      <AboutUs />

      <div className='bg-cover h-[50rem] px-28' style={{ backgroundImage: `url(${Papel})` }}>
        <p>Nosso Time</p>
        <TeamCard />
      </div>

      <div className='mt-[25rem]'/>

      <Button
        botaoCSS={botaoTCSS}
        texto='Perfil empresa'
        onClick={() => { navigate('/empresa/perfil') }}
      />
      <Button
        botaoCSS={botaoTCSS}
        texto='Perfil fiscal'
        onClick={() => { navigate('/fiscal/perfil') }}
      />
      <Button
        botaoCSS={botaoTCSS}
        texto='Lista de linhas do tempo'
        onClick={() => { navigate('/fiscal/lista') }}
      />
      <Button
        botaoCSS={botaoTCSS}
        texto='Linha do tempo'
        onClick={() => { navigate('/fiscal/lista/linhatempo') }}
      />
      <Button
        botaoCSS={botaoTCSS}
        texto='Lista de denúncias'
        onClick={() => { navigate('/admin/listadenuncias') }}
      />
      <Button
        botaoCSS={botaoTCSS}
        texto='Telas teste'
        onClick={() => { navigate('/teste') }}
      />
    </div>
  )
}
