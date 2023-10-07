import empresa from '../../assets/img/logo2.png'
import React, { useState } from 'react';
import TextShadow from './TextShadow';
import { Link } from 'react-router-dom';

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
            <Link to='/empresa/perfil'>
                <div
                    className="w-56 h-44 mx-5 flex flex-col justify-end rounded-[50px] shadow border-2 border-verde_escuro bg-verde_folha bg-cover"
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
            </Link>
        </>
    )
}