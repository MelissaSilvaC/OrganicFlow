 interface Props {
    type?: any
    label: string
    placeholder?: string
    value?: any
    onChange: () => void
    required: boolean
    labelCSS?: string
    campoCSS?: string
    inputCSS?: string

    target: EventTarget & HTMLInputElement

 }

export default function Campo({ required = false, label, placeholder, onChange, value, type, labelCSS, campoCSS, inputCSS} : Props) {
    return (
        <div>
            <label className={`${labelCSS}`}>{label}</label>
            <div className={`${campoCSS}`}>
                <input 
                    className={`${inputCSS}`} 
                    type={type}
                    value={value}
                    onChange={evento => onChange()}
                    required={required}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}


/**
 * Do que o campo login vai precisar?
 * 
 * Obrigatoriedade (Boolean)
 * Label (String)
 * Placeholder (String)
 * onChange (useState na página de sessão   setvalue)
 * value (useState na página de sessão  value)
 * type (String, o tipo do campo, e-mail, password...)
 * 
 * Parametros de estilo
 * labelTCSS
 * campoTCSS
 * inputTCSS
 * 
 * 
 */