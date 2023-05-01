import { useState } from "react";
import { destinations } from "../assets/data/data.json";

const Destination = () => {
    const [activeDestination, setActiveDestination] = useState(0);
    return (
        <>
            <h5>
                <span>01</span> Pick your Destination
            </h5>
            <section className='destination--image'>
                <img
                    src={`${destinations[activeDestination].images.webp}`}
                    alt='The Moon'
                />
            </section>
            <section className='destination--text'>
                <ul>
                    <li>
                        <a href=''>Moon</a>
                    </li>
                    <li>
                        <a href=''>Mars</a>
                    </li>
                    <li>
                        <a href=''>Europa</a>
                    </li>
                    <li>
                        <a href=''>Titan</a>
                    </li>
                </ul>
                <h1>Moon</h1>
                <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div>
                    <div>
                        <h5 className='subheading2'>Avg. Distance</h5>
                        <h4 className='subheading'>384,400 km</h4>
                    </div>
                    <div>
                        <h5 className='subheading2'>Est. Travel Time</h5>
                        <h4 className='subheading'>3 Days</h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destination;
