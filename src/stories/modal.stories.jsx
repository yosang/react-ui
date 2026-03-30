import { useState } from 'react';
import { Modal } from '../layout-components/Modal/Modal';
import { Container } from '../layout-components/Container/Container';
import { Button } from '../button/Button'

export function ShowModal() {
    const [open, setOpen] = useState(false);

    return (
        <Container centered={true} border="none">
            <Button onClick={() => setOpen(true)}>Open Modal</Button>

            <Modal isOpen={open} onClose={() => setOpen(false)} title="My Modal">
                <p>This is modal content</p>
                <br />
                <Button onClick={() => setOpen(false)}>Close</Button>
            </Modal>
        </Container>
    );
}