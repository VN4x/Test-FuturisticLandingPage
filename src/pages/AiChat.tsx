import React from 'react';

export function AiChat() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">AI Assistant</h1>
        <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden">
          <iframe
            src="https://huggingface.co/chat/"
            className="w-full h-full border-0"
            title="AI Chat Assistant"
          />
        </div>
      </div>
    </div>
  );
}