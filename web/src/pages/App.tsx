import Button from 'components/Items_Forms/Button'
import { useNavigate } from 'react-router-dom'
import Companies from 'components/Home/Companies';
import Banner from 'components/Home/Banner';
import AboutUs from 'components/Home/AboutUs';
import Papel from '../assets/img/Fundo/papel1.png'
import TeamCard from 'components/Cards/InfoCards/Team';
import { useState } from 'react';
import FeedbackArea from 'components/Home/FeedbackArea';

export default function App() {
  const navigate = useNavigate()
  const botaoTCSS = 'bg-verde_folha w-[30%] h-[50px] rounded-xl text-xl font-bold text-white my-5 hover:bg-verde_palido'

  return (
    <div className='bg-preto'>
      <Banner />
      <Companies />
      <AboutUs />

      <div className='bg-cover py-14 px-28 flex flex-col items-center' style={{ backgroundImage: `url(${Papel})` }}>
        <p className='text-verde_folha font-bold text-4xl mb-8'>Nosso Time</p>
        <div className='flex space-x-10'>
          <TeamCard /><TeamCard /><TeamCard /><TeamCard />
        </div>
      </div>

      <FeedbackArea />
    </div>
  )
}
