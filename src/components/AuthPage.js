import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import CardContent from './ui/CardContent';
import Input from './ui/Input';
import Label from './ui/Label';

export default function AuthPage() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('');

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setShowForm(true);
  };

  const handleSubmit = () => {
    alert(`${isLogin ? 'Logging in' : 'Creating account'} as ${role}`);
    navigate(`/${role.toLowerCase()}-dashboard`); // Redirects to specific dashboard
  };

  if (!showForm) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <Card className="w-full max-w-xl p-8 rounded-3xl shadow-xl bg-white text-gray-900">
          <CardContent>
            <h1 className="text-4xl font-extrabold mb-8 text-center">Welcome! Choose your role</h1>
            <div className="flex justify-around mt-8">
              <Button onClick={() => handleRoleSelection('Student')} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">Continue as Student</Button>
              <Button onClick={() => handleRoleSelection('Teacher')} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl">Continue as Teacher</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <Card className="w-full max-w-2xl p-10 rounded-3xl shadow-xl bg-white text-gray-900">
        <CardContent>
          <h1 className="text-4xl font-extrabold mb-8 text-center">
            {isLogin ? `Login as ${role}` : `Create an Account as ${role}`}
          </h1>

          <div className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-2 p-3 w-full border rounded-xl" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-2 p-3 w-full border rounded-xl" />
            </div>

            <div className="flex justify-center mt-8">
              <Button onClick={handleSubmit} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl">
                {isLogin ? 'Login' : 'Create Account'}
              </Button>
            </div>

            <div className="text-center mt-8">
              <p
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

