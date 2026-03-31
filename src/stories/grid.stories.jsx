import { Container } from '../layout-components/Container/Container'
import { ProductCard } from '../layout-components/Card/ProductCard'

export function ShowGrid() {
    const data = [
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2 700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/jq4441-1-footwear-photography-side-lateral-center-view-white-1e99ef5095.jpeg?preset=medium",
            title:"Adidas Adizero",
            description: "Evo Sl Woven M Ftwwht/magold/cblack",
            price: "1 749"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/s21070-141-1-0b3c7ef798.jpeg?preset=medium",
            title:"Saucony Endorphin",
            description: "Azura M Sage/laurel",
            price: "2 000"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        },
        { 
            image:"https://www.fjellsport.no/assets/blobs/vj-ultra3-lime-1-8d0494608e.jpeg?preset=medium",
            title:"VJ Sport",
            description: "Ultra 3.1 Lime",
            price: "2700"
        }
    ]

    return (
        <Container layout="grid">
        {data.map(p => (
            <ProductCard key={p.title} {...p} />
        ))}
        </Container>
    )
}