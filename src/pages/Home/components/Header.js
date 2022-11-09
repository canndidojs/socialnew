import React from 'react';
import Header from './components/Header'
import './style.css'

function Header() {
  return (
    <header className='header'>
            <div className='toolbar'>
                <div className=''>
                    <span>SocialBlue</span>
                </div>
            <div className=''>
                <button>Novo Post</button>
                    <span>img1</span>
                    <span>img2</span>
            </div>
            </div>
        </header>
  )
}

export default Header;