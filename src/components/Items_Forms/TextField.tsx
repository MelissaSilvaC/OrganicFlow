 interface Props {
    type?: any
    label?: string
    placeholder?: string
    value?: any
    onChange: (evento: any) => void
    obrigatorio: boolean
    labelCSS?: string
    campoCSS?: string
    inputCSS?: string
}

export default function TextField({ obrigatorio = false, label, placeholder, onChange,  value, type, labelCSS, campoCSS, inputCSS} : Props) {
    return (
        <div>
            <label className={`${labelCSS}`}>{label}</label>
            <div className={`${campoCSS}`}>
                <input 
                    className={`${inputCSS}`} 
                    type={type}
                    value={value}
                    onChange={() => {}}
                    required={obrigatorio}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}