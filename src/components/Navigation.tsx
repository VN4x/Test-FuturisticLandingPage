import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">FutureTech</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-gray-300 hover:text-white ${isActive('/') ? 'text-purple-400' : ''}`}>
              Home
            </Link>
            <div className="relative group">
              <span className="text-gray-300 hover:text-white cursor-pointer">Solutions</span>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-purple-900/30 invisible group-hover:visible">
                <div className="py-1">
                  <Link to="/solutions/market-analysis" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-900/30">
                    Market Analysis
                  </Link>
                  <Link to="/solutions/finance" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-900/30">
                    Finance Portal
                  </Link>
                  <Link to="/solutions/ai-chat" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-900/30">
                    AI Assistant
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className={`text-gray-300 hover:text-white ${isActive('/contact') ? 'text-purple-400' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:bg-purple-900/30 rounded-md">
                Home
              </Link>
              <Link to="/solutions/market-analysis" className="block px-3 py-2 text-gray-300 hover:bg-purple-900/30 rounded-md">
                Market Analysis
              </Link>
              <Link to="/solutions/finance" className="block px-3 py-2 text-gray-300 hover:bg-purple-900/30 rounded-md">
                Finance Portal
              </Link>
              <Link to="/solutions/ai-chat" className="block px-3 py-2 text-gray-300 hover:bg-purple-900/30 rounded-md">
                AI Assistant
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:bg-purple-900/30 rounded-md">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}