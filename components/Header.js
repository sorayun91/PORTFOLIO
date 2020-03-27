import Link from 'next/link';

const Header = () => (
    <nav>
        <ul className="left-menu-wrap">
            <li className="left-menu">
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="left-menu">
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li className="left-menu">
                <Link href="/skill">
                    <a>Skill Set</a>
                </Link>
            </li>
            <li className="left-menu">
                <Link href="/project">
                    <a>Project List</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            .left-menu-wrap { width:200px }
            .left-menu { font-size:15px; }
        `}</style>
    </nav>
)

export default Header