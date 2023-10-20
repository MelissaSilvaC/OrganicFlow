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
  return (
    <div className='bg-preto'>
      <Banner />
      <Companies />
      <AboutUs />

      <div className='bg-cover py-14 px-28 max-lg:px-0 text-center items-center' style={{ backgroundImage: `url(${Papel})` }}>
        <p className='text-verde_folha font-bold text-4xl mb-8 max-lg:text-2xl'>Nosso Time</p>

        <div className='flex space-x-10 justify-center max-lg:space-x-0 max-lg:space-y-4 max-lg:flex-col max-lg:items-center max-lg:pr-4'>

          <div className='flex space-x-10 max-lg:space-x-0 '><TeamCard /><TeamCard /></div>
          <div className='flex space-x-10 max-lg:space-x-0 '><TeamCard /><TeamCard /></div>

        </div>
      </div>

      <FeedbackArea />
    </div>
  )
}
