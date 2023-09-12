import React from 'react'
import Banner from '../assets/img/Fundo/predio.png'

export default function Background({children}:{children?: React.ReactNode}) {
    return (
        <div>
            <div className='bg-cover h-screen relative' style={{ backgroundImage: `url(${Banner})` }}>
                <div>{children}</div>
            </div>
        </div>
    )
}

