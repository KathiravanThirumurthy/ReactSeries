import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/python/">Python</a>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
    </nav>

  )
}

export default Home