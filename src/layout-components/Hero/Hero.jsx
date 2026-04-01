import { Container } from '../Container/Container'
import './Hero.css'
import '../../main.css'

export function Hero({ children,
    type = "none",
    src = "",
    style = { width: "100%", minHeight: "60vh" },
    alpha = 0.3,
    ...props }) {

    let mediaElement;

    if (type === "video" && src) {
        mediaElement = (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline // ensures autoplay works on mobile Safari
                className='ui-hero-media'
            />
        )
    } else if (type === "image" && src) {
        mediaElement = (
            <img src={src} className='ui-hero-media' />
        )
    } else {
        mediaElement = (<div className="ui-hero-media ui-hero-fallback" />)
    }

    return (
        <div className='ui-hero' style={style}>

            {mediaElement}
            {/* {type === "image" && src ? (
                <video src={src} className='ui-hero-media' />
            ) : fallbackMedia} */}


            {/* overlay */}
            <div className='ui-hero-overlay' style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}>

                {/* content */}
                <div className='ui-hero-content' >
                    {children}
                </div>
            </div>
        </div>
    )
}