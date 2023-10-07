import IProduct from "types/IProduto";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TextShadow from "./TextShadow";

export default function TestProduct({ image, nameProduct }: IProduct) {
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
                    className="w-44 h-44 m-3 flex flex-col justify-end rounded-[50px] border-2 border-verde_escuro bg-verde_folha bg-cover"
                    style={{
                        backgroundImage: `url(${image})`,
                        cursor: hover ? 'pointer' : 'auto'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover && (
                        <TextShadow nome={nameProduct} />
                    )}
                </div>
            </Link>
        </>
    )

}