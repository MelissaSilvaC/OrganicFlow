import Background from '../assets/img/Fundo/hotifruti.png'

export default function AboutUs(){
    return(
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
            <p className="text-2xl font-extrabold text-white">Sobre nós</p>
            {/**Página normal, sem funcionalidades */}
        </div>
    )
}