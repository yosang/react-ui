import './button.css'
import '../main.css'

export function Button({ children, variant = "primary", onClick, icon, hasText, ...props }) {
    return (
        <button className={`ui-button ${variant}`} onClick={onClick} {...props} >
            {icon && hasText && <span className='ui-button-icon-text'>{icon}</span>}
            {icon && !hasText && <span className='ui-button-icont'>{icon}</span>}
            {children}
        </button>
    );
}