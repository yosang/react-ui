import './Container.css'
import '../../main.css'

export function Container({ children, centered = true, border = "none", direction = "column", sticky, ...props }) {
    return (
        <div 
        className={`ui-container 
            ${sticky ? "sticky":""}
            ${centered ? "" : "non-centered"}
            ${direction == "row" ? "direction-row":""}
            ${border == "left" ? "border-left" 
                : border == "right" ? "border-right"
                : border == "bottom" ? "border-bottom" 
                : border == "top" ? "border-top" 
                : border == "none" ? "border-none"
                : "border-all"}`
        }
        {...props}>
            {children}
        </div >
    )
}