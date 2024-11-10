import React, { useState } from 'react';
import artImage from '../resources/signup1.png'; // Correct path

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
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

      {/* Right side: 40% width with Sign Up form */}
      <div className="w-2/5 bg-rose-950 p-8 flex flex-col justify-center">
        <form className="w-full bg-yellow-50 p-6 rounded-lg shadow-lg" onSubmit={handleSignup}>
          <h2 className="text-4xl font-bold font-yeseva mb-8 text-center text-rose-950">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-left font-yeseva text-sm mb-2">Email</label>
            <input
              type="email"
              className="outline outline-rose-900 w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-yeseva text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 outline outline-rose-900 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-yeseva text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              className="outline outline-rose-900 w-full p-2 border border-gray-300 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full outline outline-gray-950 py-2 font-yeseva bg-rose-900 text-white hover:bg-rose-200 hover:text-rose-950 transition"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center font-yeseva">
            Already have an account?{' '}
            <a href="/login" className="text-[#856c00] hover:underline font-yeseva">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
