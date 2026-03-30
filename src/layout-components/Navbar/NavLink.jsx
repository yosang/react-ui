import './NavLink.css'
import '../../main.css'

export function NavLink({ children, href = "#", ...props }) {
    return (
        <li>
            <a className='ui-navlink' {...props} href={href} >
                {children}
            </a>
        </li>
    )
}