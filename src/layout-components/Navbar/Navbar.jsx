import { Container } from '../Container/Container';
import { NavItems } from './NavItems'
import { NavLink } from './NavLink';
import { Divider } from '../Divider/Divider';

import '../../main.css'


export function Navbar({ children, ...props }) {
    return (
        <Container direction="row" {...props}>
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