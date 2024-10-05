import { useState, useEffect } from "react";
import Nav from "./Navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import quizData from "../quizdata/QuizData";

const Quiz = () => {
    const [categories, setCategories] = useState({
        planets: { easy: [], medium: [], hard: [] },
        moons: { easy: [], medium: [], hard: [] },
        suns: { easy: [], medium: [], hard: [] },
        satellites: { easy: [], medium: [], hard: [] },
        asteroids: { easy: [], medium: [], hard: [] },
        comets: { easy: [], medium: [], hard: [] },
    });

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
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
                        <div className="row mb-4" key={category}>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                      <img src="/textures/venus.jpg" alt="NASA Logo" width="150" height="150"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-capitalize">{category}</h5>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-outline-primary" onClick={() => startQuiz(category, "easy")}>
                                                Easy
                                            </button>
                                            <button className="btn btn-outline-warning" onClick={() => startQuiz(category, "medium")}>
                                                Medium
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={() => startQuiz(category, "hard")}>
                                                Hard
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-capitalize">{category}</h5>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-outline-primary" onClick={() => startQuiz(category, "easy")}>
                                                Easy
                                            </button>
                                            <button className="btn btn-outline-warning" onClick={() => startQuiz(category, "medium")}>
                                                Medium
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={() => startQuiz(category, "hard")}>
                                                Hard
                                            </button>
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
                        <h2>{questions[currentQuestionIndex].question}</h2>
                        <div>Timer: {timer}s</div>
                    </div>

                    <div className="mt-3">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`btn btn-block mb-2 ${
                                    selectedAnswers[currentQuestionIndex] === index
                                        ? index === questions[currentQuestionIndex].correctAnswer
                                            ? "btn-success"
                                            : "btn-danger"
                                        : "btn-outline-primary"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 d-flex justify-content-between">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}
                            disabled={currentQuestionIndex >= questions.length - 1}
                        >
                            Next Question
                        </button>
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Submit Test
                        </button>
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
