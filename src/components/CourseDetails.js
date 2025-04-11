import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart, FaCommentDots, FaStar } from 'react-icons/fa';

const courseData = [
  { id: 1, title: 'JavaScript Basics', rating: 4.5, likes: 120, comments: 32, description: 'Learn the fundamentals of JavaScript, including variables, functions, and DOM manipulation.' },
  { id: 2, title: 'Advanced Java', rating: 4.8, likes: 95, comments: 27, description: 'Deep dive into Java concepts like multithreading, collections, and advanced OOP principles.' },
  { id: 3, title: 'Python for Beginners', rating: 4.6, likes: 110, comments: 40, description: 'An introduction to Python programming for beginners, covering syntax, data structures, and file handling.' },
  { id: 4, title: 'React.js Mastery', rating: 4.7, likes: 130, comments: 50, description: 'Master React.js with hooks, context API, and advanced component patterns.' },
  { id: 5, title: 'Node.js Deep Dive', rating: 4.4, likes: 85, comments: 22, description: 'Explore Node.js architecture, asynchronous programming, and building REST APIs.' },
  { id: 6, title: 'Data Structures & Algorithms', rating: 4.9, likes: 150, comments: 60, description: 'Comprehensive guide to mastering DSA with real-world coding examples and problem-solving strategies.' },
  { id: 7, title: 'Full-Stack Development', rating: 4.6, likes: 105, comments: 35, description: 'Become a full-stack developer by learning both frontend and backend development.' },
  { id: 8, title: 'Machine Learning Basics', rating: 4.3, likes: 75, comments: 18, description: 'Get started with machine learning concepts, algorithms, and practical applications.' },
  { id: 9, title: 'Database Management', rating: 4.5, likes: 90, comments: 25, description: 'Learn database management systems, SQL queries, and optimizing data storage.' },
  { id: 10, title: 'System Design', rating: 4.8, likes: 125, comments: 45, description: 'Learn how to design scalable and efficient software systems through system design principles.' },
];

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = courseData.find((c) => c.id === parseInt(id));
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      navigate('/courses');
    }
  }, [id, navigate]);

  if (!course) return <p className="text-center mt-20 text-white">Loading course details...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-12 text-white">
      <h1 className="text-5xl font-extrabold mb-12 text-center drop-shadow-lg">{course.title}</h1>

      <div className="bg-white text-gray-900 p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
        <p className="text-xl mb-8 leading-relaxed">{course.description}</p>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-3" />
            <span className="text-2xl font-semibold">{course.rating}</span>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-red-500 mr-3" />
            <span className="text-2xl">{course.likes}</span>
          </div>
          <div className="flex items-center">
            <FaCommentDots className="text-blue-400 mr-3" />
            <span className="text-2xl">{course.comments}</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/courses')}
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold rounded-2xl shadow-xl transition-transform transform hover:scale-105"
        >
          Back to Courses
        </button>
      </div>
    </div>
  );
}
