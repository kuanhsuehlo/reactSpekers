import { Link } from "react-router-dom"
import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="nav-container">
          <div className="nav-wrap">
            <div className="navbar">
              <div>
                <a href="/">
                  <h1>ACOUSTRA</h1>
                </a>
              </div>
              <ul className="nav-itme">
                <li><Link to=''><p>Shop</p></Link></li>
                <li><Link to=''><p>Explore</p></Link></li>
                <li><Link to=''><p>Support</p></Link></li>
                <li><Link to='./Story'><p>Story</p></Link></li>
              </ul>
              <div className="nav-end">
                <div className="nav-notify">
                  <div><a href=""><img src="./images/notify.svg" alt="notify" /></a></div>
                  <div><a href=""><img src="./images/cart.svg" alt="cart" /></a></div>
                </div>
                <button>登入/註冊</button>
                
                {/* 漢堡選單按鈕 */}
                <button 
                  className="hamburger-btn"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                  <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
              </div>
            </div>
            
            {/* 移動端選單 */}
            <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
              <ul>
                <li><a href="" onClick={toggleMenu}><p>Shop</p></a></li>
                <li><a href="" onClick={toggleMenu}><p>Explore</p></a></li>
                <li><a href="" onClick={toggleMenu}><p>Support</p></a></li>
                <li><a href="" onClick={toggleMenu}><p>Story</p></a></li>
              </ul>
              <div className="mobile-actions">
                <div className="mobile-notify">
                  <div><a href=""><img src="./images/notify.svg" alt="notify" /></a></div>
                  <div><a href=""><img src="./images/cart.svg" alt="cart" /></a></div>
                </div>
                <button>登入/註冊</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;