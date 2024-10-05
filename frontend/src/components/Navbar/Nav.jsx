import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../static/Nav.css";
import React from 'react';

function Nav({ user, handleLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                {/* Brand Logo and Title */}
                <a className="navbar-brand" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
                        alt="NASA Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                        style={{ marginTop: '3px' }}
                    />
                    Nasa Space Apps
                </a>

                {/* Navbar Toggle (for mobile view) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Learning Section</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quiz Section</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {user ? (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={user.profileImage}
                                        alt="Profile"
                                        width="30"
                                        height="30"
                                        className="rounded-circle me-2"
                                    />
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Account Details</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
