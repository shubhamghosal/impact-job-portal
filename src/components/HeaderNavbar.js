import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderNavbar extends Component {

    render() {
        return (
            <div className="App-header">
                <nav className="navbar navbar-expand navbar-dark bg-gradient">
                    <Link to={"/home"} className="navbar-brand" id="brand-header">
                        Shubham's Job Portal Application
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">
                                About Us
                            </Link>
                        </li>
                    </div>
                </nav>
            </div >
        )
    }
}
export default HeaderNavbar;