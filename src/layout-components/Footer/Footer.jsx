import './Footer.css'
import '../../main.css'

export function Footer({ children, ...props }) {
    return (
        <div
            className='ui-footer'
            style={{ display: "flex", justifyContent: "space-between", margin: "3rem 0" }}
            {...props}
        >
            {children}
        </div>
    )
}