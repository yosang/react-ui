import './ProductCard.css'
import '../../main'
import { Container } from '../Container/Container'

export function ProductCard( {children, image, title, description, price,...props }) {
    return (
        <div className='ui-product-card' style={{ width: "200px" }}>
            <Container 
                centered={false} {...props}>
                
                {image ? (<img className='ui-product-card-image ' src={image} />) : (<div className='ui-product-card-image' />)}

                {title && <h4 className='ui-product-card-title' >{title}</h4>}
                
                {description && <p className='ui-product-card-description'>{description}</p>}
                {price && <h3 className='ui-product-card-price'>{price},-</h3>}

            </Container>
        </div>
    )
}