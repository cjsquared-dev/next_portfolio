import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1 style={nameStyle}>Chris Johnson</h1>
      <h2 style={positionStyle}>Full Stack Web Developer</h2>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  marginTop: '100px',

};

const nameStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '2.5em',
  color: '#999',
};

const positionStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '1.5em',
  color: '#777',
};

export default Header;