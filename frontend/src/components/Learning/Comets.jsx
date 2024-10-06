import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "../Navbar/Nav";
import { useEffect, useState } from "react";
import jsonData from "./Data/Coordinate"; // Ensure this path is correct
import * as Spacekit from "spacekit.js";

const Comets = () => {
    const [spaceObjects, setSpaceObjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page
    const totalComets = 54; // Limit for total comets

    useEffect(() => {
        // Convert JSON data to JavaScript objects
        const cometObjects = jsonData.map(comet => ({
            ...comet,
            e: parseFloat(comet.e),
            i_deg: parseFloat(comet.i_deg),
            w_deg: parseFloat(comet.w_deg),
            node_deg: parseFloat(comet.node_deg),
            q_au_1: parseFloat(comet.q_au_1),
            q_au_2: parseFloat(comet.q_au_2),
            p_yr: parseFloat(comet.p_yr),
            moid_au: parseFloat(comet.moid_au),
        }));

        setSpaceObjects(cometObjects.slice(0, totalComets));
    }, []);

    const displayedComets = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return spaceObjects.slice(startIndex, endIndex);
    };

    useEffect(() => {
        const cometsToDisplay = displayedComets();
        cometsToDisplay.forEach((comet, index) => {
            const element = document.getElementById(`card-${index}`);
            if (element) {
                const viz = new Spacekit.Simulation(element, {
                    basePath: 'https://typpo.github.io/spacekit/src',
                });
                viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
                viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);

                // Then add some planets
                viz.createObject('Mercury', Spacekit.SpaceObjectPresets.MERCURY);
                viz.createObject('Venus', Spacekit.SpaceObjectPresets.VENUS);
                viz.createObject('Earth', Spacekit.SpaceObjectPresets.EARTH);
                viz.createObject('Mars', Spacekit.SpaceObjectPresets.MARS);
                viz.createObject('Jupiter', Spacekit.SpaceObjectPresets.JUPITER);
                viz.createObject('Saturn', Spacekit.SpaceObjectPresets.SATURN);
                viz.createObject('Uranus', Spacekit.SpaceObjectPresets.URANUS);
                viz.createObject('Neptune', Spacekit.SpaceObjectPresets.NEPTUNE);

                console.log(`Initializing comet: ${comet.object_name}`);
                console.log(`Eccentricity (e): ${comet.e}`);
                console.log(`Semi-major axis (a): ${(comet.q_au_1 + comet.q_au_2) / 2}`);

                // Ensure eccentricity is valid
                if (typeof comet.e !== 'number' || comet.e < 0 || comet.e >= 1) {
                    console.error(`Invalid eccentricity for ${comet.object_name}: ${comet.e}`);
                    return;
                }

                const ephem = new Spacekit.Ephem(
                    {
                        epoch: comet.epoch_tdb,
                        a: (comet.q_au_1 + comet.q_au_2) / 2,
                        e: comet.e,
                        i: comet.i_deg,
                        om: comet.node_deg,
                        w: comet.w_deg,
                        ma: 0
                    },
                    'deg'
                );

                const cometObj = viz.createObject(comet.object_name, {
                    ephem,
                    ecliptic: {
                        displayLines: true,
                        lineColor: 0x333333,
                    },
                    labelText: comet.object_name,
                });
                viz.zoomToFit(cometObj);
            }
        });

        document.body.style.overflow = "auto";
    }, [currentPage, spaceObjects]); // Run this effect when currentPage or spaceObjects changes

    // Pagination logic
    const totalPages = Math.ceil(spaceObjects.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="Nav-container">
                <Nav />
            </div>
            <div className="Learning container-fluid">
                <div className="row Header mx-auto">
                    <h1>Learning</h1>
                </div>
                <div className="row mx-auto" style={{textAlign:"center",margin:"20px"}}>
                    <h1 style={{color:"white"}}>Comets</h1>
                </div>
                <div className="row">
                    {displayedComets().map((comet, index) => (
                        <div className="col-md-4 mb-4" key={comet.object_name}>
                            <div className="card">
                                <div className="card-body" style={{overflow:"hidden"}}>
                                    <h5 className="card-title">{comet.object_name}</h5>
                                    <div id={`card-${index}`} style={{ height: '400px', width: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span className="mx-3" style={{color:"white"}}>Page {currentPage} of {totalPages}</span>
                        <button className="btn btn-secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comets;
