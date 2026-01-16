import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import {features, featureSequence} from "../constants/index.js";
import clsx from "clsx";
import {Suspense, useEffect, useRef, useState} from "react";
import {Html} from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import {useMediaQuery} from "react-responsive";
import useMacbookStore from "../store/index.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const useOnceInView = (rootMargin = '200px') => {
    const ref = useRef(null);
    const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;
    const [inView, setInView] = useState(!supportsObserver);

    useEffect(() => {
        if (!supportsObserver) return;
        if (inView) return;
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { rootMargin });

        observer.observe(node);

        return () => observer.disconnect();
    }, [inView, rootMargin, supportsObserver]);

    return { ref, inView };
};

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})
    const { setTexture } = useMacbookStore();

    
    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });

            v.load();
        })
    }, []);

    useGSAP(() => {
        
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom  top',
                scrub: 1,
                pin: true,
            }
        });

        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom  top',
                scrub: 1,
            }
        })

       
        if(groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut'})
        }

        
        timeline
            .call(() => setTexture('/videos/feature-1_1.mp4'))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })

            .call(() => setTexture('/videos/feature-2_1.mp4'))
            .to('.box2', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-3_1.mp4'))
            .to('.box3', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-4_1.mp4'))
            .to('.box4', { opacity: 1, y: 0})

            .call(() => setTexture('/videos/feature-5_1.mp4'))
            .to('.box5', { opacity: 1, y: 0 })
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    const { ref: sectionRef, inView } = useOnceInView();

    return (
        <section id="features" ref={sectionRef}>
            <h2>See it all in a new light.</h2>

            {inView ? (
                <Canvas id="f-canvas" camera={{}}>
                    <StudioLights />
                    <ambientLight intensity={0.5} />
                    <ModelScroll />
                </Canvas>
            ) : (
                <div className="w-full h-dvh" aria-hidden />
            )}

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
