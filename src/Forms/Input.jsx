import './Input.css'
import '../main.css'
import {InfoIcon} from '../icons/forms/InfoIcon'

import { forwardRef, memo, useState } from 'react'

const InputComponent = forwardRef(({ 
    id,
    variant = "primary", 
    type ="text", 
    placeholder, 
    labelText,
    labelPosition = "top",
    error,

    ...props}

    , ref) => {
    
    const [randomId, setRandomId] = useState(crypto.randomUUID().toString())
    
    const inputId = id || randomId

    const isRequired = props.required
    const isDisabled = props.disabled

    return (
            <div className={`ui-input-wrapper ${
                labelPosition === "left" ? "label-left":
                labelPosition === "right" ? "label-right":""
                 }
            `}>

            {labelText && <label htmlFor={inputId}> {labelText} {error && <span title={error} className='error-message' ><InfoIcon /></span>} </label>}
            
            <input 
            id={inputId}
            ref={ref}
            className={`ui-input ${variant} ${error ? "input-error":""}`} 
            placeholder={placeholder} 
            title={error}
            type={type } 

            // Accessibility
            aria-required={isRequired}
            aria-disabled={isDisabled}
            aria-invalid={error}

            {...props} 
            />

            </div>
        )
})

export const Input = memo(InputComponent)
