import './NavLink.css'
import '../../main.css'
import { Ripple } from 'm3-ripple'
import 'm3-ripple/ripple.css'

export function NavLink({ children, href = "#", ...props }) {
    return (
        <li>
            <a className='ui-navlink' {...props} href={href} style={{ position: 'relative' }} >
                <Ripple />
                {children}
            </a>
        </li>
    )
}