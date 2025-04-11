import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import QuizGenerator from './components/QuizGenerator';
import QuizPage from './components/QuizPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/student-dashboard" element={<Dashboard userRole="Student" />} />
        <Route path="/teacher-dashboard" element={<Dashboard userRole="Teacher" />} />
        <Route path="/dashboard" element={<Dashboard userRole="Student" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course/:id" element={<CourseDetails/>} />
       <Route path="/courses" element={<Courses />} />
       <Route path="/quiz-generator" element={<QuizGenerator />} />
       <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}
