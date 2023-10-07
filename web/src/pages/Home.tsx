import { useState } from 'react'
import Background from '../assets/img/Fundo/hotifruti.png'
import Button from 'components/Items_Forms/Button'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    const botaoTCSS = 'bg-verde_folha w-[30%] h-[50px] rounded-xl text-xl font-bold text-white my-5 hover:bg-verde_palido'
    
    return(
        <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
            <Button 
                botaoCSS={botaoTCSS} 
                texto='Perfil empresa' 
                onClick={() => { navigate('/empresa/perfil')}}
            />
            <Button
                botaoCSS={botaoTCSS}
                texto='Perfil fiscal'
                onClick={() => { navigate('/fiscal/perfil') }}
            />
            <Button
                botaoCSS={botaoTCSS}
                texto='Lista de linhas do tempo'
                onClick={() => { navigate('/fiscal/lista') }}
            />
            <Button
                botaoCSS={botaoTCSS}
                texto='Linha do tempo'
                onClick={() => { navigate('/fiscal/lista/linhatempo') }}
            />
            <Button
                botaoCSS={botaoTCSS}
                texto='Lista de denúncias'
                onClick={() => { navigate('/admin/listadenuncias') }}
            />
        </div>
    )
}