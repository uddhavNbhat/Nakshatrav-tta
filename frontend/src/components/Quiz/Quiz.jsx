import { useState, useEffect } from "react";
import Nav from "../Navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import quizData from "./QuizData.jsx";
import "./Quiz.css";

const Quiz = () => {
    const [categories, setCategories] = useState({
        Planets: { easy: [], medium: [], hard: [] },
        Moons: { easy: [], medium: [], hard: [] },
        Suns: { easy: [], medium: [], hard: [] },
        Satellites: { easy: [], medium: [], hard: [] },
        Asteroids: { easy: [], medium: [], hard: [] },
        Comets: { easy: [], medium: [], hard: [] },
    });

    const images = {
        planets: "/quiz/earth.png",
        moons: "/quiz/moon.png",
        suns: "/quiz/sun.png",
        satellites: "/quiz/satellite.png",
        asteroids: "/quiz/asteroid.png",
        comets: "/quiz/comet.png",
    };

    const categoryDescriptions = {
        planets: "Explore the diverse planets in our solar system.",
        moons: "Learn about the fascinating moons orbiting planets.",
        suns: "Discover the stars that light up our universe.",
        satellites: "Understand the artificial satellites orbiting Earth.",
        asteroids: "Study the rocky bodies scattered across space.",
        comets: "Investigate the icy visitors from the outer solar system.",
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "auto";
        setCategories(quizData);
    }, []);

    useEffect(() => {
        let interval;
        if (quizStarted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [quizStarted]);

    const startQuiz = (category, difficulty) => {
        setSelectedCategory({ category, difficulty });
        setQuestions(categories[category][difficulty]);
        setQuizStarted(true);
        setTimer(0);
    };

    const handleAnswerSelect = (index) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setQuizStarted(false);
    };

    return (
        <div className="container mt-5">
            <div className="navbar" style={{ marginBottom: "40px" }}>
                <Nav />
            </div>

            {/* Display category cards if quiz hasn't started */}
            {!quizStarted && !selectedCategory && (
                <div>
                    {Object.keys(categories).map((category) => (
                        <div className="row mb-4 mx-auto" key={category}>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={images[category]} alt={`${capitalize(category)} Image`} width="294" height="294" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" key={category}>
                                <div className="card custom-height">
                                    <div className="card-body text-center">
                                        <h5 className="card-title mt-5 title-size">{capitalize(category)}</h5>
                                        <p className="card-text">{categoryDescriptions[category]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" key={category}>
                                <div className="card custom-height">
                                    <div className="card-body text-center">
                                        <div className="d-flex flex-column align-items-start justify-content-center custom-height">
                                            <div className="d-flex align-items-center mb-5 ml-2">
                                                <button className="btn btn-secondary" onClick={() => startQuiz(category, "easy")}>
                                                    Easy
                                                </button>
                                                <span className="ml-2 text-color">Easy Level</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-5 ml-2">
                                                <button className="btn btn-primary" onClick={() => startQuiz(category, "medium")}>
                                                    Medium
                                                </button>
                                                <span className="ml-2 text-color">Medium Level</span>
                                            </div>
                                            <div className="d-flex align-items-center ml-2">
                                                <button className="btn btn-danger" onClick={() => startQuiz(category, "hard")}>
                                                    Hard
                                                </button>
                                                <span className="ml-2 text-color">Hard Level</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Quiz section */}
            {quizStarted && selectedCategory && (
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="question-text" style={{ marginBottom: "20px" }}>
                            {questions[currentQuestionIndex].question}
                        </h2>
                        <div style={{ color: "white" }}>Timer: {timer}s</div>
                    </div>
                    <div className="mt-3 d-flex flex-wrap justify-content-center">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`btn btn-block mb-3 ${
                                    selectedAnswers[currentQuestionIndex] === index
                                        ? index === questions[currentQuestionIndex].correctAnswer
                                            ? "btn-success"
                                            : "btn-danger"
                                        : "btn-outline-primary"
                                }`}
                                style={{ margin: "10px", flex: "1 0 21%" }} // 21% to fit 4 columns with margins
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-end fixed-bottom" style={{ padding: "20px" }}>
                        {currentQuestionIndex < questions.length - 1 ? (
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}
                                disabled={currentQuestionIndex >= questions.length - 1}
                                style={{ width: "150px" }}
                            >
                                Next Question
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={handleSubmit} style={{ width: "150px" }}>
                                Submit Test
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Score display */}
            {!quizStarted && score !== 0 && (
                <div>
                    <div className="alert alert-info mt-4">Your score: {score}</div>
                    <div className="alert alert-info mt-4">Time Taken: {timer} seconds</div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
