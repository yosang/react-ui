import './NavItems.css'
import '../../main.css'

export function NavItems({ children, direction = "", ...props }) {
    return (
        <ul className={`ui-navitems ${direction == "vertical" ? "vertical" : ""}`}>
            {children}
        </ul>
    )
}