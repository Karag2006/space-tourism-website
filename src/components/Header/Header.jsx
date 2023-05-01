import { useState } from "react";

import { Logo, IconHamburger, IconClose } from "../../assets/images";
import { Nav } from "../";

const Header = () => {
    const [active, setActive] = useState(false);
    function Menu() {
        if (active) {
            return (
                <div className='overlay'>
                    <button
                        onClick={() => setActive(false)}
                        className='menu-close'
                    >
                        <img src={IconClose} alt='' />
                    </button>
                    <Nav />
                </div>
            );
        }
        return <Nav />;
    }
    return (
        <header>
            <img src={Logo} alt='' />

            <button
                onClick={() => setActive(true)}
                className='header--hamburger'
            >
                <img src={IconHamburger} alt='' />
            </button>
            <Menu />
        </header>
    );
};

export default Header;
