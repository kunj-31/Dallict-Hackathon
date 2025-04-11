import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const skillCourses = [
  'JavaScript',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'React',
  'Node.js',
  'MongoDB',
  'Data Structures',
  'Algorithms',
];

export default function QuizGenerator() {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [questionLimit, setQuestionLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = async () => {
    if (!selectedSkill) {
      alert('Please select a skill to start the quiz.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get('https://quizapi.io/api/v1/questions', {
        headers: {
          'X-Api-Key': 'l1zkImOy5SbG4ayGt3kmwuP3FFXLlWBdTVWJDfCQ',
        },
        params: {
          limit: questionLimit,
          category: selectedSkill,
          tags: selectedSkill,
        },
      });

      if (!response.data || response.data.length === 0) {
        throw new Error('No questions available for this skill.');
      }

      const questions = response.data.map((item, index) => ({
        id: index + 1,
        question: item.question,
        options: Object.values(item.answers).filter(Boolean),
        answer: Object.keys(item.correct_answers).find(
          (key) => item.correct_answers[key] === 'true'
        ),
      }));

      navigate(`/quiz/${selectedSkill}`, { state: { questions } });
    } catch (error) {
      console.error('Error fetching questions:', error);
      alert('Failed to load quiz questions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 text-white flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-12 animate-pulse">Skill-Based Quiz Generator</h1>

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-gray-900 w-full max-w-2xl">
        <label className="block mb-6 text-2xl font-semibold">Select a Skill:</label>
        <select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="w-full p-4 text-lg rounded-xl border-2 border-indigo-500 focus:ring-indigo-400"
        >
          <option value="">-- Choose a Skill --</option>
          {skillCourses.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <label className="block mt-8 mb-4 text-2xl font-semibold">Set Question Limit (1-100):</label>
        <input
          type="number"
          value={questionLimit}
          onChange={(e) =>
            setQuestionLimit(Math.min(100, Math.max(1, parseInt(e.target.value, 10) || 1)))
          }
          className="w-full p-4 text-lg rounded-xl border-2 border-indigo-500 focus:ring-indigo-400"
          min="1"
          max="100"
        />

        <button
          onClick={handleStartQuiz}
          disabled={loading}
          className="mt-8 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-2xl font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          {loading ? 'Loading...' : 'Start Quiz'}
        </button>
      </div>
    </div>
  );
}
