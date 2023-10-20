import rabanete from 'assets/img/rabanete.jpg'

export default function AboutUs(){
    return (
        <div className='text-white my-14'>
            <div className='flex justify-evenly max-lg:flex-col max-lg:px-5'>
                {/**Comjunto de texto e botão */}
                <div>
                    <p className='text-verde_folha font-bold text-4xl mb-5 max-lg:text-2xl'>Sobre Nós</p>
                    {/**Texto */}
                    <div className='w-[45rem] space-y-1 max-lg:text-sm max-lg:w-auto max-lg:mb-8'>
                        <p className='max-lg:hidden'>
                            Nos conhecemos na Escola Técnica Estadual (ETEC) - Júlia, Lucas, Melissa e Nicoly - e no processo da criação do nosso Trabalho de Conclusão de Curso (TCC), reconhecemos a importância de concretizar esse projeto. 
                        </p>
                        <p>
                            Em um mundo onde a autenticidade e a qualidade dos produtos se tornam cada vez mais incertas, queríamos oferecer uma solução confiável. A Organic Flow nasceu para atender a essa necessidade crescente.
                        </p>
                        <p>
                            Esta iniciativa visa aprimorar a qualidade de vida daqueles com necessidades alimentares específicas e oferecer suporte aos indivíduos preocupados com a origem e a qualidade de seus alimentos.
                        </p>
                    </div>
                    <button className='bg-verde_folha mt-5 w-[20rem] h-[3rem] rounded-lg text-lg font-semibold shadow-md hover:bg-verde_palido max-lg:hidden'>Junte-se a Nós</button>
                </div>
                <div className='max-lg:flex max-lg:justify-center'>
                    <img src={rabanete} className='w-[450px] h-[400px] max-lg:w-[250px] max-lg:h-[200px] max-lg:hidden' />
                </div>
            </div>
        </div>
    )
}