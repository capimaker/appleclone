import React, { useEffect } from 'react'

const Hero = () => {
    const videoref = React.useRef(null);

    useEffect(() => {
       if (videoref.current) videoref.current.playbackrate = 2;
       
    }, []);
  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="Macbook claim" />
        </div>

        <video ref={videoref} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>Buy</button>
        <p>From 1899 €</p>

    </section>
  )
}

export default Hero