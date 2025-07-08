import React from 'react';
import { Leaf, Gift, Trophy } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const NavButton = ({ page, children, icon: Icon }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        currentPage === page
          ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
          : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
      }`}
    >
      <Icon size={18} />
      {children}
    </button>
  );

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg rotate-45"></div>
              <div className="absolute inset-1 bg-gray-900 rounded-lg rotate-45 flex items-center justify-center">
                <Leaf className="text-green-400 rotate-[-45deg]" size={20} />
              </div>
            </div>
            <span className="text-2xl font-bold text-white">ReCred</span>
          </div>
          <div className="flex items-center gap-2">
            <NavButton page="home" icon={Leaf}>Home</NavButton>
            <NavButton page="rewards" icon={Gift}>Rewards</NavButton>
            <NavButton page="leaderboard" icon={Trophy}>Leaderboard</NavButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;