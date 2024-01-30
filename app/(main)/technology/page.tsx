"use client"

import { useState } from "react";

import data from "@/public/assets/data/data.json";

import "./page.scss"
import { PageTitle } from "@/components/page-title/page-title";
import { NumberedIndicators } from "@/components/numbered-indicators/numbered-indicators";

const Technology = () => {
    const [activeLink, setActiveLink] = useState(0);

    let currentTab = {...data.technology[activeLink]}

    return (
        <main id="main" className="grid-container grid-container--technology flow">
            
            <PageTitle number="03" text="Space Launch 101" />
            
            <div className="image-area flex">
                <picture>
                    <source 
                        srcSet={currentTab.images.portrait}
                        media="(min-width: 58rem)"
                    />
                    <img src={currentTab.images.landscape} alt={currentTab.name} />
                </picture>
            </div>
            
            <article className="technology-info-container flex">
                <NumberedIndicators pages={data.technology} activeTab={activeLink} setTab={setActiveLink} />
                <div className='technology-text flow' role="tabpanel">
                    <p className='uppercase ff-sans-cond fs-300 text-accent letter-spacing-3'>the Terminology...</p>
                    <h2 className="uppercase ff-serif fs-700">{currentTab.name}</h2>
                    <p className="text-accent">{currentTab.description}</p>
                </div>
            </article>
        </main>
    );
};

export default Technology