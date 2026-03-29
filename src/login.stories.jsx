import { Button } from "./button/Button";
import { Input } from "./Forms/Input";
import { LoginContainer } from "./layout-components/LoginContainer";

export function AuthExample() {
    return (
    <LoginContainer centered={true}>
        <p>Username</p>
        <Input style={{ maxWidth: "200px"}}/>
        <p>Password</p>
        <Input style={{ maxWidth: "200px"}}/>
        <Button>Login</Button>
    </LoginContainer>
    )
}