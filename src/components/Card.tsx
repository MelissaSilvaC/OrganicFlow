import logoEmpresa from "../assets/img/logo_basica.png"

/**Aceitará como parametros o nome e imagem da empresa */
export default function Card() {
    return (
        <div>
            {/**Card */}
            <div className="w-[225px] h-[250px] m-5 bg-neutral-50 rounded-[20px] shadow border border-zinc-400 flex flex-col items-center">
                <div className=" h-full py-12">
                    <img className="w-24 h-24 rounded-full" src={logoEmpresa} />
                    <p className="text-xl mt-7">ORGÂNICO</p>
                </div>
            </div>
        </div>
    )
}
