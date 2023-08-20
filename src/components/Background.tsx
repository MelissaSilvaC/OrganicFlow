import React from 'react'
import banner from '../assets/img/banner.jpg'

export default function Background({children}:{children?: React.ReactNode}) {
    return (
        <div>
            {/** A imagem de fundo é basicamente uma imagem e um degradê branco */}
            <div className='static'>
                <img src={banner} alt="Banner do site" className='w-full h-[750px] object-cover relative' />
                <div className='w-screen h-[192px] absolute top-[560px] bg-gradient-to-t from-white to-transparent' />
                {/** É dentro dessa props.children que outros código podem ser inseridos, nesse caso, vamos inserir o código da barra de navegação*/}
                <div>{children}</div>
            </div>
        </div>
    )
}

