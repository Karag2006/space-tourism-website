import { useState } from "react";
import { destinations } from "../assets/data/data.json";
import { TextSection, ImageSection, Distance } from "../components";

const Destination = () => {
    const [activeLink, setActiveLink] = useState(0);
    const linkItems = destinations.map((element) => {
        const activeClass = element.id == activeLink ? "active" : "";
        return (
            <li key={element.id} className='navText'>
                <button
                    className={activeClass}
                    onClick={() => setActiveLink(element.id)}
                >
                    {element.name}
                </button>
            </li>
        );
    });
    return (
        <>
            <h5>
                <span>01</span> Pick your Destination
            </h5>
            <ImageSection
                type='destination'
                images={destinations[activeLink].images}
            />
            <section className='destination--links'>
                <ul>{linkItems}</ul>
            </section>

            <TextSection
                element={destinations[activeLink]}
                type='destination'
            />

            <Distance element={destinations[activeLink]} />
        </>
    );
};

export default Destination;
