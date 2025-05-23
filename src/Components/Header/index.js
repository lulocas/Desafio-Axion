import './header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

function Header() {
    const location = useLocation();
    const logout = () => {
        localStorage.removeItem("usuario"); 
        alert("Logout realizado com sucesso!");
        window.location.href = "/"; 
    };


    return (
        <header>
            <img className='logoNav' src={logo}/>
            <div className="links">
                <Link className={location.pathname === "/comidas" ? "comidas active" : "comidas"} to="/comidas">Foods</Link>
                <Link className={location.pathname === "/pessoas" ? "pessoas active" : "pessoas"} to="/pessoas">People</Link>
                <Link className={location.pathname === "/locais" ? "locais active" : "locais"} to="/locais">Places</Link>
                <a onClick={logout} className='botaoSair'>Exit</a>
            </div>
        </header>
    );
}

export default Header;