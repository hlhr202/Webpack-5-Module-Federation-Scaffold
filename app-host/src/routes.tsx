import React from "react";
import { Route, Switch, Router, RouteComponentProps } from "react-router-dom";
import loadable from "@loadable/component";
import { history } from "./lib/history";

const PageA = loadable(
    (props: RouteComponentProps) => import("appSlave/page-a"),
    { fallback: <div>Loading...</div> }
);

const PageB = loadable(
    (props: RouteComponentProps) => import("./pages/page-b"),
    { fallback: <div>Loading...</div> }
);

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/a" component={PageA} />
                <Route path="/b" component={PageB} />
                <Route component={PageA} />
            </Switch>
        </Router>
    );
};

export default Routes;
