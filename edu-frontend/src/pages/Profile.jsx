import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Profile(){
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout(){
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div style={{padding:24, maxWidth:900, margin:'0 auto'}}>
      <h2>Profile</h2>
      {!user ? (
        <div>You are not logged in. <a href="/login">Login</a></div>
      ) : (
        <div style={{marginTop:12}}>
          <div style={{background:'#fff',padding:16,borderRadius:8,boxShadow:'0 6px 18px rgba(15,23,37,0.04)'}}>
            <div style={{fontWeight:700,marginBottom:6}}>Email</div>
            <div style={{color:'#475569'}}>{user.email}</div>
          </div>

          <div style={{marginTop:16}}>
            <button onClick={handleLogout} style={{background:'#ef4444',color:'#fff',padding:'8px 12px',borderRadius:8,border:'none'}}>Logout</button>
          </div>
        </div>
      )}
    </div>
  )
}
