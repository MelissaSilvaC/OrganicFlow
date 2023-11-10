import Button from 'components/Items_Forms/Button'
import { useNavigate } from 'react-router-dom'
import Companies from 'components/Home/Companies';
import Banner from 'components/Home/Banner';
import AboutUs from 'components/Home/AboutUs';
import Green from '../assets/img/Fundo/greenLines.png'
import TeamCard from 'components/Cards/InfoCards/Team';
import Julia from 'assets/img/Equipe/Julia.jpeg'
import Lucas from 'assets/img/Equipe/Lucas.jpeg'
import Melissa from 'assets/img/Equipe/m.jpeg'
import Nicole from 'assets/img/Equipe/Nicole.jpeg'

export default function App() {
  return (
    <div className='bg-preto'>
      <Banner />
      <Companies />
      <AboutUs />

      <div className='bg-cover h-[50rem] py-14 px-28 max-lg:px-0 text-center items-center' style={{ backgroundImage: `url(${Green})` }}>
        <p className='text-white font-bold text-4xl mb-10 max-lg:text-2xl'>Nosso Time</p>
        <div className='flex space-x-10 justify-center max-lg:space-x-0 max-lg:space-y-4 max-lg:flex-col max-lg:items-center max-lg:pr-4'>
          <div className='flex space-x-10 max-lg:space-x-0 '>
            <TeamCard
              photo={Julia}
              name='Julia Aparecida'
              role='Idealista'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            />
            <TeamCard
              photo={Lucas}
              name='Lucas Hideo'
              role='Programador back-end'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            />
          </div>
          <div className='flex space-x-10 max-lg:space-x-0 '>
            <TeamCard
              photo={Melissa}
              name='Melissa da Silva'
              role='Programadora front-end'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            />
            <TeamCard
              photo={Nicole}
              name='Nicoly Gregorato'
              role='Idealista'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}