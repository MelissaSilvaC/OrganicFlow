 interface Props {
    type?: any
    label: string
    placeholder?: string
    value?: any
    onChange: () => void
    required: boolean
    labelCSS: string
    campoCSS: string
    inputCSS: string

 }

function Campo({ type, label, placeholder, value, onChange, required, labelCSS, campoCSS, inputCSS} : Props) {
    return (
        <div>
            <label className={`${labelCSS}`}>{label}</label>
            <div className={`${campoCSS}`}>
                <input 
                    className={`${inputCSS}`} 
                    type={type}
                    value={value}
                    onChange={/**evento => aoAlterado(evento.target.value) */ () => {}}
                    required={required}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Campo;