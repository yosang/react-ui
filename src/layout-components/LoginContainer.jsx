import './LoginContainer.css'
import '../main.css'

export function LoginContainer( { children, centered = true, ...props} ) {
    return (
            <div className={`ui-logincontainer ${centered ? "":"non-centered"}`}>
                {children}
            </div>
    )
}