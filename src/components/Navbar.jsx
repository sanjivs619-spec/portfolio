import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-brand">
          <NavLink to="/">Sanjiv Suresh</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/case-study" className={linkClass}>Case Study</NavLink></li>
          <li><NavLink to="/resume" className={linkClass}>Resume</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
