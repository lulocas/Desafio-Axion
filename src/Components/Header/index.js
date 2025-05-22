import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1>ORANGE</h1>
            <div className="links">
                <Link className="comidas" to="/comidas">Foods</Link>
                <Link className="pessoas" to="/pessoas">People</Link>
                <Link className="locais" to="/locais">Places</Link>
            </div>
        </header>
    );
}

export default Header;