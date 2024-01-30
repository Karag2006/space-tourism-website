"use client"

import { useEffect } from "react";
import "./numbered-indicators.scss"
import useWindowWidth from "@/hooks/useWindowWidth";

interface NumberedIndicatorsProps {
    pages: {
        name: string,
        active?: boolean
    }[];
    activeTab: number;
    setTab: (destination: number) => void;
}

export const NumberedIndicators = ({
    pages,
    setTab,
    activeTab,
}: NumberedIndicatorsProps) => {
    const handleClick = (destination: number) => {
        setTab(destination);
    }

    let currentWindowWidth = useWindowWidth(); 

    useEffect(() => {
        let tabFocus = activeTab;
        // Keyboard Controls need direct access to the rendered elements
        const tabList = document.querySelector('[role="tablist"]');
        const tabs = tabList?.querySelectorAll<HTMLElement>('[role="tab"]');

        // 58 rem = 928 px = desktop breakpoint
        const keyNext = currentWindowWidth < 928 ? 'ArrowRight' : 'ArrowDown';
        const keyPrev = currentWindowWidth < 928 ? 'ArrowLeft' : 'ArrowUp';

        const handleKeyDown = (e: KeyboardEvent) => {
            if(!tabs || e.code !== keyNext && e.code !== keyPrev)
                return;

            if(e.code === keyNext) {
                tabFocus++;
                if(tabs?.length && tabFocus >= tabs?.length)
                    tabFocus = 0;
            }
            if(e.code === keyPrev) {
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
    }, [activeTab, currentWindowWidth]);
    return (
        <div className="numbered-indicators tab-list flex" role="tablist">
            {pages.map((page, index) => (
                <button
                    key={index} 
                    onClick={() => handleClick(index)}
                    aria-selected={index === activeTab ? true : false}
                    className="text-white ff-serif fs-600 flex"
                    role="tab"
                >
                    <span className="sr-only">{page.name}</span>
                    <span aria-hidden="true">{index + 1}</span>
                </button>
            ))}
        </div>
    )
}