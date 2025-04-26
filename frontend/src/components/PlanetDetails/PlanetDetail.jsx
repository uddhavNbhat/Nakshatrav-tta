import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import * as Spacekit from 'spacekit.js';
import './PlanetDetail.css';
import Nav from '../Navbar/Nav';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const planetTextures = {
  mercury: '/textures/mercury.jpg',
  venus: '/textures/venus.jpg',
  earth: '/textures/earth.jpg',
  mars: '/textures/mars.jpg',
  jupiter: '/textures/jupiter.jpg',
  saturn: '/textures/saturn.jpg',
  uranus: '/textures/uranus.jpg',
  neptune: '/textures/neptune.jpg',
};

const facts = {
  mercury: "Mercury is the smallest planet in the Solar System.",
  venus: "Venus has a thick atmosphere and is the hottest planet.",
  earth: "Earth is the only planet known to support life.",
  mars: "Mars is known as the Red Planet.",
  jupiter: "Jupiter is the largest planet in the Solar System.",
  saturn: "Saturn is famous for its prominent ring system.",
  uranus: "Uranus rotates on its side, unlike other planets.",
  neptune: "Neptune has the strongest winds in the Solar System.",
};

const PlanetDetail = () => {
  const { name } = useParams();
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById('planet-model');
    container.innerHTML = '';

    const viz = new Spacekit.Simulation(container, {
      basePath: 'https://typpo.github.io/spacekit/src',
    });

    const planet = viz.createSphere(name, {
      textureUrl: planetTextures[name],
    });

    if (name === 'saturn') {
      planet.addRings(184270000.580913, 380478000.924731, "/textures/saturn_rings_top.png");
    }

    return () => {
      container.innerHTML = '';
    };
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
  
    const userMessage = { role: 'user', text: userInput };
    setChatHistory((prev) => [...prev, userMessage]);
    setUserInput(''); // Clear the input field
  
    try {
      // Send a POST request to the backend with planet and user question
      const res = await axios.post('http://localhost:5000/api/chat-service', {
        planet: name,    // Planet name from useParams()
        question: userInput, // User's input question
      });
  
      // Update chat history with the response from the bot
      const botMessage = { role: 'bot', text: res.data.answer };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (err) {
      // In case of an error, show a generic error message
      const errorMessage = { role: 'bot', text: 'Oops! Something went wrong.' };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
  };
  

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatHistory]);

  return (
    <div className="container-fluid p-0 m-0">
      <Nav />
      <div className="row planet-detail-container g-0">
        {/* Planet 3D Model */}
        <div className="col-8 planet-model" id="planet-model"></div>

        {/* Planet Info and Chat Box */}
        <div className="col-4 planet-info">
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
          <p>{facts[name]}</p>

          {/* Chat Box */}
          <div className="chat-box" ref={chatBoxRef}>
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.role}`}>
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={`Ask about ${name}...`}
              className="chat-input"
            />
            <button type="submit" className="chat-submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
