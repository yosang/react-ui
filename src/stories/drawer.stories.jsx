import { useState } from 'react';
import { Drawer } from '../layout-components/Drawer/Drawer';
import { Container } from '../layout-components/Container/Container';
import { Button } from '../button/Button'

export function DrawerRight() {
    const [open, setOpen] = useState(false);

    return (
        <Container centered={true} border="none">
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>

            <Drawer isOpen={open} onClose={() => setOpen(false)} title="My Drawer">
                <p>This is Drawer content</p>
                <br />
                <Button onClick={() => setOpen(false)}>Close</Button>
            </Drawer>
        </Container>
    );
}

export function DrawerLeft() {
    const [open, setOpen] = useState(false);

    return (
        <Container centered={true} border="none">
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>

            <Drawer isOpen={open} onClose={() => setOpen(false)} title="My Drawer" side='left'>
                <p>This is Drawer content</p>
                <br />
                <Button onClick={() => setOpen(false)}>Close</Button>
            </Drawer>
        </Container>
    );
}