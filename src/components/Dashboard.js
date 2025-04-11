import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FaUser, FaBook, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Dashboard({ userRole }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRole) {
      navigate('/');
    }
  }, [userRole, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-blue-600">Skillify</h1>
        <button
          onClick={() => navigate('/')}
          className="flex items-center px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-2">
            <FaSignOutAlt size={24} className="text-red-500" />
          </div>
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Welcome, {userRole === 'Student' ? 'Student' : 'Teacher'}!
        </h2>

        <div className="flex justify-center gap-12">
          <CircleButton
            icon={<FaUser size={40} />}
            title="Profile"
            onClick={() => navigate('/profile')}
          />
          <CircleButton
            icon={<FaBook size={40} />}
            title="Courses"
            onClick={() => navigate('/courses')}
          />
          <CircleButton
            icon={<FaQuestionCircle size={40} />}
            title="Quizzes"
            onClick={() => navigate('/quizzes')}
            onClick={() => navigate('/quiz-generator')}

          />
        </div>
      </div>
    </div>
  );
}

function CircleButton({ icon, title, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <p className="mt-4 text-lg font-semibold">{title}</p>
    </div>
  );
}

