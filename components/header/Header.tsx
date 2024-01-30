"use client"

import Image  from "next/image";
import { useState } from "react";

import { Logo, IconHamburger, IconClose } from "@/public/assets/images/";
import { Nav } from "@/components/header/nav/Nav";

import "./Header.scss"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="primary-header flex space-between">
            <div>
                <Image className="logo" src={Logo} alt='' />
            </div>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`text-white bg-dark mobile-nav-toggle`}
                aria-controls="primary-navigation" 
                aria-expanded={menuOpen}
            >
                <span className="sr-only">
                    Menu
                </span>
            </button>
            <Nav menuOpen={menuOpen} />
        </header>
    );
};
