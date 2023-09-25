 interface Props {
    type?: any
    label?: string
    placeholder?: string
    valor?: any
    onChange: (evento: any) => void
    obrigatorio: boolean
    labelCSS?: string
    campoCSS?: string
    inputCSS?: string
}

export default function TextField({ obrigatorio = false, label, placeholder, onChange,  valor, type, labelCSS, campoCSS, inputCSS} : Props) {
    return (
        <div>
            <label className={`${labelCSS}`}>{label}</label>
            <div className={`${campoCSS}`}>
                <input 
                    className={`${inputCSS}`} 
                    type={type}
                    value={valor}
                    onChange={onChange}
                    required={obrigatorio}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}