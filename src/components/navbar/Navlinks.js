import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <>
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/search" activeClassName="active">Search</NavLink>
            <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
            <NavLink to="/logbook" activeClassName="active">Logbook</NavLink>
            <NavLink to="/postshop" activeClassName="active">Post your shop!</NavLink>
        </>
    )
}
