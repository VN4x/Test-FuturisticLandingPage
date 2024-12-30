import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Finance() {
  const handleRedirect = () => {
    window.location.href = 'https://finance.yahoo.com';
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Finance Portal</h1>
        <div className="bg-purple-900/30 p-8 rounded-lg text-center">
          <h2 className="text-2xl text-white mb-4">Redirecting to Yahoo Finance</h2>
          <p className="text-gray-300 mb-6">
            You'll be redirected to Yahoo Finance for comprehensive financial data and market analysis.
          </p>
          <button
            onClick={handleRedirect}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Continue to Yahoo Finance
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}