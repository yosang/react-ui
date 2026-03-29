import './main.css'

export function UIButton( { children, variant = "primary", onClick, ...props } ) {
    return (
        <button className={`ui-button ${variant}`} onClick={onClick} {...props} >
        {children}
        </button>
    );
}