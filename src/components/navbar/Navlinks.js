import { NavLink } from "react-router-dom";

export default function NavLinks() {
    return (
        <>
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/search" activeClassName="active">Search</NavLink>
            <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
            <NavLink to="/divetypes" activeClassName="active">Dive Types</NavLink>
            <NavLink to="/diveshops" activeClassName="active">Dive Shops</NavLink>
        </>
    )
}
