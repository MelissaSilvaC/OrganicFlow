import AccordionSummary from '@mui/material/AccordionSummary';

interface Props {
    month?: string
    day?: string
    stageName?: string
    enableReport?: boolean
    Num_medal?: string
    medal?: boolean
    handleMedal?: () => void
    handleColors?: () => void
}

export default function StageCard({ month, day, stageName, enableReport, medal, Num_medal, handleMedal, handleColors }: Props) {
    const accordionStyles = {
        background: enableReport ? '#80ab6b' : '#BDBDBD',
        height: '140px',
        width: '70rem',
        display: 'flex',
        padding: '0px',
        margin: '0px',
    };

    const cardBackground = enableReport ? 'bg-verde_escuro' : 'bg-zinc-600';

    return (
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={accordionStyles}
        >

            <div className={`${cardBackground} h-full w-[20rem] py-[38px] text-2xl font-medium text-white flex flex-col justify-center items-center`}>
                <p>{month}</p>
                <p>{day}</p>
            </div>

            <div className='flex items-center ml-12 w-full'>
                <div className='w-full text-lg'>
                    <p>{stageName}</p>
                </div>

                <div
                    className="w-24 h-24 bg-cover pl-24 flex my-4"
                    style={{
                        backgroundImage: medal ? `url(${Num_medal})` : 'none',
                    }}
                />

            </div>

            <div className='w-20' />

        </AccordionSummary>
    );
}

