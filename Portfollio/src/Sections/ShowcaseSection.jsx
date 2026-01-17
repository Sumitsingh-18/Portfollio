import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../Components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

   
    useGSAP(() => {
    
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, 
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }
        )
    })

        gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    )
    }, []);

    return (
       
        <section id="work" ref={sectionRef} className="app-showcase">
            
            <div className="w-full">

                 <div className="mb-10">
                 <TitleHeader
                title="Project Showcase"
                sub="💼 My Development Work" />
                </div>
                
                <div className="showcaselayout">
                    {/* LEFT */}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper bg-gradient-to-r from-black-300 via-stone-700 to-stone-500">
                            <img src="/images/Zero.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>Zerodha-online trading platform. &nbsp;&nbsp;<a href="https://zerodha-mr8t.onrender.com/" class="text-blue-400 text-lg hover:underline">( Live Link )</a></h2>

                            <p className="text-white-50 md:text-xl">
                                A zerodha replica built with React, java script, & Tailwind css for a fast, user-friendly experience.
                            </p>
                            <hr/>
                            <p>You can find more datails about projects in my resume.</p>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-gradient-to-r from-stone-500 via-stone-700 to-black-300">
                            <img src="/images/Airs.png" alt="Library Management Platform" />
                        </div>
                        <h2>Airbnb - Rental Platform. &nbsp;&nbsp;<a href="https://airbnb-clone-m745.onrender.com/" class="text-blue-400 text-lg hover:underline">( Live Link )</a></h2>
                    </div>   

                     <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-gradient-to-r from-stone-500 via-stone-700 to-black-300">
                            <img src="/images/Ecom1.png" alt="YC Directory" />
                        </div>
                        <h2>Wrogn 8 - E-commerce platform </h2>
                    </div>  

                   </div>


                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;