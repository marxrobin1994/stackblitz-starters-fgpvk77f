'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password) {
      setMessage('Please fill in both fields!');
      return;
    }
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters!');
      return;
    }

    setIsLoading(true);
    setMessage('Creating your Fynzoverse account... ✨');

    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      setMessage(
        'Success! 🎉 Your account is ready. (Database connection coming next!)'
      );
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: '#F8F5FF' }}
    >
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-lg border border-purple-100">
        <div className="text-6xl mb-4 animate-pulse">✨</div>
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            background:
              'linear-gradient(135deg, #FF6EC7 0%, #C4A8E0 50%, #87CEEB 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Fynzoverse
        </h1>
        <p className="text-gray-600 mb-6">
          Create your account to join the universe!
        </p>

        <input
          className="w-full p-3 rounded-xl border-2 border-purple-100 mb-4 focus:outline-none focus:border-pink-400 transition-colors"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-xl border-2 border-purple-100 mb-4 focus:outline-none focus:border-pink-400 transition-colors"
          type="password"
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full p-3 rounded-full text-white font-bold text-lg cursor-pointer border-none transition-transform hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #FF6EC7 0%, #C4A8E0 100%)',
            boxShadow: '0 4px 15px rgba(255, 110, 199, 0.3)',
            opacity: isLoading ? 0.7 : 1,
          }}
          onClick={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Account'}
        </button>

        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              message.includes('Success') ? 'text-green-600' : 'text-purple-600'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
