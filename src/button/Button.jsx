import './Button.css'
import '../main.css'

import { Ripple } from 'm3-ripple';
import 'm3-ripple/ripple.css'
import { Spinner } from '../layout-components/Spinner/Spinner';

export function Button({
    children,
    variant = "primary",
    onClick,
    icon,
    hasText,
    rippleEffect = true,
    spinner = false,
    loadingState = false,
    loadingText,
    ...props }) {

    const spinnerEnabled = spinner && loadingState;

    return (
        <button
            className={`ui-button ${variant} 
            ${props.disabled || spinnerEnabled ? 'disabled' : ''}`}
            onClick={onClick} {...props}
            style={{ position: "relative" }}
            disabled={props.disabled || spinnerEnabled}>
            {rippleEffect && <Ripple hoverOpacity={0}
            />}

            {icon && hasText && <span className='ui-button-icon-text'>{icon}</span>}
            {icon && !hasText && <span className='ui-button-icon'>{icon}</span>}

            {spinnerEnabled && <Spinner size={20} />}
            <span style={{ marginLeft: spinnerEnabled ? 8 : 0 }}>
                {spinnerEnabled ? loadingText : children}
            </span>
        </button>
    );
}