import fundoLogin from '../assets/img/fundo_login.jpg'
import logoOF from '../assets/img/logo branca c. letras.png'
import PainelCadastro from '../components/Sessao/PainelCadastro'
import PainelLogin from '../components/Sessao/PainelLogin'
import PainelParceiro from '../components/Sessao/PainelParceiro'

export default function TelaSessao() {
    

    return (
        <div className='w-screen h-screen '>
            {/** Imagem de fundo */}
            <img src={fundoLogin} className='bg-cover w-full h-full brightness-50 static' />

            {/** Painel lateral e logo */}
            <div className='flex flex-row gap-5 absolute top-0'>
                {/** Painel lateral */}
                <div className='flex basis-1/2 flex-col justify-center items-center bg-black bg-opacity-50 w-full h-screen '>

                    <div className='flex flex-col'>
                        {/**<PainelLogin /> */}
                        <PainelParceiro />
                    </div>

                </div>

                {/** Logo */}
                <div className='flex basis-2/3 items-center '>
                    <img src={logoOF} className='' />
                </div>
            </div>


        </div>
    )
}