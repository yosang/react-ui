import { Container } from '../layout-components/Container/Container'
import { ProductCard } from '../layout-components/Card/ProductCard'
import { Navbar, NavItems, NavLink, NavLogo } from '../layout-components/Navbar/Navbar'
import { Button } from '../button/Button'
import { Modal } from '../layout-components/Modal/Modal'
import { useState } from 'react'
import { CartIcon } from '../icons/interface/Cart'
import { Drawer } from '../layout-components/Drawer/Drawer'

import { FacebookLogo, InstagramLogo } from '../icons/social/Social'
import { Footer } from '../layout-components/Footer/Footer'

export function ShowGrid() {
    const data = [
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2 700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/jq4441-1-footwear-photography-side-lateral-center-view-white-1e99ef5095.jpeg?preset=medium",
            title: "Adidas Adizero",
            description: "Evo Sl Woven M Ftwwht/magold/cblack",
            price: "1 749"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/s21070-141-1-0b3c7ef798.jpeg?preset=medium",
            title: "Saucony Endorphin",
            description: "Azura M Sage/laurel",
            price: "2 000"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        {
            image: "https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title: "VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        }
    ]

    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Container sticky={true}>
                <Navbar>
                    {/* <NavLogo height='60px' /> */}
                    <NavLogo href="https://www.google.com/" src='https://i.imgur.com/UlFsk3d.png' />
                    <NavItems>
                        <NavLink onClick={() => setDrawerOpen(true)} ><CartIcon /></NavLink>
                    </NavItems>
                </Navbar>
                <Modal isOpen={open} onClose={() => setOpen(false)} title="My Modal">
                    <p>This is modal content</p>
                    <br />
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal>
                <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="My Drawer">
                    <p>This is Drawer content</p>
                    <br />
                    <Button onClick={() => setDrawerOpen(false)}>Close</Button>
                </Drawer>
            </Container>
            <Container layout="grid">
                {data.map(p => (
                    <ProductCard discount="25" key={p.title} {...p} />
                ))}
            </Container>
            <Footer >
                <NavItems direction='vertical'>
                    <h3>Company Information</h3>
                    <NavLink asListItem={false}>About us</NavLink>
                    <NavLink asListItem={false}>Our stores</NavLink>
                    <NavLink asListItem={false}>Our social responsibility</NavLink>
                    <NavLink asListItem={false}>Working at VORTEX</NavLink>
                    <NavLink asListItem={false}>Contacts</NavLink>
                    <NavLink asListItem={false}>Privacy</NavLink>
                    <NavLink asListItem={false}>Size guides</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>Customer Service</h3>
                    <NavLink asListItem={false}>Contact us</NavLink>
                    <NavLink asListItem={false}>Shipping and delivery</NavLink>
                    <NavLink asListItem={false}>Returns and complaints</NavLink>
                    <NavLink asListItem={false}>Terms of sale</NavLink>
                    <NavLink asListItem={false}>Price match</NavLink>
                    <NavLink asListItem={false}>Cookies</NavLink>
                    <NavLink asListItem={false}>Frequently asked questions</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>About Us</h3>
                    <NavLink asListItem={false}>About VORTEX</NavLink>
                    <NavLink asListItem={false}>Customer Club</NavLink>
                    <NavLink asListItem={false}>Membership Terms</NavLink>
                    <NavLink asListItem={false}>Job Openings</NavLink>
                    <NavLink asListItem={false}>Sustainability</NavLink>
                </NavItems>
                <NavItems direction='vertical'>
                    <h3>Social Media</h3>
                    <NavItems>
                        <NavLink asListItem={false}>
                            <FacebookLogo />
                        </NavLink>
                        <NavLink asListItem={false}>
                            <InstagramLogo />
                        </NavLink>
                    </NavItems>
                </NavItems>
            </Footer>
            <Container >
                <p>All Rights Reserved, VORTEX - 2026</p>
            </Container>
        </>
    )
}