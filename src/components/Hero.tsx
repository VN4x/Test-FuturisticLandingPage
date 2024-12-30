import React from 'react';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="w-16 h-16 mx-auto mb-8 animate-pulse" />
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to Our Futuristic Site
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore the future with us. Where innovation meets possibility.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}