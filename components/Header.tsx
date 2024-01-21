"use client"

import Image  from "next/image";
import { useState } from "react";

import { Logo, IconHamburger, IconClose } from "@/public/assets/images";
import { Nav } from "@/components/Nav";

export const Header = () => {
    const [active, setActive] = useState(false);
    function Menu() {
        if (active) {
            return (
                <div className='overlay'>
                    <button
                        onClick={() => setActive(false)}
                        className='menu-close'
                    >
                        <Image src={IconClose} alt='' />
                    </button>
                    <Nav />
                </div>
            );
        }
        return <Nav />;
    }
    return (
        <header>
            <Image src={Logo} alt='' />

            <button
                onClick={() => setActive(true)}
                className='header--hamburger'
            >
                <Image src={IconHamburger} alt='' />
            </button>
            <Menu />
        </header>
    );
};
