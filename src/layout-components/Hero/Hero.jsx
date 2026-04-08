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
                playsInline // works on mobile Safari
                className='ui-hero-media'

                // Accessiblity
                aria-label={props.ariaLabel || "Background Video"}
                preload='none'
            />
        )
    } else if (type === "image" && src) {
        mediaElement = ( <img src={src} loading='lazy' alt={props.alt || "Hero image"} className='ui-hero-media' /> )
    } else {
        mediaElement = (<div className="ui-hero-media ui-hero-fallback" />)
    }

    return (
        <div className='ui-hero' style={style} {...props}>

            {mediaElement}

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