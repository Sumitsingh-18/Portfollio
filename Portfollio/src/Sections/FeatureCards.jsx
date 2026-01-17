import React from 'react'
import { abilities } from "../constants/index.js";

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const FeatureCards = () => {

        // useGSAP(() => {
        //     gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
        //         y: 0,
        //         opacity: 1,
        //         duration: 1,
        //         ease: 'power2.inOut',
        //         stagger: 0.4,
        //         scrollTrigger: {
        //             trigger: '#feature',
        //             start: 'top center'
        //         }
        //     }) 
        // })
    

    return (
        <div className='w-full padding-x-lg'>
            <div className='mx-auto grid-3-cols'>
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                        <div className='size-14 flex items-center justify-center rounded-full'>
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>   
                ))}
            </div>
        </div>
    )
}

export default FeatureCards;