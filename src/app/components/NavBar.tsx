import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href="/homescreen">
        <span className="nav-icon">🏠</span>
      </Link>
      <Link href="/getStarted">
        <span className="nav-icon">➕</span>
      </Link>
      <Link href="/members">
        <span className="nav-icon">👥</span>
      </Link>
    </nav>
  );
};

export default NavBar;
