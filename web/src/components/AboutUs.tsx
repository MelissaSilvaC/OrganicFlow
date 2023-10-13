import rabanete from 'assets/img/rabanete.jpg'

export default function AboutUs(){
    return (
        <div className='text-white my-14'>
            <div className='flex justify-evenly'>
                {/**Comjunto de texto e botão */}
                <div>
                    <p className='text-verde_folha font-bold text-4xl mb-5'>Sobre Nós</p>
                    {/**Texto */}
                    <div className='w-[45rem] space-y-3'>
                        <p>
                            Curabitur velit justo, sodales eu malesuada sed, egestas quis magna. Mauris magna purus, pellentesque ut ante sollicitudin, vestibulum dictum lorem. Donec sem dolor, dignissim vitae dui a, dapibus pellentesque lectus. Pellentesque sed dolor sed mi dignissim tincidunt vel non lectus. Morbi vitae lacus vel ligula interdum egestas.
                        </p>
                        <p>
                            Donec porttitor erat tempor dui efficitur maximus a sit amet lorem. Donec tincidunt dignissim mi, quis pretium erat egestas lacinia. Nullam ultricies quis velit ac tempor. Sed quis blandit ligula. Nunc sapien arcu, egestas eget vulputate non, iaculis ut nunc.
                        </p>
                        <p>
                            Integer eget convallis nunc. Suspendisse ut turpis gravida, tempor nisl eget, dignissim magna. Nullam varius lectus erat, vitae lobortis velit dignissim sed. Donec fermentum, augue imperdiet accumsan viverra, turpis sapien iaculis mauris, posuere eleifend neque justo sed nibh.
                        </p>
                    </div>
                    <button className='bg-verde_folha mt-5 w-[20rem] h-[3rem] rounded-lg text-lg font-semibold shadow-md hover:bg-verde_palido'>Junte-se a Nós</button>
                </div>
                <div>
                    <img src={rabanete} className='w-[450px] h-[400px]' />
                </div>
            </div>
        </div>
    )
}