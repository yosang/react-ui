import './button.css'
import '../main.css'

export function Button({ children, tone = "primary", onClick, ...props }) {
    return (
        <button className={`ui-button ${tone}`} onClick={onClick} {...props} >
            {children}
        </button>
    );
}