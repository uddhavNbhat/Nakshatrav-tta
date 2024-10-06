import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main-container">
            <video autoPlay muted loop className="background-video">
                <source src="planetVid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="header">
                <div className="text-wrapper">
                    <h1 className="main-heading">Explore the Cosmos: An interactive exploration of celestial bodies</h1>
                </div>
            </div>
            <div className="orrery">
                <Link className="btn btn-primary btn-lg custom-button" to="/solar" role="button">
                    Launch Orrery 🚀
                </Link>
            </div>
        </div>
    );
};

export default Home;
