import React, { useState } from "react";
import PanelSignup from "./Panel_Signup";
import PanelPartner from "./Panel_Partner";

export default function ToggleSwitchTest(){
    const [isToggled, setIsToggled] = React.useState(false);
    const toggle = () => {
        setIsToggled((prev) => !prev);
    };
    
    return(
        <>
            <div className="w-[264px] h-[45px] max-lg:h-[35px] rounded-full flex items-center justify-between bg-lime-700 border-2 border-neutral-50 font-semibold relative">
                <span
                    className={`transition-transform duration-900 
                    ${isToggled ? 'translate-x-full' : 'translate-x-0 '} 
                    h-full w-[130px] px-full rounded-full bg-white p-2 max-lg:p-1.5 justify-center shadow-2xl absolute cursor-pointer
                    `}
                    onClick={toggle}
                >
                    {isToggled ? 'Seja Parceiro' : 'Cadastre-se'}
                </span>
            </div>

            <div className='flex flex-col mt-10'>
                {isToggled ? <PanelPartner /> : <PanelSignup />}
            </div>
        </>
    )
}

