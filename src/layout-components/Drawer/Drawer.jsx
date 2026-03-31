import './Drawer.css'
import '../../main.css'
import { Divider } from '../Divider/Divider'

export function Drawer( { children, isOpen, title, onClose, side ="right", width = "400px" , ...props } ) {
    return (
        <div
            className={`ui-overlay ${isOpen ? "open":""} ${side}`}
            onClick={onClose}
        >
            <div
                className={`ui-drawer ${side}`}
                style={{width}}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <h2>{title}</h2>}
                <Divider />
                <button className="ui-drawer-close" onClick={onClose}>×</button>
                {children}
            </div>            
        </div>
    )
}