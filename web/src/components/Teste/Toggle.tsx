import { useState } from "react"

export default function ToggleSwitch(){
    const desativado = 'p-3 opacity-60'
    const ativado = 'h-full w-[130px] rounded-full bg-white p-2 justify-center shadow-black shadow-2xl'
    const [Checked, setChecked] = useState(false)

    const Switched = () => {
        setChecked((prevState) => !prevState)
    }

    console.log("is checked ", Checked)

    return(
        <button 
        onClick={Switched}
        className='w-[300px] h-[45px] rounded-full flex items-center justify-between bg-lime-700 border-2 border-neutral-50 font-semibold'
        >

            <div className={Checked ? ativado : desativado}>
                <p>Cadastre-se</p>
            </div>

            <div className={Checked ? ativado : desativado}>
                <p>Seja Parceiro</p>
            </div>

        </button>
    )
}