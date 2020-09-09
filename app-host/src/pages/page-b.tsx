import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const PageB = () => {
    return (
        <div>
            <div>Page B</div>
            <Link to="/a">Go To Page A</Link>
        </div>
    );
};

export default PageB;
