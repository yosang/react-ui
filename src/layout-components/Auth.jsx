import { Input } from "../Forms/Input.jsx";
import { Button } from "../button/Button.jsx"
import { LoginContainer } from "./LoginContainer.jsx";

export function Auth( { children, variant = "primary", authType = "login", centered = true, ...props} ) {
    return (
        <LoginContainer centered={centered}>
            <p>Username</p>
            <Input style={{ maxWidth: "200px"}}/>
            <p>Password</p>
            <Input style={{ maxWidth: "200px"}}/>
            <Button>{authType == "register" ? "Register":"Login"}</Button>
        </LoginContainer>
    )
}

// Not finished, lacks a lot of functionanilty
// state... etc