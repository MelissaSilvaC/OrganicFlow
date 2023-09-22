import React, { useState } from "react";
import PanelSignup from "./Account/Panel_Signup";
import PanelPartner from "./Account/Panel_Partner";

export default function ToggleSwitchTest(){
    const [isToggled, setIsToggled] = React.useState(false);

    /**
     * const spanAtivo = "h-full w-[130px] rounded-full bg-white p-2 justify-center shadow-black shadow-2xl absolute left-0 shadow-lg shadow-gray-400 cursor-pointer"
    const spanDesativo = "h-full w-[130px] rounded-full bg-white p-2 justify-center shadow-black shadow-2xl absolute right-0 shadow-lg shadow-gray-400 cursor-pointer"

     */
    

    const toggle = () => {
        setIsToggled((prev) => !prev);
    };

    
    return(
        <>
            <div className="w-[264px] h-[45px] rounded-full flex items-center justify-between bg-lime-700 border-2 border-neutral-50 font-semibold relative">
                <span
                    className={`transition-transform duration-900 
                    ${isToggled ? 'translate-x-full' : 'translate-x-0 '} 
                    h-full w-[130px] px-full rounded-full bg-white p-2 justify-center shadow-2xl absolute cursor-pointer
                    `}
                    onClick={toggle}
                >
                    {isToggled ? 'Cadastre-se' : 'Seja Parceiro'}
                </span>
            </div>

            <div className='flex flex-col mt-10'>
                {isToggled ? <PanelSignup /> : <PanelPartner />}
            </div>
        </>
    )
}

