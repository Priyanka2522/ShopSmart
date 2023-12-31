import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm ">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">ShopSmart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark ms-3">
                                <i className="fa fa-sign-in me-1"></i>
                            SignIn
                            </Link>

                            <Link to="/register" className="btn btn-outline-dark ms-3">
                                <i className="fa fa-user-plus me-1"></i>
                            Register
                            </Link>

                            <Link to="/cart" className="btn btn-outline-dark ms-3">
                                <i className="fa fa-shopping-cart me-1"></i>
                            Cart
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;