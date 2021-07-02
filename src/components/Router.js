import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Header from "./Header";
import Footer from "./Footer";
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShopPage from "../pages/ShopPage";
import ErrorPage from "../pages/ErrorPage";
import DestinationsPage from "../pages/DestinationsPage";
import SearchPage from "../pages/SearchPage";
import PostPage from "../pages/PostPage";


export default function Router() {
    return (
        <div className="pagecontainer backgroundimg">
            <div className="contentwrap">
                <BrowserRouter>
                    <Navbar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/shop/:id" component={ShopPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/destinations" component={DestinationsPage} />
                        <Route path="/post" component={PostPage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}
