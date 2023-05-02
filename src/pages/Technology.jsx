import { useState } from "react";
import { technology } from "../assets/data/data.json";
import { TextSection, ImageSection } from "../components";

const Destination = () => {
    const [activeLink, setActiveLink] = useState(0);
    const linkItems = technology.map((element) => {
        const activeClass = element.id == activeLink ? "active" : "";
        return (
            <li key={element.id}>
                <button
                    className={activeClass}
                    onClick={() => setActiveLink(element.id)}
                >
                    {element.id + 1}
                </button>
            </li>
        );
    });
    return (
        <>
            <h5>
                <span>03</span> Space Launch 101
            </h5>
            <ImageSection
                type='technology'
                images={technology[activeLink].images}
            />
            <section className='technology--links'>
                <ul>{linkItems}</ul>
            </section>

            <TextSection element={technology[activeLink]} type='technology' />
        </>
    );
};

export default Destination;
