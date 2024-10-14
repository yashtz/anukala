import React, { useState } from 'react';

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
    <div className="flex flex-col items-center justify-center h-screen bg-[#78b087]">
      <form className="w-[350px] bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSignup}>
        <h2 className="text-4xl font-bold mb-8 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#006400] text-white hover:bg-[#004d00] transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-[#856c00] hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;