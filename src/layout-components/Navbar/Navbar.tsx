import { ElementType, ReactNode } from "react";
import { Container } from '../Container/Container';
import './Navbar.css'
import '../../main.css'

export function Navbar({ children, sticky = false, ...props }: NavbarProps) {
    return (
        <nav>
        <Container direction="row"  sticky={sticky}{...props}>
            {children}
        </Container>
        </nav>
    )
}

export function NavItems({ children, direction = "", ...props }: NavItemsProps) {
    return (
        <ul className={`ui-navitems ${direction == "vertical" ? "vertical" : ""}`} {...props} >
            {children}
        </ul>
    )
}

export function NavLink({ children, tag: Tag = "a", animated = {}, ...props }: NavLinkProps) {
    const isAnimated = animated?.left || animated?.right || animated?.center;

    const animationClass = 
    animated.left ? "animated-left":
    animated.right ? "animated-right":
    animated.center ? "animated-center":""


    return <Tag className={`ui-navlink ${isAnimated ? "animated":""} ${animationClass}`} {...props}>{children}</Tag>
}

export function NavLogo({ tag: Tag = "a", src = "https://i.imgur.com/zXkrJtJ.png", height = "110px" , ...props }: NavLogoProps) {
    return <Tag className="ui-navlink" {...props}><img style={{ width: "auto", height: height, objectFit: "contain" }} src={src} /></Tag>
}

// Types

export interface NavLogoProps {
    tag?: ElementType
    src: string;
    height: string;

    /** Any other props passed to the navbar */
    [key: string]: any;
}
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

    asListItem?: boolean;

    /** Any other props passed to the navbar */
    [key: string]: any;
}