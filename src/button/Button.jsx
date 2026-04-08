import './Button.css'
import '../main.css'

import { Spinner } from '../layout-components/Spinner/Spinner';

export function Button({
    children,
    variant = "primary",
    onClick,
    icon,
    spinner,
    ...props }) {

    const spinnerEnabled = spinner?.state
    const loadingText = spinner?.text
    const hasText = !!children;
    const isDisabled = props.disabled || spinnerEnabled

    if(icon && !hasText && !props["aria-label"]) console.warn("Icon only buttons must have an aria-label for accessibility")

    return (
        <button
            className={`ui-button ${variant} ${isDisabled ? 'disabled' : ''}`}
            onClick={onClick}
            style={{ position: "relative" }}
            disabled={isDisabled}
            
            // Accessibility rules
            aria-busy={spinnerEnabled}
            aria-disabled={isDisabled}

            {...props}
        >

            {icon && hasText && <span aria-hidden="true" className='ui-button-icon-text'>{icon}</span>}
            {icon && !hasText && <span aria-hidden="true" className='ui-button-icon'>{icon}</span>}

            {spinnerEnabled && <Spinner size={20} aria-hidden="true" />}

            <span aria-live="polite" aria-atomic="true" style={{ marginLeft: spinnerEnabled ? 8 : 0 }}>
                {spinnerEnabled ? (loadingText || "Loading...") : children}
            </span>

        </button>
    );
}