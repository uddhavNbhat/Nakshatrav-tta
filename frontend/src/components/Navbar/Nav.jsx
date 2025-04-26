import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom"; // Import Link
import "./Nav.css";

function Nav() { // Make sure to pass user and handleLogout as props
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                {/* Brand Logo and Title */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="/nasalogo.jpeg"
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-blockalign-text-top"
                    />
                    Nakshatravṛtta
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
                            <Link className="nav-link" to="/solar">Solar System</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle" 
                                id="learningDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                Learning Section
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="learningDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/learning/comet">Comets</Link>
                                </li>
                            </ul>
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
