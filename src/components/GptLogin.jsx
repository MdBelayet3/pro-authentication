import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';

const GptLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in with:', email, password);
  };

  const handleGoogleLogin = () => {
    // Google authentication logic here
    console.log('Logging in with Google');
  };

  const handleGithubLogin = () => {
    // GitHub authentication logic here
    console.log('Logging in with GitHub');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="relative">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-[5%] top-[70%] transform -translate-y-1/2 text-gray-500 text-2xl"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className="w-full bg-blue-500 text-white rounded-xl py-2 hover:bg-blue-600 transition">Login</button>
      </form>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button onClick={handleGoogleLogin} className="flex items-center gap-2 text-red-600 hover:underline">
          <FaGoogle size={20} /> Google
        </button>
        <span className="text-gray-400">|</span>
        <button onClick={handleGithubLogin} className="flex items-center gap-2 text-black hover:underline">
          <FaGithub size={20} /> GitHub
        </button>
      </div>
    </div>
  );
};

export default GptLogin;
