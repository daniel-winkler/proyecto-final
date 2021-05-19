import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import IndexPage from "../pages/IndexPage";


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
