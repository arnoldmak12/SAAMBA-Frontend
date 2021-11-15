import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Demo from "./Demo";
import ErrorPage from "./ErrorPage";


class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/demo" component={Demo} />
                        <Route path="/error" component={ErrorPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;