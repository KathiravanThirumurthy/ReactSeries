import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div>

        <header class="header">
                <div class="logo">
                🎮 GameSeminar
                </div>

                <nav class="nav-actions">
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#courses">Courses</a>
                <a href="#contact" class="cta">Register</a>
                </nav>
            </header>

    </div>
  )
}

export default Header