import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>
                        <span>00</span> Home
                    </Link>
                </li>
                <li>
                    <Link to='/destination'>
                        <span>01</span> Destination
                    </Link>
                </li>
                <li>
                    <a href=''>
                        <span>02</span> Crew
                    </a>
                </li>
                <li>
                    <a href=''>
                        <span>03</span> Technology
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
