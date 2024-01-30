"use client"

import { useEffect, useState } from "react";

import data from "@/public/assets/data/data.json";

import { TextSection } from "@/components/text-section";
import { Distance } from "./_components/distance";
import { ImageSection } from "@/components/image-section";
import { PageTitle } from "@/components/page-title/page-title";

import "./page.scss"

const Destination = () => {
    const [activeLink, setActiveLink] = useState(0);

    useEffect(() => {
        if(!document) return;
        
        let tabFocus = activeLink;
        // Keyboard Controls need direct access to the rendered elements
        const tabList = document.querySelector('[role="tablist"]');
        const tabs = tabList?.querySelectorAll<HTMLElement>('[role="tab"]');

        const handleKeyDown = (e: KeyboardEvent) => {
            if(!tabs || e.code !== "ArrowRight" && e.code !== "ArrowLeft")
                return;

            if(e.code === "ArrowRight") {
                tabFocus++;
                if(tabs?.length && tabFocus >= tabs?.length)
                    tabFocus = 0;
            }
            if(e.code === "ArrowLeft") {
                tabFocus--;
                if(tabs?.length && tabFocus < 0)
                    tabFocus = tabs.length - 1;
            }

            tabs[tabFocus].focus();
        }
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [activeLink]);
    
    const linkItems = data.destinations.map((element) => {
        const activeClass = element.id == activeLink ? "active" : "";
        return (
            <li key={element.id} className={activeClass}>
                <button
                    className={`uppercase text-white ff-sans letter-spacing-2`}
                    onClick={() => setActiveLink(element.id)}
                    role="tab"
                >
                    {element.name}
                </button>
            </li>
        );
    });
    return (
        <main id="main" className="grid-container grid-container--destination flow">
            
            <PageTitle number="01" text="Pick your Destination" />
            
            <ImageSection
                type='destination'
                images={data.destinations[activeLink].images}
                alt={data.destinations[activeLink].name}
            />
        
            
            <ul className="tab-list underline-indicators flex" role="tablist">{linkItems}</ul>
            
            <article className="destination-info-container flex" role="tabpanel">


                <TextSection
                    element={data.destinations[activeLink]}
                    type='destination'
                    />

                <Distance element={data.destinations[activeLink]} />
            </article>
        </main>
    );
};

export default Destination