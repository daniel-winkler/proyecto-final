import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import ShopPage from "../pages/ShopPage";
import Navbar from "./Navbar";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
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
