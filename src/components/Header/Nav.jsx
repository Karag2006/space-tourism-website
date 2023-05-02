import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className='navText'>
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
                    <Link to='/crew'>
                        <span>02</span> Crew
                    </Link>
                </li>
                <li>
                    <Link to='/technology'>
                        <span>03</span> Technology
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
