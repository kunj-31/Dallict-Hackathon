import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(questions.length * 30); // 30 seconds per question

  useEffect(() => {
    if (timer <= 0) {
      handleSubmitQuiz();
    }
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSelectOption = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const correct = questions.filter(
      (q, index) => q.correct_answer === selectedOptions[index]
    ).length;
    setCorrectAnswers(correct);
    navigate('/results', { state: { correct, total: questions.length } });
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-green-500 to-blue-800 text-white p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-2xl text-gray-900">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-bold">
            Time Left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </p>
          <p className="text-xl">Question {currentQuestionIndex + 1} / {questions.length}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6">{currentQuestion?.question}</h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {Object.entries(currentQuestion?.answers || {}).map(([key, value]) => (
            value && (
              <button
                key={key}
                className={`p-4 rounded-xl text-lg font-medium border-2 
                  ${selectedOptions[currentQuestionIndex] === value ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                onClick={() => handleSelectOption(value)}
              >
                {value}
              </button>
            )
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-gray-400 hover:bg-gray-500 rounded-lg"
          >
            Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={handleSubmitQuiz} className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg">
              Submit
            </button>
          ) : (
            <button onClick={handleNext} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
