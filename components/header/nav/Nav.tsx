"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import data from "@/public/assets/data/data.json"

import "./Nav.scss"

interface NavProps {
    menuOpen?: boolean;
}

export const Nav = ({
    menuOpen
}: NavProps) => {
    const pathname = usePathname();
    return (
        <nav>
            <ul id="primary-navigation" className={`primary-navigation underline-indicators flex ${menuOpen ? 'menu-open' : ''}`}>
                {data.links.map((link) => (
                    <li key={link.id} className={link.href === pathname ? 'active' : ''} >
                        <Link 
                            className="uppercase text-white ff-sans-cond letter-spacing-2" 
                            href={link.href}
                        >
                            <span aria-hidden="true">{`0${link.id}`}</span>{link.label}
                        </Link>
                    </li>
                ))}                      
            </ul>
        </nav>
        
    );
};
