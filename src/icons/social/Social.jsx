import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

export function FacebookLogo(props) {
    return (
        <img style={{ height: "40px", width: "40px" }} src={facebook} {...props}/>
    )
}

export function InstagramLogo() {
    return (
        <img style={{ height: "40px", width: "40px" }} src={instagram} {...props}/>
    )
}