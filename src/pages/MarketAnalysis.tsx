import React from 'react';

export function MarketAnalysis() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Market Analysis</h1>
        <div className="w-full h-[800px] bg-white rounded-lg overflow-hidden">
          <iframe
            src="https://www.dextools.io/app/en/pairs/trending"
            className="w-full h-full border-0"
            title="DexTools Top Daily Gainers"
          />
        </div>
      </div>
    </div>
  );
}