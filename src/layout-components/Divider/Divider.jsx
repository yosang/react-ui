import './Divider.css';
import '../../main.css'

export function Divider({ direction = "horizontal", ...props }) {
    return <hr className={direction === "vertical" ? "ui-divider-vertical" : "ui-divider-horizontal"} {...props} />
}