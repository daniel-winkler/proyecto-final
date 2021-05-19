import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import ShopPage from "../pages/ShopPage";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar">
                    <div className="hamburger">
                        <i class="fas fa-bars fa-lg"></i>
                    </div>
                    <div className="navbarmenu">
                        <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                        <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
                        <NavLink to="/divetypes" activeClassName="active">Dive Types</NavLink>
                        <NavLink to="/diveshops" activeClassName="active">Dive Shops</NavLink>
                    </div>
                    <div>
                        <NavLink to="/login"><i class="fas fa-user fa-lg"></i></NavLink>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/diveshops" component={ShopPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
