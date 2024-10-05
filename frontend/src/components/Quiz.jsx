import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
    {
      question: "What is the closest planet to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "What is the name of the galaxy we live in?",
      options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
      correctAnswer: 1,
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is known for its rings?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 3,
    },
    {
      question: "What is the hottest planet in our solar system?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: 1,
    },
    {
      question: "Which planet is known as the Earth's twin?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      correctAnswer: 1,
    },
    {
      question: "What is the name of the 2nd largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 3,
    },
    {
      question: "Which planet has the most moons?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    let interval;
    if (quizStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted]);

  const startQuiz = () => {
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
    <div>
      {!quizStarted ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <div>
          <div>Timer: {timer}s</div>
          <div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                style={{
                  backgroundColor:
                    selectedAnswers[currentQuestionIndex] === index
                      ? index === questions[currentQuestionIndex].correctAnswer
                        ? 'green'
                        : 'red'
                      : 'white',
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
            }
            disabled={currentQuestionIndex >= questions.length - 1}
          >
            Next Question
          </button>
          <button onClick={handleSubmit}>Submit Test</button>
        </div>
      )}
      {!quizStarted && score !== 0 && <div>Your score: {score}</div>}
    </div>
  );
};

export default Quiz;