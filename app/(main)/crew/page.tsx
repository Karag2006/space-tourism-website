"use client"

import { useEffect, useState } from "react";

import data from "@/public/assets/data/data.json";

import { TextSection } from "@/components/text-section";
import { ImageSection } from "@/components/image-section";

import "./page.scss"
import { PageTitle } from "@/components/page-title/page-title";
import { DotIndicators } from "@/components/dot-indicators/dot-indicators";

const Crew = () => {
    const [activeLink, setActiveLink] = useState(0);
    

    
    return (
        <main id="main" className="grid-container grid-container--crew flow">
            
            <PageTitle number="02" text="Meet your Crew" />
            
            
            <ImageSection
                type='crew'
                images={data.crew[activeLink].images}
                alt={data.crew[activeLink].name}
            />
            
            
            <DotIndicators pages={data.crew} activeTab={activeLink} setTab={setActiveLink}/>
            
            <article className="crew-info-container flex">
                <TextSection
                    element={data.crew[activeLink]}
                    type='crew'
                />
            </article>
        </main>
    );
};

export default Crew