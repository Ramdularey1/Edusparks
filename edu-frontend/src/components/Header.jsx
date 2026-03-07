import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import useAuth from '../hooks/useAuth'

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="site-header">
      <div className="header-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="EduSpark logo" />
          
        </Link>

        <div className="nav-links">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          {user ? (
            <>
              <Link to="/profile">Profile</Link>
              <button className="login-btn" onClick={() => logout()}>Logout</button>
            </>
          ) : (
            <Link to="/login"><button className="login-btn">Login</button></Link>
          )}
        </div>
      </div>
    </header>
  )
}
