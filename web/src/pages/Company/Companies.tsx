import Background from '../../assets/img/Fundo/predio.png'

export default function Companies(){
    return (
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
            <p className="text-2xl font-extrabold text-white">Home</p>
        </div>
    )
}