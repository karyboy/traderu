import React, { useState } from 'react';
import { LineChart, TrendingUp as ArrowTrendingUp, Bot, Zap, CheckCircle, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    useCase: '',
    tradingIntervals: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      email: '',
      useCase: '',
      tradingIntervals: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <LineChart className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">TradingAI</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI-Powered Candlestick Pattern Recognition
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Harness the power of artificial intelligence to identify trading patterns with unprecedented accuracy.
          </p>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80"
              alt="Trading Dashboard"
              className="rounded-lg shadow-2xl mb-8"
            />
          </div>

          {/* Early Access Form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {!submitted ? (
                <>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email for early access"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        placeholder="Describe your use case (e.g., day trading, swing trading, specific markets)"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 min-h-[100px]"
                        required
                      />
                    </div>
                    <div>
                      <select
                        name="tradingIntervals"
                        value={formData.tradingIntervals}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="" disabled>Select trading intervals</option>
                        <option value="1m">1 minute</option>
                        <option value="5m">5 minutes</option>
                        <option value="15m">15 minutes</option>
                        <option value="30m">30 minutes</option>
                        <option value="1h">1 hour</option>
                        <option value="4h">4 hours</option>
                        <option value="1d">Daily</option>
                        <option value="1w">Weekly</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
                  >
                    <span>Get Early Access</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle className="w-6 h-6" />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <ArrowTrendingUp className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
            <p className="text-gray-400">
              Advanced AI algorithms identify complex candlestick patterns in real-time with high accuracy.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <Bot className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Models</h3>
            <p className="text-gray-400">
              Tailored AI models trained on your specific trading strategies and preferences.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <Zap className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-400">
              Instant pattern detection and alerts across multiple timeframes and markets.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 TradingAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;