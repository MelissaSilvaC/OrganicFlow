interface Props {
    label: string,
    style: string,
    onClick: () => void
}

export default function ToggleSwitchTest({onClick, style, label}: Props){
    
    return(
        <div className="w-[300px] h-[45px] rounded-full flex items-center justify-between bg-lime-700 border-2 border-neutral-50 font-semibold relative">
            <span className={style} onClick={onClick} style={{transition: `1s`}}>{label}</span>
            {/**
             * Ideia:
             * <Campo do toggle button>
             *  {se checked ? <Versão cadastro> : <Versão parceria>}
             * </Campo do toggle button>
             */}
        </div>
    )
}

