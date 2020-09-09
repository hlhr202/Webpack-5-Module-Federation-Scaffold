import React from "react";
import { Route, Switch, Router, RouteComponentProps } from "react-router-dom";
import loadable from "@loadable/component";
import { history } from "./lib/history";

const PageA = loadable(
    (props: RouteComponentProps) => import("./pages/page-a"),
    { fallback: <div>Loading...</div> }
);

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/a" component={PageA} />
                <Route component={PageA} />
            </Switch>
        </Router>
    );
};

export default Routes;
