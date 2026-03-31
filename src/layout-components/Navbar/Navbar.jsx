import { Container } from '../Container/Container';
import './Navbar.css'
import '../../main.css'


export function Navbar({ children, sticky = false, ...props }) {
    return (
        <Container direction="row" style={sticky ? { position: "sticky", top: 0, zIndex: 1000 } : {}} {...props}>
            {children}
        </Container>
    )
}

export function NavItems({ children, direction = "", ...props }) {
    return (
        <ul className={`ui-navitems ${direction == "vertical" ? "vertical" : ""}`} {...props} >
            {children}
        </ul>
    )
}

export function NavLink({ children, href = "#", ...props }) {
    return (
        <li>
            <a className='ui-navlink' {...props} href={href} >
                {children}
            </a>
        </li>
    )
}