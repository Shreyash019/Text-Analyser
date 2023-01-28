import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='top-footer'>
        <div className='top-footer-left'>
            <p>@ Copyright 2023</p>
        </div>
        <div className='top-footer-right'>
          <p>Developer</p>
          <p>Github</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </div>
      <div className='bottom-footer'>
        <p>Built at 🌏 By Shreyash Kumar</p>
      </div>
    </footer>
  )
}

export default Footer