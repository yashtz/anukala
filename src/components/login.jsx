import React, { useState } from 'react';
import artImage from '../resources/signup1.png'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: 60% width with image */}
      <div 
        className="w-3/5 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${artImage})` }}
      >
        {/* Optional: Add a dark overlay on the image */}
        <div className="w-full h-full bg-black opacity-50 flex justify-center items-center">
          <h1 className="text-white text-5xl font-yellowtail font-bold text-center">Anukala</h1>
        </div>
      </div>

      {/* Right side: 40% width with Login form */}
      <div className="w-2/5 bg-rose-950 p-8 flex flex-col justify-center">
        <form className="w-full bg-yellow-100 p-6 rounded-lg shadow-lg" onSubmit={handleLogin}>
          <h2 className="text-4xl font-bold font-yeseva mb-8 text-center text-rose-950">Login</h2>

          <div className="mb-4">
            <label className="block text-left font-yeseva text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded outline outline-rose-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-yeseva text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded outline outline-rose-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full outline outline-gray-950 py-2 font-yeseva bg-rose-900 text-white hover:bg-rose-200 hover:text-rose-950 transition"
          >
            Login
          </button>

          <p className="mt-4 text-center font-yeseva">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#856c00] hover:underline font-yeseva">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
