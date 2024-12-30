import React from 'react';
import { Cpu, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Innovative Solutions',
    description: 'Leading the way in technology with cutting-edge solutions.',
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'Experience the latest in technological advancements.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Making a difference worldwide through innovation.',
  },
];

export function Features() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-800/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}