import { MenuIcon } from "lucide-react";
import { Divider } from "../layout-components/Divider/Divider";
import { Navbar } from "../layout-components/Navbar/Navbar";

export function TopNavbar() {
    return (
        <Navbar border="bottom">
            <MenuIcon />
        </Navbar>
    )
}