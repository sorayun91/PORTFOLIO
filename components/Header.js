import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Header