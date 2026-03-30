import './Spinner.css'
import '../../main.css'

export function Spinner({ size = 32, ...props }) {
    return (
        <span
            style={{ width: size, height: size }}
            className="ui-spinner" {...props} />

    )
}