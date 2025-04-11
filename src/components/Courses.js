import { useNavigate } from 'react-router-dom';
import { FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';

export default function Courses() {
  const navigate = useNavigate();

  const codingPlans = [
    { id: 1, title: 'JavaScript Basics', rating: 4.5, likes: 120, comments: 32 },
    { id: 2, title: 'Advanced Java', rating: 4.8, likes: 95, comments: 27 },
    { id: 3, title: 'Python for Beginners', rating: 4.6, likes: 110, comments: 40 },
    { id: 4, title: 'React.js Mastery', rating: 4.7, likes: 130, comments: 50 },
    { id: 5, title: 'Node.js Deep Dive', rating: 4.4, likes: 85, comments: 22 },
    { id: 6, title: 'Data Structures & Algorithms', rating: 4.9, likes: 150, comments: 60 },
    { id: 7, title: 'Full-Stack Development', rating: 4.6, likes: 105, comments: 35 },
    { id: 8, title: 'Machine Learning Basics', rating: 4.3, likes: 75, comments: 18 },
    { id: 9, title: 'Database Management', rating: 4.5, likes: 90, comments: 25 },
    { id: 10, title: 'System Design', rating: 4.8, likes: 125, comments: 45 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-white">
      <h1 className="text-6xl font-extrabold mb-16 text-center drop-shadow-lg">Explore Coding Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {codingPlans.map((plan) => (
          <div
            key={plan.id}
            className="p-10 bg-gradient-to-br from-white to-gray-100 text-gray-900 rounded-3xl shadow-2xl transition-transform transform hover:scale-110 hover:rotate-1 cursor-pointer"
            onClick={() => navigate(`/courses/${plan.id}`)}
          >
            <h2 className="text-3xl font-bold mb-6">{plan.title}</h2>
            <p className="text-lg mb-6 leading-relaxed">Master the core concepts of {plan.title} with hands-on exercises and real-world projects.</p>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-3" />
                <span className="text-xl font-semibold">{plan.rating}</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-red-500 mr-3" />
                <span className="text-xl">{plan.likes}</span>
              </div>
              <div className="flex items-center">
                <FaCommentDots className="text-blue-400 mr-3" />
                <span className="text-xl">{plan.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/dashboard')}
        className="mt-16 px-10 py-4 bg-red-500 hover:bg-red-600 text-white text-2xl font-semibold rounded-2xl shadow-xl transition-transform transform hover:scale-110"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
