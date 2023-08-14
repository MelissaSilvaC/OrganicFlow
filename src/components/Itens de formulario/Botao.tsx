interface Props {
    botaoCSS?: string
    texto: string
}

export default function Botao({ botaoCSS, texto }: Props) {
    return (
        <div>
            <button className={`${botaoCSS}`}>
                {texto}
            </button>
        </div>
    )
}
