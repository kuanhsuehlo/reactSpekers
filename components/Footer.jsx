import React from 'react'
import '../scss/all.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer-wrap'>
        <div className='footer-nav'>
          <div>
            <h2>ACOUSTRA</h2>
          </div>
          <div className='footer-menu'>
            <Link><p>常見問題</p></Link>
            <Link><p>關於我們</p></Link>
            <Link><p>隱私權政策</p></Link>
            <Link><p>使用者條款</p></Link>
          </div>
        </div>
        <div className='footer-copy'>
          <div className='footer-flex'>
            <small>copyright&copy;2025 All Rights Reserved.</small>
            <div className='footer-icon'>
              <div>
                <a href="#">
                  <div className='btn-line'></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className='btn-yt'></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className='btn-fb'></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer