import './Label.css'
import '../../main.css'
import { Container } from '../Container/Container'

export function Label( {children, ...props} ) {
    return (
        <Container className="ui-label" {...props} >
            {children}
        </Container>
    )
}