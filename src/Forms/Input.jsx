import './Input.css'
import '../main.css'

export function Input({ variant = "primary", type ="text", placeholder, ...props}) {
    return (
        <input className={`ui-input ${variant}`} placeholder={placeholder} type={type } {...props} />
    )
}

// Todos: 
// Add disabled functionality
// Add icon inside the input functionality