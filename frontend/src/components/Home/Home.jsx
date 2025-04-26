import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    return (
      <div className="main-container">
        <video autoPlay muted loop className="background-video">
          <source src="planetVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        <div className="button-wrapper-static">
          <Link className="btn btn-primary btn-lg custom-button" to="/solar" role="button">
            Launch Orrery 🚀
          </Link>
        </div>
  
        <div className="crawl-container">
          <div className="crawl">
            <p>Beyond the Horizon:<br />Stellar Odyssey</p>
            <p>
             <center> A Journey Begins Where Maps Fade</center><br /><br />
              In the quiet of the cosmos, where stars blink like ancient thoughts, a new odyssey takes form.
              Not forged in war or conquest, but born of questions — deep, endless, unspoken.<br />
              Among drifting worlds and forgotten light, they uncover fragments of knowledge lost to time.<br />
              Together, they journey where maps no longer speak — where curiosity leads, and learning is eternal.
              There is no final lesson, no ultimate truth… only the pursuit, only the path.<br />
              And so it begins — an eternal voyage into the unknown.<br />
              <center>Beyond the horizon… the odyssey begins.</center>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  