import Navlinks from "./Navlinks";
import Collapsible from "react-collapsible"; // https://www.npmjs.com/package/react-collapsible
import { useAuthContext } from "../../contexts/AuthContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar() {

    const { isAuthenticated } = useAuthContext();

    return (
        <div>
            <nav className="navbar">
                    <div className="hamburger">
                        <Collapsible trigger="" triggerClassName="fas fa-bars fa-lg" triggerOpenedClassName="fas fa-bars fa-lg" triggerTagName="i" > {/* <i className="fas fa-bars fa-lg"></i> */}
                            <Navlinks />
                        </Collapsible>
                    </div>
                    <div className="navlinks">
                        <Navlinks/>
                    </div>
                    <div className="navlogin">
                        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                    </div>
                </nav>
        </div>
    )
}
