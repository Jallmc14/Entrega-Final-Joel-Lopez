import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-secondary-subtle p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="AMWAY" width={220} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
            <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/belleza"}>Belleza</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/nutricion"}>Nutricion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary text-uppercase textoNavbar" to={"/category/bienestar"}>Bienestar</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;