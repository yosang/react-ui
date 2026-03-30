import { Button } from "../button/Button";
import { Input } from "../Forms/Input";
import { Container } from "../layout-components/Container/Container";

export function AuthExample() {
    return (
        <Container centered={true}>
            <p>Username</p>
            <Input style={{ maxWidth: "200px" }} />
            <p>Password</p>
            <Input style={{ maxWidth: "200px" }} />
            <Button>Login</Button>
        </Container>
    )
}