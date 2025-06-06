import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DemoRequestFormProps {
  onClose: () => void;
  onSubmit: (data: { email: string; useCase: string }) => void;
}

export function DemoRequestForm({ onClose, onSubmit }: DemoRequestFormProps) {
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('');

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "demo-request",
        email,
        useCase
      })
    })
    .then(() => {
      console.log("Success!");
      onSubmit({ email, useCase });
      onClose();
    })
    .catch(error => {
      console.log("Error: " + error);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        
        <form
          name="demo-request"
          method="post"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="demo-request" />
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="useCase" className="block text-sm font-medium mb-1">
              Use Case Description
            </label>
            <textarea
              id="useCase"
              name="useCase"
              required
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
              placeholder="Please describe your trading strategy and how you'd like to use our AI. We don't share your data with anyone"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
} 