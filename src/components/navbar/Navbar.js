import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                    <div className="hamburger">
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
                    <div className="navlinks">
                        <Navlinks/>
                    </div>
                    <div className="navlogin">
                        <NavLink to="/login">
                            <i className="fas fa-user fa-lg"></i>
                            <span>Login / Register</span>
                        </NavLink>
                    </div>
                </nav>
        </div>
    )
}
