import './Modal.css';
import '../../main.css'

import { Container } from '../Container/Container';
import { Divider } from '../Divider/Divider';

export function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null; // 

    return (
        <div className="ui-modal-backdrop" onClick={onClose}>
            <Container
                className="ui-modal"
                centered={true}
                border="all"
                onClick={e => e.stopPropagation()} // prevents closing when clicking inside
            >
                {title && <h2>{title}</h2>}
                <Divider />
                <button className="ui-modal-close" onClick={onClose}>×</button>
                {children}
            </Container>
        </div>
    );
}