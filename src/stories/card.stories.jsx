import { Container } from '../layout-components/Container/Container'
import { ProductCard } from "../layout-components/Card/ProductCard";

export function ShowCardWithCenteredContainer() {
    return (
    <Container>
        <ProductCard 
        image="https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium" 
        discount="25" 
        title="Sniickers" 
        description="Cool pair of snickers" 
        price="449" />
    </Container>
    )
}

export function ClickableCard() {
    return (
        <ProductCard 
        onClick={() => alert("You clicked me!")}
        image="https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium" 
        discount="25" 
        title="Sniickers" 
        description="Cool pair of snickers" 
        price="449" />
    )
}

export function ShowCardWithoutContainer() {
    return (
        <ProductCard 
        image="https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium" 
        discount="25" 
        title="Sniickers" 
        description="Cool pair of snickers" 
        price="449" />
    )
}