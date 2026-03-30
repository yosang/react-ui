import { Container } from '../Container/Container';
import { NavItems } from './NavItems'
import { NavLink } from './NavLink';
import { Divider } from '../Divider/Divider';

import '../../main.css'


export function Navbar({ children, sticky = true, ...props }) {
    return (
        <Container direction="row" style={sticky ? { position: "sticky", top: 0, zIndex: 1000 } : {}} {...props}>
            <div>
                Logo
            </div>
            <NavItems>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
                {children && (
                    <Divider />
                )}
                {children}
            </NavItems>
        </Container>
    )
}