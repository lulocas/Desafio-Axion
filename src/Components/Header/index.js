import './header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header>
            <h1>ORANGE</h1>
            <div className="links">
                <Link className={location.pathname === "/comidas" ? "comidas active" : "comidas"} to="/comidas">Foods</Link>
                <Link className={location.pathname === "/pessoas" ? "pessoas active" : "pessoas"} to="/pessoas">People</Link>
                <Link className={location.pathname === "/locais" ? "locais active" : "locais"} to="/locais">Places</Link>
            </div>
        </header>
    );
}

export default Header;