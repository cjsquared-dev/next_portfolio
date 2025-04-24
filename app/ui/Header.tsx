import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white">
      <h1 className="text-5xl font-bold mb-2">Chris Johnson</h1>
      <h2 className="text-2xl font-medium">Full Stack Web Developer</h2>
    </header>
  );
};

export default Header;