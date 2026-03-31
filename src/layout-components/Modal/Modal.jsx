import './Modal.css';
import '../../main.css'

import { Container } from '../Container/Container';
import { Divider } from '../Divider/Divider';

export function Modal({ isOpen, onClose, title, children }) {

    return (
        <div className={`ui-overlay center ${isOpen ? "open":""}`} onClick={onClose}>
            <Container
                className="ui-modal"
                centered={true}
                border="all"
                onClick={e => e.stopPropagation()} // prevents a click from propagnating upwards and accidentally closing the overlay
            >
                {title && <h2>{title}</h2>}
                <Divider />
                <button className="ui-modal-close" onClick={onClose}>×</button>
                {children}
            </Container>
        </div>
    );
}