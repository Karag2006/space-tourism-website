import { useState } from "react";
import { crew } from "../assets/data/data.json";
import { TextSection, ImageSection } from "../components";

const Destination = () => {
    const [activeLink, setActiveLink] = useState(0);
    const linkItems = crew.map((element) => {
        const activeClass = element.id == activeLink ? "active" : "";
        return (
            <li key={element.id}>
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
                <span>02</span> Meet your Crew
            </h5>
            <ImageSection type='crew' images={crew[activeLink].images} />
            <section className='crew--links'>
                <ul>{linkItems}</ul>
            </section>

            <TextSection element={crew[activeLink]} type='crew' />
        </>
    );
};

export default Destination;
