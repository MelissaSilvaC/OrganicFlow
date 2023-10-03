import AccordionSummary from '@mui/material/AccordionSummary';

interface Props {
    month: string
    day: string
    stageName: string
}

export default function StageCard({ month, day, stageName } : Props) {
    /**
     * DESABILITADO
     * Mes : zinc-600
     * Estágio : #BDBDBD
     * 
     * (sem imagem)
     */

    /**
     * ABILITADO
     * Mes : verde_escuro
     * Estágio : #80ab6b
     * 
     * (com imagem se o fiscal colocar)
     */


    return (
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
                background: '#BDBDBD',
                height: '120px',
                width: '70rem',
                display: 'flex',
                padding: '0px',
                margin: '0px',
            }}>
            <div className='bg-zinc-600 h-full w-[30%] py-[28px] text-2xl font-medium text-white flex flex-col justify-center items-center '>
                <p>{month}</p>
                <p>{day}</p>
            </div>
            <div className='w-full flex items-center ml-12 '>
                <p>{stageName}</p>
            </div>
            <div className='bg-red-200 py-[28px] w-[30%]'>Imagem</div>
            <div className='w-20' />
        </AccordionSummary>
    )
}