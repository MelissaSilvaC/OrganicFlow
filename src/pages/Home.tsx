import Background from '../assets/img/hotifruti.png'

export default function Home(){
    return(
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
            <p className="text-2xl font-extrabold text-white">Home</p>
        </div>
    )
}