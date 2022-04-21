import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h5 style={{ textAlign: 'center' }}>
        Copyright &copy; {new Date().getFullYear()} Portfolio
      </h5>
    </footer>
  );
};

export default Footer;
