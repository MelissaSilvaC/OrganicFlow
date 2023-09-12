interface Props {
    botaoCSS?: string
    texto: string
}

export default function Button({ botaoCSS, texto }: Props) {
    return (
        <div>
            <button className={`${botaoCSS}`}>
                {texto}
            </button>
        </div>
    )
}
