import './Button.css'
import '../main.css'

import { Ripple } from 'm3-ripple';
import 'm3-ripple/ripple.css'

export function Button({ children, variant = "primary", onClick, icon, hasText, rippleEffect = true, ...props }) {
    return (
        <button className={`ui-button ${variant} ${props.disabled ? 'disabled':''}`} onClick={onClick} {...props} style={ { position: "relative" } } disabled={props.disabled}>
            {rippleEffect && <Ripple hoverOpacity={0}/>}
            {icon && hasText && <span className='ui-button-icon-text'>{icon}</span>}
            {icon && !hasText && <span className='ui-button-icon'>{icon}</span>}
            {children}
        </button>
    );
}