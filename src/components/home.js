import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <>
        <div className="container">
            <h1>Home</h1>
            <div className="list-group">
                <Link to="/courses/table" className="list-group-item">
                    Courses Table
                </Link>
                <Link to="/courses/grid" className="list-group-item">
                    Courses Grid
                </Link>
            </div>
        </div>
    </>
);
