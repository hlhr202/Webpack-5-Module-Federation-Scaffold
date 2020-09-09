import React from "react";
import { Link } from "react-router-dom";

const PageA = () => {
    return (
        <div>
            <div>Page A</div>
            <Link to="/b">Go To Page B</Link>
        </div>
    );
};

export default PageA;
