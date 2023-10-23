import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextShadow from "./TextShadow";

interface ProdutoProps{
    id:number;
    nome:string;
    photo:string;
}

const TestProduct:React.FC<ProdutoProps>=({ nome,photo}) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <Link to='/fiscal/lista'>
                <div
                    className="w-44 h-44 max-sm:w-28 max-sm:h-28 m-3 max-sm:m-1 flex flex-col justify-end rounded-[50px] max-sm:rounded-[30px] border-2 border-verde_escuro bg-verde_folha bg-cover"
                    style={{
                        backgroundImage: `url(${photo})`,
                        cursor: hover ? 'pointer' : 'auto'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover && (
                        <TextShadow nome={nome} />
                    )}
                </div>
            </Link>
        </>
    )

}
export default TestProduct