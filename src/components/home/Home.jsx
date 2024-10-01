import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Explore the Cosmos: A Journey Through Space</h1>
            <p className="lead">An interactive exploration of celestial bodies, including planets, asteroids, and comets</p>
            <hr className="my-4" />
           {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
            <a className="btn btn-primary btn-lg" href="#" role="button">Launch Orrey</a>
        </div>
    )
}

export default Home