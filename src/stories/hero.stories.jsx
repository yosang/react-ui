import { Hero } from "../layout-components/Hero/Hero"
import { Button } from '../button/Button'

export function ShowHeroVideo() {
    return (
        <Hero type="video" src="https://i.imgur.com/5PUkZRJ.mp4" alpha={0.2}>
            <p>HIGH QUALITY SPORTS WEAR</p>
            <h1>Its time...</h1>
            <h4>To push the limits!</h4>
            <Button>Explore...</Button>
        </Hero>
    )
}

export function ShowHeroImage() {
    return (
        <Hero type="image" src="https://i.imgur.com/GaRFfu9.jpeg" alpha={0.4}>
            <p>HIGH QUALITY SPORTS WEAR</p>
            <h1>Its time...</h1>
            <h4>To push the limits!</h4>
            <Button>Explore...</Button>
        </Hero>
    )
}

export function ShowFallback() {
    return (
        <Hero>
            <p>HIGH QUALITY SPORTS WEAR</p>
            <h1>Its time...</h1>
            <h4>To push the limits!</h4>
            <Button>Explore...</Button>
        </Hero>
    )
}