import empresa from '../../assets/img/logoExample.png'
import React, { useState } from 'react';
import TextShadow from './TextShadow';

export default function CompanyCard() {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <div
                className="w-44 h-36  mx-5 flex flex-col justify-end rounded-[50px] shadow border-2 border-verde_escuro bg-cover"
                style={{
                    backgroundImage: `url(${empresa})`,
                    cursor: hover ? 'pointer' : 'auto'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {hover && (
                    <TextShadow nome='empresa' />
                )}
            </div>
        </>
    )
}