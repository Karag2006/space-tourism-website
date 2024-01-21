import Link from "next/link";

export const Nav = () => {
    return (
        <nav>
            <ul className='navText'>
                <li>
                    <Link href={"/"}>
                        <span>00</span> Home
                    </Link>
                </li>
                <li>
                    <Link href='/destination'>
                        <span>01</span> Destination
                    </Link>
                </li>
                <li>
                    <Link href='/crew'>
                        <span>02</span> Crew
                    </Link>
                </li>
                <li>
                    <Link href='/technology'>
                        <span>03</span> Technology
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
