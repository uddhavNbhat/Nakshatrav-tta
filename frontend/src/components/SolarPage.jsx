import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Navbar/Nav.jsx";
import SolarSystem from "./SolarSystem.jsx";

function Main () {
    return (
        <div>
            <Nav/>
            <SolarSystem/>
        </div>
    )
}
export default Main