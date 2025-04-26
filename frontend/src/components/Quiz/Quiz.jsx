import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Quiz.css";

const Quiz = () => {
    const [categories, setCategories] = useState({
        planets: { easy: [], medium: [], hard: [] },
        moons: { easy: [], medium: [], hard: [] },
        suns: { easy: [], medium: [], hard: [] },
        satellites: { easy: [], medium: [], hard: [] },
        asteroids: { easy: [], medium: [], hard: [] },
        comets: { easy: [], medium: [], hard: [] },
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
    const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null)); // Adjusted for 5 questions
    const [score, setScore] = useState(null);
    const [timer, setTimer] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [difficulty, setDifficulty] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "auto";
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
        setDifficulty(difficulty);

        axios
            .post("http://localhost:5000/api/quiz", { category, difficulty }, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                // Filter questions to only the selected difficulty and limit to 5 questions
                const filteredQuestions = response.data.questions
                    .filter((q) => q.difficulty === difficulty)
                    .slice(0, 5); // Ensure only 5 questions are included

                setQuestions(filteredQuestions);
                setQuizStarted(true);
                setTimer(0);
                setCurrentQuestionIndex(0);
                setSelectedAnswers(Array(5).fill(null)); // Reset answers for 5 questions
                setScore(null);
            })
            .catch((error) => {
                console.error("Error starting the quiz:", error);
            });
    };

    const handleAnswerSelect = (index) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer !== null && answer === questions[index].correctAnswer) {
                newScore += 1;
            }
        });

        setScore(newScore);
        setQuizStarted(false);
    };

    const handleStartOver = () => {
        // Reset all states to their initial values
        setScore(null); // Reset score
        setTimer(0); // Reset timer
        setQuizStarted(false); // Set quizStarted to false to show category selection
        setSelectedCategory(null); // Clear selected category
        setDifficulty(null); // Clear difficulty
        setQuestions([]); // Clear the questions array
        setSelectedAnswers(Array(5).fill(null)); // Reset answers for 5 questions
        setCurrentQuestionIndex(0); // Reset question index to 0
    };

    return (
        <div className="container mt-5">
            <div className="navbar mb-5">
                <Nav />
            </div>

            {/* Category cards */}
            {!quizStarted && score === null && !selectedCategory && (
                <div>
                    {Object.keys(categories).map((category) => (
                        <div className="row mb-4 mx-auto" key={category}>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img
                                            src={images[category]}
                                            alt={`${capitalize(category)} Image`}
                                            width="294"
                                            height="294"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card custom-height">
                                    <div className="card-body text-center">
                                        <h5 className="card-title mt-5 title-size">
                                            {capitalize(category)}
                                        </h5>
                                        <p className="card-text">{categoryDescriptions[category]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card custom-height">
                                    <div className="card-body text-center">
                                        <div className="d-flex flex-column align-items-start justify-content-center custom-height">
                                            <div className="d-flex align-items-center mb-5 ml-2">
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={() => startQuiz(category, "easy")}
                                                >
                                                    Easy
                                                </button>
                                                <span className="ml-2 text-color">Easy Level</span>
                                            </div>
                                            <div className="d-flex align-items-center mb-5 ml-2">
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => startQuiz(category, "medium")}
                                                >
                                                    Medium
                                                </button>
                                                <span className="ml-2 text-color">Medium Level</span>
                                            </div>
                                            <div className="d-flex align-items-center ml-2">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => startQuiz(category, "hard")}
                                                >
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

            {/* Quiz Section */}
            {quizStarted && selectedCategory && questions.length > 0 && (
                <div>
                    {/* Check if there are valid questions to render */}
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="question-text mb-4">
                            {questions[currentQuestionIndex]?.question || "Loading..."}
                        </h2>
                        <div style={{ color: "white" }}>Timer: {timer}s</div>
                    </div>
                    <div className="mt-3 d-flex flex-wrap justify-content-center">
                        {questions[currentQuestionIndex]?.options?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`btn btn-block mb-3 ${
                                    selectedAnswers[currentQuestionIndex] === index
                                        ? "btn-info"
                                        : "btn-outline-primary"
                                }`}
                                style={{ margin: "10px", flex: "1 0 21%" }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between fixed-bottom" style={{ padding: "20px" }}>
                        {currentQuestionIndex > 0 && (
                            <button
                                className="btn btn-outline-light"
                                onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                                style={{ width: "150px" }}
                            >
                                Previous
                            </button>
                        )}
                        {currentQuestionIndex < questions.length - 1 ? (
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                                style={{ width: "150px" }}
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                                style={{ width: "150px" }}
                            >
                                Submit Test
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Result Summary */}
            {!quizStarted && score !== null && selectedCategory && (
                <div className="card mt-4 text-center">
                    <div className="card-body">
                        <h4 className="card-title">Quiz Complete!</h4>
                        <p className="card-text">Category: {capitalize(selectedCategory.category)}</p>
                        <p className="card-text">Difficulty: {capitalize(difficulty)}</p>
                        <p className="card-text">Score: {score}/5</p> {/* Adjusted score */}
                        <p className="card-text">Time Taken: {timer} seconds</p>
                        <button className="btn btn-info mt-3" onClick={handleStartOver}>
                            Start New Quiz
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
