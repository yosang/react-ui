import { ElementType, ReactNode } from "react";
import { Container } from '../Container/Container';
import './Navbar.css'
import '../../main.css'

export function Navbar({ children, sticky = false, ...props }: NavbarProps) {
    return (
        <Container direction="row" style={sticky ? { position: "sticky", top: 0, zIndex: 1000 } : {}} {...props}>
            {children}
        </Container>
    )
}

export function NavItems({ children, direction = "", ...props }: NavItemsProps) {
    return (
        <ul className={`ui-navitems ${direction == "vertical" ? "vertical" : ""}`} {...props} >
            {children}
        </ul>
    )
}

export function NavLink({ children, tag: Tag = "a", ...props }: NavLinkProps) {
    return (
        <li>
            <Tag className="ui-navlink" {...props} >
                {children}
            </Tag>
        </li>
    )
}


// Types

export interface NavbarProps {
    /** Content inside the link */
    children: ReactNode;

    /** Enables/disables sticky navbar */
    sticky: boolean;

    /** Any other props passed to the navbar */
    [key: string]: any;
}

export interface NavItemsProps {
    /** Content inside the link */
    children: ReactNode;

    /** Directional placement of the navbar items */
    direction: "vertical" | "";

    /** Any other props passed to the navbar */
    [key: string]: any;
}

export interface NavLinkProps {
    /** Content inside the link */
    children: ReactNode;

    /** Tag or component to render, defaults to an anchor tag */
    tag?: ElementType

    /** Any other props passed to the navbar */
    [key: string]: any;
}