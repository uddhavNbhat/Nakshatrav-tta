import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom"; // Import Link
import "../../static/Nav.css";

function Nav() { // Make sure to pass user and handleLogout as props
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                {/* Brand Logo and Title */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
                        alt="NASA Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                        style={{ marginTop: '3px' }}
                    />
                    Nasa Space Apps
                </Link>

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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Learning Section</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz">Quiz Section</Link> {/* Link to quiz path */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
