interface Props {
    label?: string
    valor?: any
    onChange: (evento: any) => void
    obrigatorio: boolean
    labelCSS?: string
    campoCSS?: string
    inputCSS?: string
}

export default function TextArea({ obrigatorio = false, label, onChange, valor, labelCSS, campoCSS, inputCSS }: Props) {
    return (
        <div>
            <label className={`${labelCSS}`}>{label}</label>
            <div className={`${campoCSS}`}>
                <textarea
                    className={`${inputCSS}`}
                    rows={4}
                    cols={50}
                    value={valor}
                    onChange={onChange}
                    required={obrigatorio}
                />
            </div>
        </div>
    )
}
