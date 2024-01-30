"use client"

import { useState, useEffect } from "react";
import "./dot-indicators.scss"

interface DotIndicatorsProps {
    pages: {
        name: string,
        active?: boolean
    }[];
    activeTab: number;
    setTab: (destination: number) => void;
}

export const DotIndicators = ({
    pages,
    activeTab,
    setTab
}: DotIndicatorsProps) => {
    
    const handleClick = (destination: number) => {
        setTab(destination);
    }

    useEffect(() => {
        let tabFocus = activeTab;
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
    }, [activeTab]);

    return (
        <div className="dot-indicators tab-list flex" role="tablist">
            {pages.map((page, index) => (
                <button
                    key={index} 
                    onClick={() => handleClick(index)}
                    aria-selected={index === activeTab ? true : false}
                    role="tab"
                >
                    <span className="sr-only">{page.name}</span>
                </button>
            ))}
        </div>
    )
}