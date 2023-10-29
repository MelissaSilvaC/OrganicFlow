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
    const cardBackground = report ? 'bg-verde_escuro' : 'bg-zinc-600';

    return (
        <AccordionSummary sx={{
            [`@media (min-width: 640px)`]: {
                background: report ? '#80ab6b' : '#BDBDBD',
                height: '120px',
                width: '70rem',
                display: 'flex',
            }, 
            [`@media (max-width: 640px)`]: { 
                background: report ? '#80ab6b' : '#BDBDBD',
                height: '80px', 
                width: '25rem', 
                display: 'flex' 
            }
        }}>
            <div className={`${cardBackground} h-full w-[20rem] max-sm:w-[8rem] py-[28px] max-sm:py-[17px] mt-1 max-sm:mt-0 text-2xl max-sm:text-base font-medium max-sm:font-normal text-white flex flex-col justify-center items-center`}>
                <p>{month}</p>
                <p>{day}</p>
            </div>
            <div className='flex items-center ml-12 max-sm:ml-3 w-full'>
                <div className='w-full text-lg max-sm:text-base'>
                    <p>{stageName}</p>
                </div>
                <div
                    className={`w-24 h-24 pl-24 max-sm:w-16 max-sm:h-16 max-sm:pl-16 bg-cover flex my-4 max-sm:my-0 transition-opacity ${medal ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${Num_medal})` }}
                />
            </div>
            <div className='w-20 max-sm:w-2' />
        </AccordionSummary >
    );
}

