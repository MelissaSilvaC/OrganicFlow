import AccordionSummary from '@mui/material/AccordionSummary';

interface Props {
    month?: string
    day?: string
    stageName?: string
    report: boolean | undefined
    Num_medal: string
    medal: boolean | undefined
    handleMedal: () => void
    handleReport: () => void
}

export default function StageCard({ month, day, stageName, report, medal, Num_medal, handleMedal, handleReport }: Props) {
    const accordionStyles = {
        background: report ? '#80ab6b' : '#BDBDBD',
        height: '120px',
        width: '70rem',
        display: 'flex',
        padding: '0px',
        margin: '0px',
    };

    const cardBackground = report ? 'bg-verde_escuro' : 'bg-zinc-600';

    return (
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={accordionStyles}
        >
            <div className={`${cardBackground} h-full w-[20rem] py-[28px] mt-1 text-2xl font-medium text-white flex flex-col justify-center items-center`}>
                <p>{month}</p>
                <p>{day}</p>
            </div>
            <div className='flex items-center ml-12 w-full'>
                <div className='w-full text-lg'>
                    <p>{stageName}</p>
                </div>
                <div
                    className={`w-24 h-24 bg-cover pl-24 flex my-4 transition-opacity ${medal ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `url(${Num_medal})`,
                    }}
                />
            </div>
            <div className='w-20' />
        </AccordionSummary>
    );
}

