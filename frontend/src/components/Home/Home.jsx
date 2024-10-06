import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main-container">
            <div className="header">
                <div className="text-wrapper">
                    <h1 className="display-4">Explore the Cosmos: A Journey Through Space</h1>
                </div>
                <div className="text-wrapper">
                    <p className="lead">An interactive exploration of celestial bodies, including planets, asteroids, and comets</p>
                </div>
            </div>
            <div className="orrery">
                <Link className="btn btn-primary btn-lg" to="/solar" role="button">Launch Orrery</Link>
            </div>
        </div>
    );
}

export default Home;
