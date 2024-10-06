import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Navbar/Nav.jsx";
import Home from "./Home/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import { useEffect } from "react";

function Main () {
    useEffect(()=>{
        document.body.style.overflow = "auto";
    },[])
    return (
        <div>
            <Nav/>
            <Home/>
            <About/>
            <Footer/>
        </div>
    )
}
export default Main