interface Props {
    botaoCSS?: string
    texto: string
    onClick?: (evento: any) => void
    id?:any
}

export default function Button({ botaoCSS, texto, onClick }: Props) {
    return (
        <div>
            <button className={`${botaoCSS}`} onClick={onClick}>
                {texto}
            </button>
        </div>
    )
}
